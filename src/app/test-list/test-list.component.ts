import { Component, OnInit } from '@angular/core';
import { Test } from '../models/test';
import { TestComponent } from "../test/test.component";
import { TestService } from '../service/test.service';

@Component({
    selector: 'app-test-list',
    standalone: true,
    templateUrl: './test-list.component.html',
    styleUrl: './test-list.component.scss',
    imports: [TestComponent]
})
export class TestListComponent implements OnInit{

  constructor(private testService: TestService){};

  testLists!: Test[];

  ngOnInit() {
    this.testLists = this.testService.getTests();
    // this.testLists[1].setLocation("Montagne")
  }
}
