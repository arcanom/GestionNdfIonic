import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesndfPageRoutingModule } from './mesndf-routing.module';

import { MesndfPage } from './mesndf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesndfPageRoutingModule
  ],
  declarations: [MesndfPage]
})
export class MesndfPageModule {}
