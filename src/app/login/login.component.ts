import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
/*
  public identificado:boolean;
  public registrado:boolean = true;
*/
public rol: string="";
public email: string="";
public password: string="";
public op: string ="";


seleccionar: any = ['Administrador','Paciente','Doctor']

  constructor(private authService:AuthService, private route: Router) { 
    //this.identificado = false;

  }

  ngOnInit():void{

  }

  opciones(event:any){
    this.op = event.target.value;
    console.log(this.op)
  }

  onLogin(email:string, password:string){

    
    if(email=="" || password==""){

      alert('Escriba correo y contraseña')

    }else if(email=="admin@email.com" && password=="admin123"){

      this.route.navigate(['homeAdmin']);
    }else if( this.op =="Doctor"){

        this.authService.login(this.email, this.password)
        .then((res)=>{
            this.route.navigate(['homeDoc']);
         }).catch(err=>console.log('err',err.message)
      );

      }else{
        this.authService.login(this.email, this.password)
        .then((res)=>{
            this.route.navigate(['home']);
         }).catch(err=>console.log('err',err.message)
      );

      }
 
  }
}
