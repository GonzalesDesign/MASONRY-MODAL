import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MasonryDataService } from '../../services/masonry-data.service';
import { PopModalComponent } from './pop-modal/pop-modal.component';

export interface DialogData {
  animal: string;
  name: string;
  img: string;
}

@Component({
  selector: 'app-masonry',
  templateUrl: './masonry.component.html',
  // template: ``,
  styleUrls: ['./masonry.component.scss']
})

export class MasonryComponent implements OnInit {

  public animal: string;
  public name: string;
  public popImagePath =  '../../assets/images/popImages/';
  public photos: any = [];
  public photosLength: number;

  constructor(private _masonryDataService: MasonryDataService,
              private _dialog: MatDialog) { }

  ngOnInit() {
  /*---=|••• OBSERVABLE •••|=---*/
  this._masonryDataService.masonryData()
  .subscribe(data => {this.photos = data;
    this.photosLength =  data.length;
    console.log('this.photos: ', this.photos);

    /*--= Secondary images =---*/
    // console.log('data: ', data);
    // console.log('data[0]: ', data[0]);
    // console.log('data[0].imagePath: ', data[0].imagePath);
    // console.log('data[0].images: ', data[0].images);
    // console.log('data[0].images.image1: ', data[0].images.image1);

    /* this.popUpImgsPath = data[0].imagePath;
    console.log('this.popUpImgsPath: ', this.popUpImgsPath); */
    // const img = data[0].images[0]; // .image1;
    // console.log('img: ', img.length);

    // const imagePopUp = this.popUpImgsPath + img;
    // // console.log('imagePopUp: ', imagePopUp.toString());
    // this.popUpImages.push(imagePopUp);
    // console.log('popUpImage: ', this.popUpImgsPath + this.popUpImages);
    // const popUpImgsLength =  data.images.length; // test
    // console.log('popUpImgsLength: ', popUpImgsLength);

    // // test
    // for (let i = 0; i < 3; i++) {
    //   this.popUpImgsPath = data[0].imagePath;
    //   this.popUpImages.push(this.popUpImgsPath + data[i].images[i]);
    //   console.log('this.popUpImages: ', this.popUpImages);
    // }

    // /*--= Populating arrays =--*/
    // for (let i = 0; i < data.length; i++) {
    //   const element = data[i];
    //   // this.photoKontainer.push('#' + element.kontainerId);
    //   this.photoKontainer[this.photoKontainer.length] = '#' + element.kontainerId; // push
    //   this.foto[this.foto.length] = '#' + element.imageId; // push
    //   // console.log('this.foto: ', this.foto);
    //   // console.log('this.photoKontainer[i]: ', this.photoKontainer[i], this.photoKontainer.length);
    // }

    // // this._funksions.fDisplay(this.loadingKontainer, 'flex'); // show loader
    // this._funksions.fLoadTimer(this.loading, this.timeout / 1000); // loading pseudo percentage counter

  },
  /* error => this.errorMsg = error); // ????????? Work on this error

  this._funksions.fDisplay(this.mainContainerId, 'none'); */

  /*--= Triggering resizeMe on enter =--*/
  /* setTimeout(() => {
    this.resizeMe();
  }, 100); */

}

  openDialog(pathImg, img): void {
    const dialogRef = this._dialog.open(PopModalComponent, {
      width: '80vw',
      height: '80vh',
      data: {imgPath: pathImg, imahe: img, name: this.name, animal: this.animal}
    });
    console.log(`img`, img);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

/*----------------------------------------=
=---=| DialogSimpleExample Component |=---=
=-----------------------------------------*/
/* @Component({
  selector: 'app-example-dialog',
  // templateUrl: 'app-example-dialog.html',
  template: `
      <div>
        YOU POPPED ME!
      </div>

      <div class="imageCarousel"
          [style.display]="'flex'"
          [style.justifyContent]="'center'"
          >
          <div *ngFor="let foto of imageToLoad; let i = index"
                [style.backgroundImage]="'url(' + popImagePath + foto.value + ')'"
                [style.background-repeat]="'no-repeat'"
                [style.backgroundSize]="'cover'"
                [style.width.px]="300"
                [style.height.vh]="70"
                [style.backgroundColor]="'red'"
                [style.backgroundPositionX.%]="50"
                [style.border]="'0px solid'">
          </div>
      </div>
  `,

  styles: [`
    .imageCarousel {
      dislay: flex;
      align-items: center;
      // flex-direction: column;
    }
  `]
})
export class PopUpDialog implements OnInit {

  public popImagePath = this.xData.imgPath;
  public imageToLoad = this.xData.imahe;

  constructor(
    public dialogRef: MatDialogRef<PopUpDialog>,
    @Inject(MAT_DIALOG_DATA) public xData: any) {} // public xData: DialogData

    ngOnInit() {
      console.log('popImagepath: ', this.popImagePath);
      console.log('this.imageToLoad: ', this.imageToLoad, this.xData.img);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

} */