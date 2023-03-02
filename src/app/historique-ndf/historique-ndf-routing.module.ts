import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoriqueNdfPage } from './historique-ndf.page';

const routes: Routes = [
  {
    path: '',
    component: HistoriqueNdfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoriqueNdfPageRoutingModule {}
