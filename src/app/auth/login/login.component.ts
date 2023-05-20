import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';
import { LoginRequest } from 'src/app/services/auth/loginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginError:string="";
  loginForm = new FormGroup({
    email: new FormControl('agus@gmail.com',[Validators.required, Validators.email]),
    password: new FormControl('',Validators.required),

  });

  // loginForm= this.formBuilder.group({
  //   email: ['agus@gmail.com',[Validators.required, Validators.email]],
  //   password: ['',Validators.required]
  // })

  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private loginService:LoginService) { }

  ngOnInit(): void {
  }
  get f(){
    return this.loginForm.controls;
  }

  // get email(){
  //   return this.loginForm.get('email');
  // }
  // get Password(){
  //   return this.loginForm.get('password');
  // }
  login(){
    if(this.loginForm.valid){
      
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next:(userData)=>{
          console.log(userData);
        },
        error:(errorData)=>{
          console.log(errorData);
          this.loginError = errorData;
        },
        complete:() => {
          console.info("Login completo");
          this.router.navigateByUrl('/inicio');
          this.loginForm.reset();
        }
      })

    }else{
      this.loginForm.markAllAsTouched();
      alert("error al ingresar los datos")
    }
  }

}
