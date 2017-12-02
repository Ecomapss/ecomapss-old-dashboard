import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { MatTableDataSource, MatDialog } from "@angular/material";
import { Historia } from "../classes/Historia";
import { HistoriasService } from "../../services/historias.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ErrorPlugin } from "../../settings/ShowingErrors";
import { MessageServiceService } from "../../services/message-service.service";
import { ConfirmDeleteComponent } from "../../dialogs/confirm-delete/confirm-delete.component";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {
  dataSource: MatTableDataSource<Historia>;
  displayedColumns = ["titulo", "info", "localidade", "opcoes"];
  isEdit: Boolean = false;
  exportId: string;
  constructor(
    private _historyServer: HistoriasService,
    public snackBar: MatSnackBar,
    private _errorPlugin: ErrorPlugin,
    private dialog: MatDialog,
    private messageService: MessageServiceService
  ) {
    this.messageService.listen().subscribe(res => {
      this.getData();
    })
  }

  ngOnInit() {
    this.getData();
  }

  back() {
    this.isEdit = false;
  }

  getData() {
    this._historyServer.getData().subscribe(
      res => {
        let ElementData: Historia[] = res.Data;
        this.dataSource = new MatTableDataSource(ElementData);
      },
      err => {
        this._errorPlugin.setMessage(
          {
            Error: true,
            Menssage: "Error " + err.message + " Status: " + err.status
          },
          3500
        );
        this._errorPlugin.displayMessage(this.snackBar);
      }
    );
  }

  editItem(id: string) {
    this.exportId = id;
    this.isEdit = true;
  }

  applyFilter(text: string) {
    text = text.trim();
    text = text.toLowerCase();
    this.dataSource.filter = text;
  }

  deleteItem(id: string) {
    let dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      width: "200px"
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this._historyServer.deleteData(id).subscribe(
          res => {
            this._errorPlugin.setMessage(res, 3500);
            this._errorPlugin.displayMessage(this.snackBar);
            this.getData();
          },
          err => {
            this._errorPlugin.setMessage(
              {
                Error: true,
                Menssage: "Error " + err.message + " Status: " + err.status
              },
              3500
            );
            this._errorPlugin.displayMessage(this.snackBar);
          }
        );
      }
    });
  }
}
