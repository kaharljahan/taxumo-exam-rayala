import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DiagonaldifComponent} from './diagonaldif/diagonaldif.component';
import {RunningtimeComponent} from './runningtime/runningtime.component';
import {StairccaseComponent} from './stairccase/stairccase.component';


const routes: Routes = [
{path:'diagonaldif',component:DiagonaldifComponent},
{path:'runningtime',component:RunningtimeComponent},
{path:'stairccase',component:StairccaseComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
