import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TreeModel, Tree } from "../tree-component/classes/Tree";
import { WebConsumerService } from "../services/web-consumer.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material";
import { LogComponent } from "../tree-component/dialogs/log/log.component";
import { MessageServiceService } from "../services/message-service.service";
import { ErrorPlugin } from "../settings/ShowingErrors";
import {
  EventEmitter,
  Component,
  OnInit,
  ViewEncapsulation,
  style,
  state,
  animate,
  transition,
  trigger,
  Input,
  Output
} from "@angular/core";

@Component({
  selector: "app-tree-detail",
  templateUrl: "./tree-detail.component.html",
  styleUrls: ["./tree-detail.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class TreeDetailComponent implements OnInit {
  @Output() updated:EventEmitter<any> = new EventEmitter<any>()

  @Input() id: string;
  pbar: Boolean = false;
  model = new TreeModel("", "", "", "", "", "", "", "", "", "", []);
  locs = [];

  constructor(
    private _webServ: WebConsumerService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public message: MessageServiceService,
    private _errorPlugin: ErrorPlugin
  ) {}

  ngOnInit() {
    this.getData(this.id);
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(LogComponent, {
      width: "450px",
      data: { lat: 0, lng: 0 }
    });

    dialogRef.afterClosed().subscribe(result => {
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

  putData() {
    this.pbar = true;
    console.log(this.model);
    this._webServ.putItem(this.id, this.model).subscribe(res => {
      this._errorPlugin.setMessage(res, 3500);
      this._errorPlugin.displayMessage(this.snackBar);
      this.pbar = false;
      this.message.update();
      this.back();
    });
  }

  back() {
    this.updated.emit();
  }

  getData(id: string) {
    this._webServ.getByID(id).subscribe(res => {
      delete res.data._id;
      this.model = res.data;
      this.locs = res.data.loc;
    });
  }
}
