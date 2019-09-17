import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditableComponent } from './common/components/editable/editable.component';
import { ImageUploadComponent } from './common/components/image-upload/image-upload.component';
import { HeaderComponent } from './common/header/header.component';
import { FormatDatePipe } from './common/pipes/format-date.pipe';
import { UppercasePipe } from './common/pipes/uppercase.pipe';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EditableComponent,
    ImageUploadComponent,
    HeaderComponent,
    FormatDatePipe,
    UppercasePipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


