import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameTablePage } from './game-table.page';

const routes: Routes = [
  {
    path: '',
    component: GameTablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameTablePageRoutingModule {}
