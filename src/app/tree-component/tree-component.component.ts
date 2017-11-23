import {
  Component,
  OnInit,
  ViewEncapsulation,
  NgModule,
  Inject
} from "@angular/core";
import { WebConsumerService } from "../services/web-consumer.service";
import { TreeModel, Tree } from "./classes/Tree";
import { MessageServiceService } from "../services/message-service.service";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { LogComponent } from "./dialogs/log/log.component";
import { ErrorPlugin } from "../settings/ShowingErrors";

@Component({
  selector: "app-tree-component",
  templateUrl: "./tree-component.component.html",
  styleUrls: ["./tree-component.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class TreeComponentComponent implements OnInit {
  title = "Tres";
  pbar: Boolean = false;

  model = new TreeModel("", "", "", "", "", "", "", "", "", []);

  constructor(
    private _webData: WebConsumerService,
    private _messageService: MessageServiceService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public errorPlugin: ErrorPlugin
  ) {}

  ngOnInit() {}

  remove(i: number) {
    this.model.loc.splice(i, 1);
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(LogComponent, {
      width: "450px",
      data: { lat: 0, lng: 0 }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      if (result) {
        result.lat = Number.parseFloat(result.lat);
        result.lng = Number.parseFloat(result.lng);
        if (Number.isNaN(result.lat) || Number.isNaN(result.lng)) {
          let snackBarRef = this.snackBar.open("Localização inválida!", "", {
            duration: 2000
          });
        } else this.model.loc.push(result);
      } else console.log(result);
    });
  }

  submit() {
    this.pbar = true;
    this._webData.postItem(this.model).subscribe(
      res => {
        this.errorPlugin.setMessage(res, 3500);
        this.errorPlugin.displayMessage(this.snackBar);
        this.pbar = false;
        this.model.clear();
        this._messageService.update();
      },
      error => {
        console.log(error);
        this.errorPlugin.setMessage(
          {
            Error: true,
            Menssage: "Error " + error.message + " Status: " + error.status
          },
          3500
        );
        this.errorPlugin.displayMessage(this.snackBar);
        this.pbar = false;
      }
    );
  }
}
