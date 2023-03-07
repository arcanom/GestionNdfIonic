import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsndfPageRoutingModule } from './detailsndf-routing.module';

import { DetailsndfPage } from './detailsndf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsndfPageRoutingModule
  ],
  declarations: [DetailsndfPage]
})
export class DetailsndfPageModule {}
