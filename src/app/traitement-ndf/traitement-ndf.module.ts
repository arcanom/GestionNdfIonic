import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TraitementNdfPageRoutingModule } from './traitement-ndf-routing.module';

import { TraitementNdfPage } from './traitement-ndf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TraitementNdfPageRoutingModule
  ],
  declarations: [TraitementNdfPage]
})
export class TraitementNdfPageModule {}
