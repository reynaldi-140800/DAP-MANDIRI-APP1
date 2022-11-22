import { Component, OnInit } from '@angular/core';
import { Instructor, SocialMedia } from './model/instructor.model';

@Component({
  selector: 'app-home-instructors',
  templateUrl: './home-instructors.component.html',
  styleUrls: ['./home-instructors.component.scss']
})
export class HomeInstructorsComponent implements OnInit {
  instructors: Instructor []=[]

  constructor() { }

  ngOnInit(): void {
    this.getInstructor()
  }

  getInstructor(): void{
    const instructors:Instructor[]=[
      {
        name: 'Jution CK',
        desc: `lorem ipsum dolor`,
        img: 'https://randomuser.me/api/portraits/men/11.jpg',
        socialMedia: [
          {
            icon: 'bi bi-twitter',
            link:''
          },
          {
            icon: 'bi bi-facebook',
            link: ''
          },
          {
            icon: 'bi bi-instagram',
            link:''
          }
        ]
      },
      {
        name: 'Mbok Darmi',
        desc: `lorem ipsum dolor`,
        img: 'https://randomuser.me/api/portraits/women/12.jpg',
        socialMedia: [
          {
            icon: 'bi bi-twitter',
            link:''
          },
          {
            icon: 'bi bi-facebook',
            link: ''
          },
          {
            icon: 'bi bi-instagram',
            link:''
          }
        ]
      },
      {
        name: 'Sukijan',
        desc: `lorem ipsum dolor`,
        img: 'https://randomuser.me/api/portraits/women/11.jpg',
        socialMedia: [
          {
            icon: 'bi bi-twitter',
            link:''
          },
          {
            icon: 'bi bi-facebook',
            link: ''
          },
          {
            icon: 'bi bi-instagram',
            link:''
          }
        ]
      },
      {
        name: 'Sudarmi',
        desc: `lorem ipsum dolor`,
        img: 'https://randomuser.me/api/portraits/women/13.jpg',
        socialMedia: [
          {
            icon: 'bi bi-twitter',
            link:''
          },
          {
            icon: 'bi bi-facebook',
            link: ''
          },
          {
            icon: 'bi bi-instagram',
            link:''
          }
        ]
      }

    ]
    this.instructors = instructors
  }

}
