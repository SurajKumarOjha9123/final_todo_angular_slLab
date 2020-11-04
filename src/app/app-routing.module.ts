import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DisplayComponent } from './display/display.component';
import { InputComponent } from './input/input.component';

const routes: Routes = [
  {path : 'displayTodo', component : DisplayComponent},
  {path : 'add', component : InputComponent},
  {path : 'about', component : AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DisplayComponent,InputComponent,AboutComponent]