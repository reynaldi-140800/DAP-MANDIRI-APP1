import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiResponse } from 'src/app/shared/model/api-respon.model';
import { Login, LoginResponse } from './model/login.model';
import { lastValueFrom, of } from 'rxjs';
import { AbstractControl, ValidationErrors } from '@angular/forms';

describe('6. Login component scenario test', () => {
  let loginComponent: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let activatedRoute: ActivatedRoute;
  let router: Router;

  beforeAll(() => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [
        {
          provide: AuthService,
          useValue: authServiceSpy,
        },
      ],
    });
    fixture = TestBed.createComponent(LoginComponent);
    loginComponent = fixture.componentInstance;
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    activatedRoute = TestBed.inject(ActivatedRoute);
    router = TestBed.inject(Router);
  });

  const formLoginMock = (email: string, password: string): void => {
    loginComponent.loginForm.get('email')?.setValue(email);
    loginComponent.loginForm.get('password')?.setValue(password);
  };

  describe('6.1 Login component initialize', () => {
    it('loginComponent should be initialize', () => {
      expect(loginComponent).toBeDefined();
      expect(loginComponent).toBeTruthy();
    });

    it('successful login', ()=>{
        formLoginMock('qwerty@mail.com', 'password')
        const expected: Login = {email: 'qwerty@mail.com', password: 'password'}
        expect(loginComponent.loginForm.value).toEqual(expected)
    })

    it('successful login and should return loginToken value', async () => {
    const loginToken: ApiResponse<LoginResponse> = {
      code: '201',
      status: 'SUCCESS',
      message: 'MESSAGE',
      data: {
        email: 'qwerty@mail.com',
        accessToken: '123',
      },
    };

    authService.login.and.returnValue(of(loginToken));
    loginComponent.loginForm.setValue({
      email: 'qwerty@mail.com',
      password: 'password',
    });
    loginComponent.onSubmit();
    expect(authService.login.calls.count()).toBe(1);
    const actual: ApiResponse<LoginResponse> = await lastValueFrom(
      authService.login.calls.mostRecent().returnValue
    );
    expect(actual.data.accessToken).toEqual('123');
  });
});

describe('6.2 Form Login ReactiveForm test', () => {
    describe('6.2.1 FormGroup and FormControl should be initialize', () => {
      it('should be successfully initialized', () => {
        expect(loginComponent.loginForm).toBeTruthy()
        expect(loginComponent.loginForm.get('email')).toBeDefined()
        expect(loginComponent.loginForm.get('email')).toBeInstanceOf(AbstractControl)
        expect(loginComponent.loginForm.get('password')).toBeDefined()
        expect(loginComponent.loginForm.get('password')).toBeInstanceOf(AbstractControl)
      })
    })

    describe('6.2.2 Email Form Control should be validated', () => {
      let emailControl: AbstractControl
      beforeEach(()=>{
        emailControl = loginComponent.loginForm.get('email') as AbstractControl
      })
      describe('6.2.2.1 Validation required should be working',()=>{
        it('Required validator should be true if email value is blank',()=>{
            emailControl.setValue('')
            emailControl.markAsTouched()
            fixture.detectChanges()

            const errors = emailControl.errors as ValidationErrors
            expect(errors).toBeTruthy()
            expect(errors['required']).toBeTruthy()
            expect(emailControl.invalid).toBeTrue()
            expect(loginComponent.isFormValid('email')).toBeTrue
        })
      })
    })
  })
});
