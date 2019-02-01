import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {ComponentAComponent} from './component-a/component-a.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PipeTextPipe} from './pipe-text.pipe';
import {ComponentFormsComponent} from './component-forms/component-forms.component';
import {MaterialModule} from './material/material.module';
import {FormTdComponent} from './component-forms/form-td/form-td.component';
import {FormReactComponent} from './component-forms/form-react/form-react.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientComponent} from './http-client/http-client.component';
import { ExamplesTrainingComponent } from './examples-training/examples-training.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentAComponent,
    PipeTextPipe,
    ComponentFormsComponent,
    FormTdComponent,
    FormReactComponent,
    HttpClientComponent,
    ExamplesTrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
