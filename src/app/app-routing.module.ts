import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComponentAComponent} from './component-a/component-a.component';
import {ComponentFormsComponent} from './component-forms/component-forms.component';
import {FormTdComponent} from './component-forms/form-td/form-td.component';
import {FormReactComponent} from './component-forms/form-react/form-react.component';

const routes: Routes = [
  {path: '', redirectTo: '/compa', pathMatch: 'full'},
  {path: 'compa', component: ComponentAComponent},
  {path: 'compforms', component: ComponentFormsComponent, children: [
    {path: 'form-td', component: FormTdComponent},
    {path: 'form-react', component: FormReactComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
