import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faqs:any[]=[];
  subTitle='<strong>FAQs</strong> Description';
  styles={
    color:'gold',
    fontSize:'4rem',
    fontWeight:'100'
  }

  constructor() { }


  ngOnInit(): void {
    this.getFaqs()
  }

  getFaqs():void{
    const faqs1 = [
      {
        question:'Where exactly are you located?',
        answer:'This is the first items accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.'
      },
      {
        question:'How much does it cost to attend?',
        answer:'This is the second items accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the.accordion-body, though the transition does limit overflow.'
      },
      {
        question:'What do I need to know?',
        answer:'This is the third items accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.'
      },
      {
        question:'How Do I sign up?',
        answer:'This is the fourth items accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.'
      },
      {
        question:'Do you help me find a job?',
        answer:'This is the fifth items accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.'
      }
      
    ]
    this.faqs=faqs1;
  }

}
