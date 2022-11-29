import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss']
})
export class ComponentBComponent implements OnInit {
  id:number=0;

  constructor(
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params)=>{
        console.log('params:', params['id'] );
        console.log('typeof params:', typeof params['id']);
        console.log('typeof this.id:', typeof this.id);
        const temp=Number(params['id']);
        console.log('temp:',temp);
        if(temp){
          this.id=params[' id']
        }
      }
    })
  }

}
