import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../components/shared-module/shared-module.module';

import { GameTablePageRoutingModule } from './game-table-routing.module';

import { GameTablePage } from './game-table.page';
import { HeaderToolbarComponent } from 'src/app/components/header-toolbar/header-toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameTablePageRoutingModule,
    SharedModule
  ],
  declarations: [GameTablePage]
})
export class GameTablePageModule {}
