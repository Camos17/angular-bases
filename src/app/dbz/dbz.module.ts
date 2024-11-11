import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterFormComponent } from './components/add-character/add-character-form.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ], 
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
