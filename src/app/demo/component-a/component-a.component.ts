import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../101/employee';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  name:string='Noki';
  address:string='Jogji';
  participants:string[]=['Bumi, Mars, Jupiter']
  languages = {
    name:'angular',
    level:'advance'
  } 
 // decorate the property with @Input()

  onMessage():string{
    return 'onMessage';
  }

  onViewLanguage():string{
    return `${this.languages.name} ${this.languages.level}`
  }
  

  employees=[
    {
      name:'Adi',
      address:'Bulan',
      unit:'Keuangan'
    },
    {
      name:'Adam',
      address:'Matahari',
      unit:'Audit'
    },
    {
      name:'Rahma',
      address:'Mars',
      unit:'IT'
    }
  ]

  isDisabled:boolean=true
  componentName = 'Component A';
  constructor() {
    console.log(`constructor ${this.componentName} called!`);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes:', changes);
    console.log(`ngOnChanges ${this.componentName} called!`);
  }
  ngOnInit(): void {
    console.log(`ngOnInit ${this.componentName} called!`);
  }
  ngOnDestroy(): void {
    console.log(`ngOnDestroy ${this.componentName} called!`);
  }
  ngDoCheck(): void {
    console.log(`ngDoCheck ${this.componentName} called!`);
  }
  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit ${this.componentName} called!`);
  }
  ngAfterContentChecked(): void {
    console.log(`ngAfterContentChecked ${this.componentName} called!`);
  }
  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit ${this.componentName} called!`);
  }
  ngAfterViewChecked(): void {
    console.log(`ngAfterViewChecked ${this.componentName} called!`);
  }

//   ngOnInit(): void {
//     // this.route.queryParams.subscribe((params)=>{
//     //   const{name,address}=params;
//     //   this.name=name;
//     //   this.address=address;
//     // })
//     setTimeout(()=>{
//       this.isDisabled=!this.isDisabled
    
//     console.log(this.languages);
//   },5000)
//   const employee: Employee = new Employee();
//   employee.fullName='Joka';
//   employee.address='Bali';
//   console.log(employee);
  

// };

 


  message:string='';
  showMe():void{
    this.message = 'klik klik'
  }

  messageHover:string = 'Hover akooh';
  mouseOut(){
    this.messageHover = 'Lagii';

  }
  mouseOver(){
    this.messageHover = 'thankseu';
  }

  messageInput:string='';
  onMessageInput($event:any): void {
    const {value} = $event.target
    if (value == 'mandiri'){
      this.messageInput='aku mandirian'
    }else{
      this.messageInput='aku tetap mandirian'
    }
    // console.log('$event', $event);
    // console.log('$event.target.value', $event.target.value);
    // const {value} = $event.target
    // this.messageInput = value;
    
    
  }
}
