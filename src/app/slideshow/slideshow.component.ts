import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['laptop-asus.jpg', 'laptop-sony.jpg', 'laptop.jpg'];
  headlines = ['Bring engineering to the next level', 'Born to code', 'A coders best instrument'];
  showImage = true;
  
  currentImage = 0;
  
  ngOnInit() {
    this.updateImage();
  }
  
  updateImage() {
  
  setInterval(() => {
  this.currentImage++;
  this.currentImage = this.currentImage % this.images.length;
  
  this.showImage = false;
  
  setTimeout(() => {
    this.showImage = true;
  }, 1);
  }, 8000);
  
  
  
  }

}
