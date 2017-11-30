import { Component, OnInit, ViewEncapsulation, ViewChild,style,
  state,
  animate,
  transition,
  trigger } from "@angular/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WebConsumerService } from "../services/web-consumer.service";
import { MatPaginator, MatTableDataSource, MatSort } from "@angular/material";
import { Tree } from "../tree-component/classes/Tree";
import { MessageServiceService } from '../services/message-service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ConfirmDeleteComponent } from '../dialogs/confirm-delete/confirm-delete.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorPlugin } from '../settings/ShowingErrors';
import { Router } from '@angular/router';

@Component({
  selector: "app-tree-list",
  templateUrl: "./tree-list.component.html",
  styleUrls: ["./tree-list.component.css"],
  encapsulation: ViewEncapsulation.None,
   animations: [
    trigger("fadeInOut", [
      transition(":enter", [
        // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition(":leave", [
        // :leave is alias to '* => void'
        animate(500, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class TreeListComponent implements OnInit {
  displayedColumns = ["nome_cie", "categoria", "origem", "opcoes"];
  trees: Array<Tree>;
  isEdit: Boolean = false;
  dataSource: MatTableDataSource<Tree>;
  exportId: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _webData: WebConsumerService, private _messageService: MessageServiceService, private _snackBar: MatSnackBar, private dialog: MatDialog, private _pluginError: ErrorPlugin, public router: Router) {
    this._messageService.listen().subscribe(result => {
      this.getData();
    })
  }

  ngOnInit() {
    this.getData();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  back() {
    this.isEdit = false;
  }

  editItem(id: string){
    this.exportId = id;
    this.isEdit = true;
  }

  deleteItem(id: string){
    let dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      width: "250px"
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this._webData.deleteItem(id).subscribe(res => {
          res.Menssage = "Deletado com sucesso";
          this._pluginError.setMessage(res, 3500);
          this._pluginError.displayMessage(this._snackBar);
          this.getData();
        }, error => {
          this._pluginError.setMessage({
            Error: true,
            Menssage: "Error " + error.message + " Status: " + error.status
          }, 3500);
          this._pluginError.displayMessage(this._snackBar);
        })
      }
    })

  }
  
  getData(): void {
    this._webData.getTrees().subscribe(trees => {
      let ElementData: Tree[] = trees.Data;
      this.dataSource = new MatTableDataSource(ElementData);
    });
  }
}


