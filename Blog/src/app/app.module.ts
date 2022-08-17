import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AboutMeComponent } from './about-me/about-me.component';
<<<<<<< Updated upstream
=======
import { ContactsComponent } from './contacts/contacts.component';
import { BlogComponent } from './blog/blog.component';
>>>>>>> Stashed changes


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    SlideShowComponent,
    AboutMeComponent,
<<<<<<< Updated upstream
=======
    ContactsComponent,
    BlogComponent,
>>>>>>> Stashed changes
  ],
  imports: [
    SlickCarouselModule,
    BrowserModule,
    AppRoutingModule,
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
