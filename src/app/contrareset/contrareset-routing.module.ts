import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContraresetPage } from './contrareset.page';

const routes: Routes = [
  {
    path: '',
    component: ContraresetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContraresetPageRoutingModule {}
