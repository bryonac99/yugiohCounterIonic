import { HeaderToolbarComponent } from 'src/app/components/header-toolbar/header-toolbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CalculatorComponent } from '../calculator/calculator.component';
import { PlayButtonsComponent } from '../play-buttons/play-buttons.component';

@NgModule({
  declarations: [HeaderToolbarComponent,CalculatorComponent,PlayButtonsComponent],
  imports: [CommonModule,IonicModule],
  exports: [HeaderToolbarComponent,CalculatorComponent,PlayButtonsComponent]
})
export class SharedModule { }