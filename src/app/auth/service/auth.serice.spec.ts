import { HttpClient } from "@angular/common/http"
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { TestBed } from "@angular/core/testing"
import { ApiResponse } from "src/app/shared/model/api-respon.model"
import { Login, LoginResponse } from "../components/login/model/login.model"
import { AuthService } from "./auth.service"

describe('7. AuthService with HTTP scenario test',()=>{
    let authService: AuthService
    let mockHttp: HttpTestingController

    beforeAll(()=>{
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AuthService]
        })

        authService = TestBed.inject(AuthService)
        mockHttp =  TestBed.inject(HttpTestingController)
    })

    describe('7.1 AuthService should be initialized',()=>{
        it('SHould be initialized',()=>{
            expect(authService).toBeTruthy()
        })
    })

    describe('7.2 AuthService with login method', () => {
        it('should return ApiResponse', () => {
          const expectedUrl = '/api/v1/auth/login'
          const mockLogin: Login = {
            email: 'admin@gmail.com',
            password: 'password'
          }
    
          const mockLoginToken = {
            code: '201',
            status: '',
            message: '',
            data: {
              email: 'admin@gmail.com',
              accessToken: '123'
            }
    
          }
    
          authService.login(mockLogin).subscribe((response) => {
            expect(response).toEqual(mockLoginToken)
          })
    
          const http = mockHttp.expectOne(expectedUrl)
          expect(http.request.method).toEqual('POST')
          expect(http.request.body).toEqual(mockLogin)
    
        })
      })
})