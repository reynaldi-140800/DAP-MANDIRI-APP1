import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";
import { Login, LoginResponse } from "../components/login/model/login.model";

@Injectable()
export class AuthService{
    private storage: Storage = sessionStorage

    login(payload: Login): Observable<LoginResponse | null>{
        return new Observable<LoginResponse | null>((observer: 
        Observer<LoginResponse | null>)=>{
            try {
                // Email: admin@mail.com // password: password
                const { email, password } = payload
                if (email === 'admin@mail.com' && password === 'password'){
                    const LoginResponse: LoginResponse = 
                    { email: email, accessToken: '12345' }
                    this.storage.setItem('token', JSON.stringify(LoginResponse))
                }else{
                    observer.next(null)
                }
            } catch (err: any) {
                observer.error(err.message)
            }
        })
    }
}
