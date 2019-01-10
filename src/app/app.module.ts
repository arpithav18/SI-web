import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HomeComponent} from '../app/components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { ScreenshotsComponent } from './components/screenshots/screenshots.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
   HomeComponent,
   NavbarComponent,
   AboutUsComponent,
   TechnologiesComponent,
   ScreenshotsComponent,
   BlogComponent,
   ContactComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
