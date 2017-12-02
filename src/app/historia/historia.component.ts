import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Historia, HistoriaModel } from './classes/Historia';
import { HistoriasService } from '../services/historias.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorPlugin } from '../settings/ShowingErrors';
import { MessageServiceService } from '../services/message-service.service';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HistoriaComponent implements OnInit {

  model = new HistoriaModel(true, "", "", "");
  pbar: Boolean = false;

  constructor(private _historyService: HistoriasService, public snackBar: MatSnackBar, private _errorPlugin: ErrorPlugin, private _messageService: MessageServiceService) { }

  ngOnInit() {
  }

  submit() {
    this.pbar = true;
    this._historyService.postData(this.model).subscribe(res => {
      this._errorPlugin.setMessage(res, 3500);
      this._errorPlugin.displayMessage(this.snackBar);  
      this.pbar = false;
      this._messageService.update();
    })
  }

}
