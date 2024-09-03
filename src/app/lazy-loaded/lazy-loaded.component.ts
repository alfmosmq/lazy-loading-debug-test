import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-loaded',
  standalone: true,
  imports: [],
  templateUrl: './lazy-loaded.component.html',
  styleUrl: './lazy-loaded.component.scss'
})
export class LazyLoadedComponent implements OnInit {
  name = 'LazyLoadedComponent';
  constructor() {}
  
  ngOnInit() {
    console.log('LazyLoadedComponent initialized');

  }


}
