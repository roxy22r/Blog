import { Component, Injectable, Input, NgModule, OnInit } from '@angular/core';
interface carouselImage{
  imageSrc: string;
  imageAlt: string;
}
@Component({

  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})


@Injectable()
export  class SlideShowComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImages();
    }
  }
  @Input() autoSlide = true;
  
  @Input() slideInterval=3000;

@Input()images: carouselImage[] = [
{
  imageSrc:"./assets/img/pic1.jpg",
  imageAlt:"t",
},
{
  imageSrc:"./assets/img/pic2.jpg",
  imageAlt:"t",
},
{
  imageSrc:"./assets/img/pic3.jpg",
  imageAlt:"Nature",
}
]
 
  slides: string [] = ['./assets/img/pic1.jpg', './assets/img/pic2.jpg']
  selectedIndex=0;

  autoSlideImages():void{
    setInterval(()=>{
      this.onNextClick();},this.slideInterval);
      
    
  }

  getSlide() {
      return this.slides[this.selectedIndex];
  }

  onPrevClikc():void{
    if(this.selectedIndex ===0){
      this.selectedIndex = this.images.length -1;
    }else{
      this.selectedIndex --;
    }
  }

  onNextClick():void{
    if(this.selectedIndex ===this.images.length-1){
      this.selectedIndex =0;
    }else{
      this.selectedIndex ++;
    }
  }
  }


