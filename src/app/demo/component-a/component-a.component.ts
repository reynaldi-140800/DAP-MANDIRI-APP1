import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../101/employee';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent 
  implements 
  OnInit, 
  OnChanges, 
  OnDestroy,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked  {

  // kita bisa tampilin data dari variabel
  name: string = 'Milea';
  address: string = 'Bandung';
  participants: string[] = ['bulan', 'bintang', 'matahari']
  languages = {
    name: 'Angular',
    difficulty: 'Intermediate',
  }
  characterGenshin = [{
    name: 'Lumine',
    vision: 'dendro'
  },{
    name: 'Raiden',
    vision: 'electro'
  }]
  klik: boolean = true

  // cara lain data binding array object
  characterGenshins(): string {
    let string = ''
    for(let i = 0; i < this.characterGenshin.length; i++){
      string += `${this.characterGenshin[i].name} dengan vision ${this.characterGenshin[i].vision}, `
    }
    return string
  }
  componentName = 'Component A';

  constructor(
    private readonly route: ActivatedRoute
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes:', changes);
    console.log(`ngOnChanges ${this.componentName} called!`);
  }
  
  ngOnDestroy(): void {
    console.log(`ngOnDestroy ${this.componentName} called!`);
  }
  ngDoCheck(): void {
    console.log(`ngDoCheck ${this.componentName} called!`);
  }
  ngAfterContentInit(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterContentChecked(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewChecked(): void {
    throw new Error('Method not implemented.');
  }
  
  

  ngOnInit(): void {
    // this.route.queryParams.subscribe((params) => {

      // destruct object params
      // const { name, address } = params;
      // kalo mau di hidden ketika gaada isi dari request param
      // if(!name || !address) {
      //   document.getElementById("h3").style.display = 'none';
      // }
    //   this.name = name;
    //   this.address = address;

    // })
    setTimeout(() => {
    this.klik = !this.klik
    }, 5000);

    const employee: Employee = new Employee()
    employee.fullName = 'Joko'
    employee.address = 'Bali'
  }

  message: string = ''
  showMe(): void{
    this.message = 'KU CINTA YAE MIKO'
  } 

  messageHover: string = 'kochi kochi senpai!'
  mouseOut(){
    this.messageHover = 'chotto ... watashi ni mite tte yo !!'
  }
  mouseOver(){
    this.messageHover = 'baka! betsuni .. kore wa anta no tame ja nai, suki ja nai shi ...'
  }
  messageInput: string = ''
  onMessageInput($event: any): void{ // ubah ke string jika ingin memakai return
    console.log('$event:', $event)
    console.log('$event.target.value:', $event.target.value)
    const {value} = $event.target
    value.toLowerCase() === 'mandiri'? this.messageInput = 'Aku Mandirian' : this.messageInput = 'Aku tetap mandirian'

    // if (value.toLowerCase() === 'mandiri') {              ============= ada return
    //   this.messageInput = 'aku ' + value.toLowerCase() + 'an'
    //   return this.messageInput
    // } this.messageInput = 'saya tetap mandirian'
    // return this.messageInput


    // if (value.toLowerCase() === 'mandiri'){                        ============== biasa
    //   this.messageInput = 'aku ' + value.toLowerCase() + 'an'
    // }else{
    //   this.messageInput = "saya tetap mandirian"
    // }


  }
}
