import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineComponent } from './line.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LineComponent,
  }
];

@NgModule({
  declarations: [LineComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    SharedModule
  ]
})
export class LineModule { }
