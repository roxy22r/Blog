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
import { ContactsComponent } from './contacts/contacts.component';
import { BlogComponent } from './blog/blog.component';
import { AddBlogContentComponent } from './add-blog-content/add-blog-content.component';
import { ListAllBlogTopicsComponent } from './list-all-blog-topics/list-all-blog-topics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StateDragDropComponent } from './state-drag-drop/state-drag-drop.component';
import { HomeComponent } from './home/home.component';
import { BlogService } from './blog/blog.service';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './contacts/contact.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    SlideShowComponent,
    AboutMeComponent,
    ContactsComponent,
    BlogComponent,
    AddBlogContentComponent,
    ListAllBlogTopicsComponent,
    StateDragDropComponent,
    HomeComponent,
    BlogPostComponent,
  ],
  imports: [
    SlickCarouselModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [BlogService, ContactService],
  bootstrap: [AppComponent],
})
export class AppModule {}
