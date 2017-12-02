import { Component, OnInit, ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';
import { FosseisWebService } from '../../services/fosseis-web.service';
import { ErrorPlugin } from '../../settings/ShowingErrors';
import { MatSnackBar } from '@angular/material';
import { FossilModel } from '../classes/Fossil';
import { MessageServiceService } from '../../services/message-service.service';

@Component({
  selector: 'app-fossil-edit',
  templateUrl: './fossil-edit.component.html',
  styleUrls: ['./fossil-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FossilEditComponent implements OnInit {
  @Output() updated:EventEmitter<any> = new EventEmitter<any>()
  @Input() id: string = "";
  pbar: Boolean = false;
  model = new FossilModel(true, "", "", "","","");
  constructor(public message: MessageServiceService, private _fossilServ: FosseisWebService, private _errorPlugin: ErrorPlugin, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getData(this.id);
  }

  getData(id: string) {
    this._fossilServ.getByID(id).subscribe(res => {
      delete res.data._id;
      this.model = res.data;
    }, err => {
      this._errorPlugin.setMessage(err, 3500);
      this._errorPlugin.displayMessage(this.snackBar);
    })
  }

  back() {
    this.updated.emit();
  }

  putData(id) {
    this.pbar = true;
    this._fossilServ.putItem(id, this.model).subscribe(res => {
      this._errorPlugin.setMessage(res, 3500);
      this._errorPlugin.displayMessage(this.snackBar);
      this.message.update();
      this.pbar = false;
      this.back();
    }, err => {
      this._errorPlugin.setMessage(err, 3500);
      this._errorPlugin.displayMessage(this.snackBar);
    })
  }

}
