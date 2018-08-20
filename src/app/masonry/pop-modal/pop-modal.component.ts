import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-pop-modal',
  templateUrl: './pop-modal.component.html',
  styleUrls: ['./pop-modal.component.scss']
})

export class PopModalComponent implements OnInit {

  public popImagePath = this.xData.imgPath;
  public imageToLoad = this.xData.imahe;

  constructor(
    public dialogRef: MatDialogRef<PopModalComponent>,
    @Inject(MAT_DIALOG_DATA) public xData: any) {} // public xData: DialogData

    ngOnInit() {
      console.log('popImagepath: ', this.popImagePath);
      console.log('this.imageToLoad: ', this.imageToLoad);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}