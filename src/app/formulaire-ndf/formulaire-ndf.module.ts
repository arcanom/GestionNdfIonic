import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormulaireNdfPageRoutingModule } from './formulaire-ndf-routing.module';

import { FormulaireNdfPage } from './formulaire-ndf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormulaireNdfPageRoutingModule
  ],
  declarations: [FormulaireNdfPage]
})
export class FormulaireNdfPageModule {}
