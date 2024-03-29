import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { AddBlogContentComponent } from './add-blog-content/add-blog-content.component';
import { BlogComponent } from './blog/blog.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { BlogPostComponent } from './blog-post/blog-post.component';

const routes: Routes = [
  { path: 'contact', component: ContactsComponent },
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'post', component: BlogPostComponent },
  { path: 'blog/add', component: AddBlogContentComponent },
  { path: 'aboutMe', component: AboutMeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
