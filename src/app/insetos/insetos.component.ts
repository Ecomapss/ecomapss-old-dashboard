import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { InsetoModel } from "./classes/Inseto";
import { ErrorPlugin } from "../settings/ShowingErrors";
import { InsetosWebService } from "../services/insetos-web.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MessageServiceService } from '../services/message-service.service';

@Component({
  selector: "app-insetos",
  templateUrl: "./insetos.component.html",
  styleUrls: ["./insetos.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class InsetosComponent implements OnInit {
  model = new InsetoModel(true,"", "", "", "", "");
  pbar: Boolean = false;
  constructor(
    public snackBar: MatSnackBar,
    private _errorPlugin: ErrorPlugin,
    private _webServ: InsetosWebService,
    private _messageService: MessageServiceService
  ) {}
  ngOnInit() {}

  submit(): void {
    this.pbar = true;
    this._webServ.postData(this.model).subscribe(
      res => {
        this._errorPlugin.setMessage(res, 3500);
        this._errorPlugin.displayMessage(this.snackBar);
        this.model.clear();
        this.pbar = false;
        this._messageService.update();
      },
      error => {
        console.log(error);
        this._errorPlugin.setMessage({ Error: true, Menssage: "Error " + error.message + " Status: " + error.status }, 3500);
        this._errorPlugin.displayMessage(this.snackBar);
        this.pbar = false;
      }
    );
  }
}
