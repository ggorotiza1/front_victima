import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VictimaComponent } from './victima/victima.component';

const routes: Routes = [
  { path: 'victim-form', component: VictimaComponent },  
  { path: '', redirectTo: '/victim-form', pathMatch: 'full' } 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
