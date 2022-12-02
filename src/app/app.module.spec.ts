import { ComponentFixture, TestBed } from "@angular/core/testing"
import { ArgumentOutOfRangeError } from "rxjs"
import { AppComponent } from "./app.component"
import { AppModule } from "./app.module"

describe ('4. Angular module test scenario',()=>{
    let fixture: ComponentFixture<AppComponent>
    // fixture adalah perlengkapan atau semua yang ada di app komponen semuanya, diambil kedalam fixture itu sendiri
    // dan ini bisa diuji
    beforeAll(()=>{
        TestBed.configureTestingModule({
            imports:[AppModule]
        })
        fixture = TestBed.createComponent(AppComponent)
    })

    xit('AppModule should be initialized',()=>{
        const module: AppModule = TestBed.inject(AppModule)
        // testbed berfungsi injek suatu class yang diuji menjadi suatu instance yang akan digunakan
        expect(module).toBeTruthy()
        expect(module).toBeInstanceOf(AppModule)
    })
    
    //beforeEach

    //afterAll

    //afterEach
    xdescribe('4.1 AppModule should be initialized',()=>{
        it ('AppModule should be initialized', ()=>{
            const module: AppModule = TestBed.inject(AppModule)

            expect (module).toBeTruthy()
            expect (module).toBeInstanceOf(AppModule)
        })
    })
    describe('4.2. AppComponent should be initialized', () => {
        it('should be intialized', () => {
          const component: AppComponent = fixture.componentInstance;
    
          expect(component).toBeTruthy();
          expect(component).toBeInstanceOf(AppComponent);
        });
      });

    describe('4.3 AppComponent should have router-outlet',()=>{

        it ('should have router-outlet',()=>{
            const element: HTMLElement = fixture.nativeElement

            expect (element.querySelector('router-outlet')).toBeTruthy
        })
    })
})

// describe ('Test after, before', ()=>{
//     beforeAll(()=>{
//         console.log('Before All')
//     })
//     beforeEach(()=>{
//         console.log('BeforeEach')
//     })
//     afterAll(()=>{
//         console.log('AfterAll')
//     })
//     afterEach(()=>{
//         console.log('AfterEach')
//     })
//     it('nyoba 1', ()=> {
//         console.log('it 1')
//     })
    
//     it('nyoba 2', ()=> {
//         console.log('it 2')
//     })
    
//     it('nyoba 3', ()=> {
//         console.log('it 3')
//     })
// })
