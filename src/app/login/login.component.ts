import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
   loginObj:Login;
   constructor(private http: HttpClient){
    this.loginObj = new Login();
   }
   onLogin(){
   this.http.post("http://localhost:8081/api/user/",this.loginObj).subscribe((res:any)=>{
    console.warn("res",res);
  if(res.result){
    alert("Login successfully")
  }else{
    alert(res.message)
  }
})
   }
 }
 export class Login{
     Email: string;
     Password: string;
     constructor(){
      this.Email="";
      this.Password="";
     }
 }

