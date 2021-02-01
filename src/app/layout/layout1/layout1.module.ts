import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';

import { SharedModule } from '../../shared/shared.module';
import { Layout1Component } from './layout1.component';
import { ProgressbarModule } from '../component/progressbar/progressbar.module';



@NgModule({
  declarations: [Layout1Component],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,

    SharedModule,
    ProgressbarModule

  ],
  exports: [Layout1Component]
})
export class Layout1Module { }
