import { Component, Input, OnInit } from '@angular/core';
import { Test } from '../models/test';
import { NgStyle, NgClass, UpperCasePipe, DatePipe  } from '@angular/common';
import { TestService } from '../service/test.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-single-face',
  standalone: true,
  imports: [NgStyle, NgClass, UpperCasePipe, DatePipe],
  templateUrl: './single-face.component.html',
  styleUrl: './single-face.component.scss'
})
export class SingleFaceComponent {

  userHasSnapped! : boolean; //devrait se trouver dans le model
  test!: Test;

  constructor(private testService: TestService, private route:ActivatedRoute){}
  
  snapButtonText!: string;
  
  ngOnInit(): void{
    this.prepareInterface();
    this.getFaceSnap();
  }
  
  private prepareInterface() {
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  private getFaceSnap() {
    const testId = this.route.snapshot.params['id'];
    this.test = this.testService.getFaceSnapById(testId);
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
}
