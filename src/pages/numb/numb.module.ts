import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NumbPage } from './numb';

@NgModule({
  declarations: [
    NumbPage,
  ],
  imports: [
    IonicPageModule.forChild(NumbPage),
  ],
})
export class NumbPageModule {}
