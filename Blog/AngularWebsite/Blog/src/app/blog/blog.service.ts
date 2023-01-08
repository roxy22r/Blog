import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { RouterOutlet } from '@angular/router';
import { lastValueFrom } from 'rxjs';

export interface BlogItem{
    id: string;
    title: string;
    content:string;
}
@Injectable({
    providedIn:'root'
  })
export class BlogService  {
    blogItems:BlogItem[] = [{id: '1', title: 'Learn Python', content: 'someeeeText asdfa  s'},
    {id: '2', title: 'Sky Python', content: 'someeeeText asdfa  s'},
    {id: '3', title: 'fire Python', content: 'someeeeText asdfa  s'},
    {id: '4', title: 'deep Python', content: 'someeeeText asdfa  s'}]
  rootUrl:string = "";
  constructor(public http: HttpClient){}

   async getAll():Promise<BlogItem[]>{
    return    this.blogItems;
    // return lastValueFrom(this.http.request<BlogItem[]>('GET',this.rootUrl));
    }
 

}
