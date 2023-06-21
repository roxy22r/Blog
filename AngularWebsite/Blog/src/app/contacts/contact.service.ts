import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { lastValueFrom } from 'rxjs';
export interface ContactForm{
        surename:string;
        firstname: string;
        email: string;
}
@Injectable({
    providedIn:'root'
  })
export class ContactService{

    rootUrl:string = "";
    constructor(public http: HttpClient){}

    async send(data:ContactForm): Promise<void>{
        return lastValueFrom(this.http.request<void>('POST',this.rootUrl,{body:data}) );
    }

}
