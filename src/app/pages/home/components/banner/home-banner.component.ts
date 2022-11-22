import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent implements OnInit {

  tagline: string = 'We focus on teaching and training our clients the fundamental and advance programming language that suitable for the industry'

  constructor() { }

  ngOnInit(): void {
  }

}
