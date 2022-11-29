import { Component, OnInit } from '@angular/core';
import { Instructor } from './model/instructor.model';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss']
})
export class InstructorComponent implements OnInit {
  instructors:Instructor[]=[]

  constructor() { }

  ngOnInit(): void {
    this.getInstructor();
  }

  getInstructor():void{
    const instructors: Instructor[]=[
      {
        name:'Mr.Eddark',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img:'https://randomuser.me/api/portraits/men/1.jpg',
        socialMedia:[
          {
            icon:'bi bi-twitter mx-2',
            link:''
          },
          {
            icon:'bi bi-facebook mx-2',
            link:''
          },
          {
            icon:'bi bi-linkedin mx-2',
            link:''
          },
          {
            icon:'bi bi-instagram mx-2',
            link:''
          },
        ]
      },
      {
        name:'Ms. Catelyn',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img:'https://randomuser.me/api/portraits/women/1.jpg',
        socialMedia:[
          {
            icon:'bi bi-twitter mx-2',
            link:''
          },
          {
            icon:'bi bi-facebook mx-2',
            link:''
          },
          {
            icon:'bi bi-linkedin mx-2',
            link:''
          },
          {
            icon:'bi bi-instagram mx-2',
            link:''
          },
        ]
      },
      {
        name:'Mr.Rob',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img:'https://randomuser.me/api/portraits/men/2.jpg',
        socialMedia:[
          {
            icon:'bi bi-twitter mx-2',
            link:''
          },
          {
            icon:'bi bi-facebook mx-2',
            link:''
          },
          {
            icon:'bi bi-linkedin mx-2',
            link:''
          },
          {
            icon:'bi bi-instagram mx-2',
            link:''
          },
        ]
      },
      {
        name:'Ms.Sansa',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img:'https://randomuser.me/api/portraits/women/2.jpg',
        socialMedia:[
          {
            icon:'bi bi-twitter mx-2',
            link:''
          },
          {
            icon:'bi bi-facebook mx-2',
            link:''
          },
          {
            icon:'bi bi-linkedin mx-2',
            link:''
          },
          {
            icon:'bi bi-instagram mx-2',
            link:''
          },
        ]
      },
    ]
    this.instructors=instructors
  }
}
