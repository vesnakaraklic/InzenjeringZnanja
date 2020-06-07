import { AngularMaterialModule } from './angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacijentiComponent } from './components/pacijenti/pacijenti.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UnesiSimptomeDialogComponent } from './components/unesi-simptome-dialog/unesi-simptome-dialog.component';
import { FormsModule } from '@angular/forms';
import { UnesiDijagnozeDialogComponent } from './components/unesi-dijagnoze-dialog/unesi-dijagnoze-dialog.component';
import { UnesiTestoveDialogComponent } from './components/unesi-testove-dialog/unesi-testove-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PacijentiComponent,
    UnesiSimptomeDialogComponent,
    UnesiDijagnozeDialogComponent,
    UnesiTestoveDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule
  ],
  entryComponents : [UnesiSimptomeDialogComponent,UnesiDijagnozeDialogComponent,UnesiTestoveDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
