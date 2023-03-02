import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormulaireNdfPage } from './formulaire-ndf.page';

const routes: Routes = [
  {
    path: '',
    component: FormulaireNdfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormulaireNdfPageRoutingModule {}
