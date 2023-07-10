import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllhotelsComponent } from './allhotels/allhotels.component';

const routes: Routes = [
  {path: "", component:AllhotelsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
