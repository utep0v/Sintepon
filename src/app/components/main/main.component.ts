import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toDown() {
    // @ts-ignore
    document.getElementById('more').scrollIntoView({
      behavior: 'smooth'
    })
  }

}
