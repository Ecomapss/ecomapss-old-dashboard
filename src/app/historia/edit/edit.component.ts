import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { HistoriasService } from '../../services/historias.service';
import { HistoriaModel } from '../classes/Historia';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorPlugin } from '../../settings/ShowingErrors';
import { MessageServiceService } from '../../services/message-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditComponent implements OnInit {
  @Input() id: string = "";
  model = new HistoriaModel(true, "", "", "");
  isEdit: Boolean = false;
  pbar: Boolean = false;
  constructor(private _historyServer: HistoriasService, public snackBar: MatSnackBar, private _errorPlugin: ErrorPlugin, public messageService: MessageServiceService) { }

  ngOnInit() {
    this.getData(this.id);
  }

  getData(id: string) {
    this._historyServer.getByIdData(id).subscribe(res => {
      delete res.data._id;
      this.model = res.data;
    })
  }

  putData() {
    this._historyServer.putData(this.id, this.model).subscribe(res => {
      this._errorPlugin.setMessage(res, 3500);
      this._errorPlugin.displayMessage(this.snackBar);
    }, err => {
      this._errorPlugin.setMessage({
        Error: true,
        Menssage: "Error "+err.message + " Status: " + err.status
      }, 3500);
    })
  }
}
