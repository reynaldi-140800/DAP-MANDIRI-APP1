import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss']
})
export class ComponentBComponent implements OnInit {

  // untuk menangnkap data path variable (data pasti bentuknya string)
  id: string = '';
  
  constructor(
    // ini observable
    // jadi kita harus melakukan subscribe
    private readonly route: ActivatedRoute
  ){}

  // lifecyce
  // ngOnInit() => akan dipanggil ketika component-b dipanggil
  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        console.log('params:', params['id']) // buat cek di console
        // this.id = parseInt(params['id']); //reassign id (apapun yang dikirim di path variable, itu pasti string, makanya bisa pake parseInt)

        // tampung di variabel sementara untuk cek kondisi
        const temp = Number(params['id']); // jika params['id'] bisa diubah ke number

        // kalo datanya truty, print datanya
        if(temp){ // jika params['id'] bisa diubah ke number
          this.id = params['id']; // reassign id
        }
      }
    })
  }
}
