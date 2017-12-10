import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { InsetoModel } from '../../insetos/classes/Inseto';
import { InsetosWebService } from '../../services/insetos-web.service';
import { ErrorPlugin } from '../../settings/ShowingErrors';
import { MatSnackBar } from '@angular/material';
import { MessageServiceService } from '../../services/message-service.service';

@Component({
  selector: 'app-inseto-edit',
  templateUrl: './inseto-edit.component.html',
  styleUrls: ['./inseto-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InsetoEditComponent implements OnInit {
  @Output() updated:EventEmitter<any> = new EventEmitter<any>()  
  @Input() id: string = "";
  model = new InsetoModel(true, "", "" ,'', "", "");
  pbar: Boolean = false;
  
  constructor(private _insetoServ: InsetosWebService, private _pluginError: ErrorPlugin, public snackBar: MatSnackBar, private _message: MessageServiceService) { }

  ngOnInit() {
    this.getData(this.id);
  }

  getData(id: string) {
    this._insetoServ.getByID(id).subscribe(res => {
      delete res.data._id;
      this.model = res.data;
    }, err => {
      this._pluginError.setMessage({
        Error: true,
        Menssage: "Error, Status: " + err.Status
      }, 3500);
    })
  }

  back() {

  }

  putData(id: string) {
    this.pbar = true;
    this._insetoServ.putItem(id, this.model).subscribe(res => {
      this._pluginError.setMessage(res, 3500);
      this._pluginError.displayMessage(this.snackBar);
      this._message.update();
      this.pbar = false;
      this.back();
    }, err => {
      this._pluginError.setMessage({
        Error: true,
        Menssage: "Error, Status: " + err.status
      }, 3500);
      this.pbar = false;
    })
  }
}
