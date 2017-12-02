import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FosseisWebService } from "../../services/fosseis-web.service";
import { MatTableDataSource } from "@angular/material";
import { FosseisComponent } from "../fosseis.component";
import { Fossil } from "../classes/Fossil";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ErrorPlugin } from "../../settings/ShowingErrors";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ConfirmDeleteComponent } from "../../dialogs/confirm-delete/confirm-delete.component";
import { MessageServiceService } from '../../services/message-service.service';
@Component({
  selector: "app-fosseis-list",
  templateUrl: "./fosseis-list.component.html",
  styleUrls: ["./fosseis-list.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class FosseisListComponent implements OnInit {
  isEdit: Boolean = false;
  exportId: string;
  dataSource: MatTableDataSource<Fossil>;
  displayedColumns = ["designacao", "idade", "procedencia", "opcoes"];
  constructor(
    private _webServ: FosseisWebService,
    private _snackBar: MatSnackBar,
    private _errorPlugin: ErrorPlugin,
    private dialog: MatDialog,
    private _messageService: MessageServiceService
  ) {
    this._messageService.listen().subscribe(res => {
      this.getData();
    })
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._webServ.getData().subscribe(
      res => {
        let ElementData: Fossil[] = res.Data;
        this.dataSource = new MatTableDataSource(ElementData);
      },
      error => {
        this._errorPlugin.setMessage(
          {
            Error: true,
            Menssage: "Error " + error.message + " Status: " + error.status
          },
          3500
        );
        this._errorPlugin.displayMessage(this._snackBar);
      }
    );
  }

  deleteItem(id: string) {
    let dialog = this.dialog.open(ConfirmDeleteComponent, {
      width: "250px"
    });

    dialog.afterClosed().subscribe(res => {
      if (res) {
        this._webServ.deleteItem(id).subscribe(
          res => {
            console.log(res);
            res.Menssage = "Deletado com sucesso";
            this._errorPlugin.setMessage(res, 3500);
            this._errorPlugin.displayMessage(this._snackBar);
            this.getData();
          },
          error => {
            this._errorPlugin.setMessage(
              {
                Error: true,
                Menssage: "Erro " + error.message + " Status: " + error.status
              },
              3500
            );
            this._errorPlugin.displayMessage(this._snackBar);
          }
        );
      }
    });
  }

  back() {
    this.isEdit = false;
  }

  editItem(id: string) {
    this.isEdit = true;
    this.exportId = id;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
