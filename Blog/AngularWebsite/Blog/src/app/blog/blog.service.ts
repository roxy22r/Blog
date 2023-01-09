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
  rootUrl:string = "http://localhost:5000/";
  constructor(public http: HttpClient){}

   async getAll():Promise<BlogItem[]>{
    return lastValueFrom(this.http.request<BlogItem[]>('GET',this.rootUrl+"Blog/contents"));
    }
 

}
