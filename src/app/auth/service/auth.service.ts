import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";
import { ApiResponse } from "src/app/shared/model/api-respon.model";
import { Login, LoginResponse } from "../components/login/model/login.model";

@Injectable()
export class AuthService{
    constructor(private readonly http: HttpClient){}

        baseUrl: string = '/api/v1/auth/login'
        login(payload: Login): Observable<ApiResponse<LoginResponse>>{
            try {
                return this.http.post<ApiResponse<LoginResponse>>(this.baseUrl, payload)
            } catch (error:any) {
                throw new error(error.message)
                
            }
        }
        
}

