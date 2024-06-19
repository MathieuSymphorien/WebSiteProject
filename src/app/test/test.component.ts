import { Component, Input, OnInit } from '@angular/core';
import { Test } from '../models/test';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})

export class TestComponent implements OnInit {

  @Input() test!: Test;
  
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
  snapButtonText!: string;
  userHasSnapped! : boolean;



  ngOnInit(): void{
    // this.snapButtonText = 'Oh Snap!';
    // this.userHasSnapped = false;
    // this.title = 'Archibald';
    // this.description = 'Mon meilleur ami depuis toujours !';
    // this.createdAt = new Date();
    // this.snaps = 0;
    // this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
  }

  // onAddSnap() {
  //   if (this.userHasSnapped) {
  //     this.snaps--;
  //     this.snapButtonText = 'Oh Snap!';
  //     this.userHasSnapped = false;
  //   } else {
  //     this.snaps++;
  //     this.snapButtonText = 'Oops, unSnap!';
  //     this.userHasSnapped = true;
  //   }
  // }

  unSnap() {
    this.test.removeSnap();
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  snap() {
      this.test.addSnap();
      this.snapButtonText = 'Oops, unSnap!';
      this.userHasSnapped = true;
  }
}
