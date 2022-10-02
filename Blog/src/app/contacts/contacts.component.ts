import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contactForm = new FormGroup({
    surename:new FormControl('',[Validators.required]),
    firstname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),


  })


  onSubmit(): void{
    if (this.contactForm.valid){
      return;
    }
  }
get surename(){
  return this.contactForm.get('surename');
}
  constructor() { }

  ngOnInit(): void {
  }

}
