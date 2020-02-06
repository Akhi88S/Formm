import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { FormComponent } from './form/form.component';
import { FormService } from './form.service';


const routes = [{
component:DisplayComponent,
path:"display"
},
{
component:FormComponent,
path:""
}]




@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule,RouterModule.forRoot(routes) ],
  exports:[RouterModule],
  declarations: [ AppComponent, DisplayComponent, FormComponent ],
  bootstrap:    [ AppComponent ],
  providers: [FormService]
})
export class AppModule { }
