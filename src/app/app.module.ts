import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatListModule, MatProgressBarModule, MatBottomSheetModule, MatDialogModule } from '@angular/material';


import { AppComponent } from './app.component';
import { YoutubeSearchComponent } from './youtube-search/youtube-search.component';
import { SpinnerComponent } from './spinner/spinner.component';


import { YoutubeService } from './services/youtube.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './pipes/safe.pipe';


const MaterialModules = [
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatBottomSheetModule,
  MatDialogModule
]



@NgModule({
  declarations: [
    AppComponent,
    YoutubeSearchComponent,
    SpinnerComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModules,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
