import { Component, OnInit } from '@angular/core';
import { TestComponent } from './test/test.component';
import { Test } from './models/test';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  myTest!: Test;
  myTest2!: Test;

  ngOnInit() {
    this.myTest = new Test(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0
    );

    this.myTest2 = new Test(
      'TESt',
      'TEST !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      100
    );
  }
}
