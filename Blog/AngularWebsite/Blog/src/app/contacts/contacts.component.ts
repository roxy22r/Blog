import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactForm, ContactService } from './contact.service';

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
  constructor(@Inject(ContactService) private service: ContactService) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    if (this.contactForm.valid){
      return;
    }
  }
  async send():Promise<void>{
   const data: ContactForm  = {
      surename: this.contactForm.value['surename'],
      firstname:this.contactForm.value['firstname'],
      email: this.contactForm.value['email'],
    } as ContactForm;
    this.service.send(data);
  }
get surename(){
  return this.contactForm.get('surename');
}


}
