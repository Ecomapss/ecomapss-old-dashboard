import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FossilModel } from "./classes/Fossil";
import { FosseisWebService } from "../services/fosseis-web.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ErrorPlugin } from "../settings/ShowingErrors";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MessageServiceService } from '../services/message-service.service';


@Component({
  selector: "app-fosseis",
  templateUrl: "./fosseis.component.html",
  styleUrls: ["./fosseis.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class FosseisComponent implements OnInit {
  model = new FossilModel(true,"", "", "", "", "");
  pbar: Boolean = false;

  constructor(
    private _webService: FosseisWebService,
    private _snackBar: MatSnackBar,
    private _errorPlugin: ErrorPlugin,
    private _messageService: MessageServiceService
  ) {}

  ngOnInit() {}

  submit(): void {
    this.pbar = true;
    this._webService.postData(this.model).subscribe(
      res => {
        this._errorPlugin.setMessage(res, 3000);
        this._errorPlugin.displayMessage(this._snackBar);
        this.pbar = false;
        this.model.clear();
        this._messageService.update();
      },
      error => {
        console.log(error);
        this._errorPlugin.setMessage(
          {
            Error: true,
            Menssage: "Error " + error.message + " Status: " + error.status
          },
          3500
        );
        this._errorPlugin.displayMessage(this._snackBar);
        this.pbar = false;
      }
    );
  }
}
