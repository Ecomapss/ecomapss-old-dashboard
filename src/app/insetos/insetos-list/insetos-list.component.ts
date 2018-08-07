import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { InsetosWebService } from "../../services/insetos-web.service";
import { Inseto, Resource } from "../classes/Inseto";
import { MatTableDataSource } from "@angular/material";
import { ErrorPlugin } from "../../settings/ShowingErrors";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ConfirmDeleteComponent } from "../../dialogs/confirm-delete/confirm-delete.component";
import { MessageServiceService } from '../../services/message-service.service';

@Component({
  selector: "app-insetos-list",
  templateUrl: "./insetos-list.component.html",
  styleUrls: ["./insetos-list.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class InsetosListComponent implements OnInit {
  displayedColums = ["_id","ordem", "categoria", "origem", "opcoes"];
  dataSource: MatTableDataSource<Inseto>;
  isEdit: Boolean = false;
  exportId: string = "";
  constructor(
    private _webServ: InsetosWebService,
    private _snackBar: MatSnackBar,
    private errorPlugin: ErrorPlugin,
    public dialog: MatDialog,
    private _messageService: MessageServiceService
  ) {
    this._messageService.listen().subscribe(res => {
      this.getData();
    })
  }

  ngOnInit() {
    this.getData();
  }

  editItem(id){
    this.exportId = id;
    this.isEdit = true;
  }

  back() {
    this.isEdit = false;
  }

  getData() {
    this._webServ.getData().subscribe(
      res => {
        let ElementData: Resource = res;
        console.log(res);
        this.dataSource = new MatTableDataSource(ElementData.Data);
      },
      error => {
        this.errorPlugin.setMessage(
          {
            Error: true,
            Menssage: "Error " + error.message + " Status: " + error.status
          },
          3500
        );
        this.errorPlugin.displayMessage(this._snackBar);
      }
    );
  }

  deleteItem(id: string) {
    let dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      width: "250px"
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this._webServ.deleteItem(id).subscribe(
          res => {
            res.Menssage = "Deletado com sucesso";
            this.errorPlugin.setMessage(res, 3500);
            this.errorPlugin.displayMessage(this._snackBar);
            this.getData();
          },
          error => {
            this.errorPlugin.setMessage(
              {
                Error: true,
                Menssage: "Error " + error.message + " Status: " + error.status
              },
              3500
            );
            this.errorPlugin.displayMessage(this._snackBar);
          }
        );
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }
}
