import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { from, fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-add-blog-content',
  templateUrl: './add-blog-content.component.html',
  styleUrls: ['./add-blog-content.component.css']
})
export class AddBlogContentComponent implements OnInit {
  public loading = new Array(4);
  

  blogContentForm = new FormGroup({
    title:new FormControl('',[Validators.required]),
    content:new FormControl('',[Validators.required]),
  })

  onSubmit(): void{
    if (this.blogContentForm.valid){
       const result =  this.send();
 
      return;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

 async send(){

  }

  async getBlogItems(){

  }
  
  onClick(): void {
    const node = document.createElement("div");
    let Mform = <HTMLElement>document.getElementById("addNewPargraph");
    node.innerHTML =
    "<label class='form-label'>Blog Title:</label>"+
    "<input type='text' class='form-control'/><br>"+
    "<label class='form-label'>Blog Content:</label>"+
    "<textarea class='form-control'></textarea><br>"+
    "<br><label class='form-label'>Blog Picture:</label>"+
    "<br><input type='file'   class='form-control'id='blogPic' name='filename'><br>";
    Mform.appendChild(node);
}


}