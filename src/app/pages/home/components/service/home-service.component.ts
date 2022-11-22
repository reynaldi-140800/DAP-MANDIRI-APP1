import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-service',
  templateUrl: './home-service.component.html',
  styleUrls: ['./home-service.component.scss']
})
export class HomeServiceComponent implements OnInit {

  services = [{
    name: 'Online', 
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur velit non, ullam minima temporibus iste.'
  },
  {
    name: 'Hybrid',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur velit non, ullam minima temporibus iste.'
  },
  {
    name: 'In Person',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur velit non, ullam minima temporibus iste.'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
