import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoriqueNdfPageRoutingModule } from './historique-ndf-routing.module';

import { HistoriqueNdfPage } from './historique-ndf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoriqueNdfPageRoutingModule
  ],
  declarations: [HistoriqueNdfPage]
})
export class HistoriqueNdfPageModule {}
