import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  banner:string='We focus on training and teaching our clients the fundamentals and advance programming languages that suitable for the industry';

  constructor() { }

  ngOnInit(): void {
  }

}
