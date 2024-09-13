import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContraresetPageRoutingModule } from './contrareset-routing.module';

import { ContraresetPage } from './contrareset.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContraresetPageRoutingModule
  ],
  declarations: [ContraresetPage]
})
export class ContraresetPageModule {}
