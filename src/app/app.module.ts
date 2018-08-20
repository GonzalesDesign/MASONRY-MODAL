



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { MatModule } from './mat.module';
import { MDCModule } from './mdc.module';

import { AppComponent } from './app.component';

import { MasonryComponent } from './masonry/masonry.component';
import { PopModalComponent } from './masonry/pop-modal/pop-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MasonryComponent,
    // PopUpDialog,
    PopModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatModule,
    MDCModule
  ],
  entryComponents: [
    // PopUpDialog,
    PopModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
