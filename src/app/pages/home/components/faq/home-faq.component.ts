import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-faq',
  templateUrl: './home-faq.component.html',
  styleUrls: ['./home-faq.component.scss']
})
export class HomeFaqComponent implements OnInit {

  faq = [{
    question: 'Where are Exactly?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nesciunt quaerat eius corrupti at, doloribus molestiae culpa! Dolorem, voluptate voluptatem necessitatibus cumque sapiente eos non ullam obcaecati molestiae ut repellendus!',
    heading: 'headingOne',
    collapse: 'collapseOne'
  },
  {
    question: 'How Much Does it cost to attend?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nesciunt quaerat eius corrupti at, doloribus molestiae culpa! Dolorem, voluptate voluptatem necessitatibus cumque sapiente eos non ullam obcaecati molestiae ut repellendus!',
    heading: 'headingTwo',
    collapse: 'collapseTwo'
  },
  {
    question: 'What Do I Need to Know?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nesciunt quaerat eius corrupti at, doloribus molestiae culpa! Dolorem, voluptate voluptatem necessitatibus cumque sapiente eos non ullam obcaecati molestiae ut repellendus!',
    heading: 'headingThree',
    collapse: 'collapseThree'
  },
  {
    question: 'How do I Sign Up?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nesciunt quaerat eius corrupti at, doloribus molestiae culpa! Dolorem, voluptate voluptatem necessitatibus cumque sapiente eos non ullam obcaecati molestiae ut repellendus!',
    heading: 'headingFour',
    collapse: 'collapseFour'
  },
  {
    question: 'Do you help me?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nesciunt quaerat eius corrupti at, doloribus molestiae culpa! Dolorem, voluptate voluptatem necessitatibus cumque sapiente eos non ullam obcaecati molestiae ut repellendus!',
    heading: 'headingFive',
    collapse: 'collapseFive'
  }]

  constructor() { }

  //style binding
  //inner html
  subTitle = '<strong>FAQs</strong> Description'
  styles={
    color: 'gold',
    fontSize: '4rem',
    fontWeight: '100'
  }

  ngOnInit(): void {
  }

}
