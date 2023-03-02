import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesndfPage } from './mesndf.page';

const routes: Routes = [
  {
    path: '',
    component: MesndfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesndfPageRoutingModule {}
