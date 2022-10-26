import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {path:'**',component:BlogComponent},
  {path:'contact', component: ContactsComponent},
  {path:'',component:BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
