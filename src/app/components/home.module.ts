import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from '../components/navbar/navbar/navbar.component';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports:[NavbarComponent],
  declarations: [NavbarComponent]
})
export class HomeModule { }
