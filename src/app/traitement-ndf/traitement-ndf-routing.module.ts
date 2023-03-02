import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TraitementNdfPage } from './traitement-ndf.page';

const routes: Routes = [
  {
    path: '',
    component: TraitementNdfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraitementNdfPageRoutingModule {}
