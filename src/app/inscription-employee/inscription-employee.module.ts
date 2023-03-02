import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptionEmployeePageRoutingModule } from './inscription-employee-routing.module';

import { InscriptionEmployeePage } from './inscription-employee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscriptionEmployeePageRoutingModule
  ],
  declarations: [InscriptionEmployeePage]
})
export class InscriptionEmployeePageModule {}
