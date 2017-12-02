import { Component, OnInit, ViewEncapsulation, NgModule, Inject } from "@angular/core";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LogComponent implements OnInit {

    constructor(
    public dialogRef: MatDialogRef<LogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void { 
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}