import { MatSnackBar } from "@angular/material/snack-bar";
import { Info } from "./Config";

export class ErrorPlugin {
  private _prop: Info;
  public matSnack: MatSnackBar;
  private _confObj: Object;

  constructor() {

  }

  setMessage(prop: Info, duration: number) {
    this._prop = prop;
    this._confObj = {
        duration: duration
    };
  }

  displayMessage(snackBar: MatSnackBar) {
    let standartMessage = new String();
    this._prop.Error
      ? (standartMessage = "Error, ")
      : (standartMessage = "Sucesso, ");
     let snack = snackBar.open(standartMessage + this._prop.Menssage, "", this._confObj);
  }
}
