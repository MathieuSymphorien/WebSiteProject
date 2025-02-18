import { Component, Input, OnInit } from '@angular/core';
import { Test } from '../models/test';
import { NgStyle, NgClass, UpperCasePipe, DatePipe  } from '@angular/common';
import { TestService } from '../service/test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [NgStyle,NgClass,UpperCasePipe,DatePipe],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})

export class TestComponent implements OnInit {
  userHasSnapped! : boolean; //devrait se trouver dans le model
  @Input() test!: Test;

  // constructor(){}
  constructor(private testService: TestService,private router: Router) {}
  
  // title!: string;
  // description!: string;
  // createdAt!: Date;
  // snaps!: number;
  // imageUrl!: string;
  snapButtonText!: string;
  

  ngOnInit(): void{
    this.snapButtonText = 'Oh Snap!';
  }

  onAddSnap() {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap()
    }
  }

  unSnap() {
    this.testService.snapFaceSnapById(this.test.id,'unsnap');
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  snap() {
      this.testService.snapFaceSnapById(this.test.id,'snap');
      this.snapButtonText = 'Oops, unSnap!';
      this.userHasSnapped = true;
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.test  .id}`);
  }

}
