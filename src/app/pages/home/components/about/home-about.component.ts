import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.scss']
})
export class HomeAboutComponent implements OnInit {

  about = 
  {
    title: 'Learn Angular',
    headline: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et impedit error commodi sint pariatur, officia veritatis architecto.',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima fuga excepturi laboriosam labore minus tenetur, culpa beatae obcaecati libero voluptas iusto nesciunt, dolorem sit. Quos error magni sequi nobis aliquam.'
  }


  constructor() { }

  ngOnInit(): void {
  }

}
