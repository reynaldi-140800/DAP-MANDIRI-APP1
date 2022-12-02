import { ExpressionType } from '@angular/compiler'
import { fakeAsync, tick } from '@angular/core/testing'
import { bindCallback, from, Observable } from 'rxjs'
import { AppComponent } from 'src/app/app.component'

class Person {
  name? : string
  age?: number
  constructor(name?:string,age?:number ){
    this.name = name
    this.age = age
  }
}
describe('1. App component, introduction', () => {
  describe('1.1 App component should be exist', () => {
    it('1.1.1 App component should be work', () => {
      let component = new AppComponent()
      let test = ''
      expect(component).toBeTruthy()
      // expect(test).toBeTruthy() // ini pasti fail
    })
  }),

  describe('1.2 Matching data types', () => {
    let number: number = 1
    let string: string = 'string'
    it('1.2.1 Number should be equal to one', () => {
      expect(number).toEqual(1)
    }),

    it('1.2.2 string should equal to string', () => {
      expect(string).toEqual('string')
    })
  })

  describe('2. Simple unit test scenario',()=>{
    describe('2.3 Object and array test scenario', ()=>{
      const actualPerson = {name: 'john', age: 20}
      const expectedPerson = {name: 'john', age:20}
      const persons: Person[]=[
        new Person('john', 20),
        new Person('Adidas', 23)
      ]

      const person: Person = new Person('Judas',12)
      it ('actual person should equal to expectedPerson',()=>{
        expect(actualPerson).toEqual(expectedPerson)
        expect(person).toBeInstanceOf(Person)
      })

      xit ('newly added person should be instance of person',()=>{
        const newPerson2: Person = {name: 'tequilla', age:23}
        persons.push(newPerson2)

        for(const person of persons){
          expect(person).toBeInstanceOf(Person)
        }
      })

      it('empty person should be truthy',()=>{
        const empty: Person = new Person()

        expect (empty).toBeTruthy()
      })
    })
  })
  describe ('2.2 FakeAsync and tick test scenario', ()=>{
    it ('asynchronous test without fakeasync',(done)=>{
      let test: boolean = false
      setTimeout(()=>{
        test = true
        expect(test).toBeTrue()
        done()
      },1000)
    })

    it ('asynchronous test with fakeasync', fakeAsync(()=>{
      let test: boolean = false
      setTimeout(() => {
        test = true
        expect(test).toBeTrue()
      }, 3000)
      expect(test).toBeFalse()

      tick(1500)
      expect(test).toBeFalse()

      tick(1500)
      expect(test).toBeTrue()
    }))
  })
})

function fetchCallBack(callback:(data:string)=>void): void {
  setTimeout(() => {
    callback('MandiriDap')
  }, 1000)
}

function fetchCallback(callback:(data:string)=>void): void {
  setTimeout(() => {
    callback('MandiriDap')
  }, 1000)
}

function fetchPromise(): Promise<string> {
  return new Promise((resolve, reject) => {
    fetchCallback(resolve)
  })
}

function fetchObservable(): Observable<string>{
  return from(fetchPromise())
}

describe('3. Asynchronous unit test scenario',()=>{
  const expected = 'MandiriDap'

  describe('3.1 Test scenario for callback',()=>{
    it(`actual should have value as ${expected}`, (done)=>{
      fetchCallback((actual: any)=>{
        expect(actual).toMatch(expected)
        done()
      })
    })
  })

  describe('3.2 Test scenario for promise function', ()=>{
    it (`promise actual should have value as ${expected}`,(done)=>{
      fetchPromise().then((actual)=>{
        expect(actual).toMatch(expected)
        done()
      })
    })

    it(`Subscribed promise actual should have value as ${expected}`, async()=>{
      const actual = await fetchPromise()
      expect (actual).toMatch(expected)
    })
  })

  describe('3.3 Test scenario for promise function', ()=>{
    it (`promise actual should have value as ${expected}`,(done)=>{
      fetchObservable().subscribe((actual)=>{
        expect(actual).toMatch(expected)
        done()
      })
    })

    it(`Subscribed promise actual should have value as ${expected}`, async()=>{
      const actual = await fetchObservable().toPromise()
      expect (actual).toMatch(expected)
    })
  })
})