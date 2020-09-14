import { Component, OnInit,NgZone } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public nombreComl: string="";
  public direccion: string="";
  public email: string="";
  public telf:number;
  public userName: string="";
  public password: string="";
  public ci: string="";
  public fechaCumple: string="";
  public gen:string = '';
  
  public selecGenero: string= '';

  isError: boolean = false;
  public msgError:string ="Rellene todo los campos"


  generos: any = [
    'Hombre',
    'Mujer',
  ];

  constructor(private router: Router, private authService: AuthService , private ngZone: NgZone) { }

  ngOnInit(): void {
  }
  
  radioGenero(event:any){
    this.selecGenero = event.target.value;
  }
/*
  onAddUser(){
    console.log('info ->', this.nombreComl, this.direccion,this.email,this.telf,this.userName,this.password,this.ci,this.fechaCumple,this.gen);
  }
*/
  onAddUser(){
    this.authService.register(
      this.nombreComl, 
      this.direccion,
      this.email,
      this.telf,
      this.userName,
      this.password,
      this.ci,
      this.fechaCumple,
      this.gen
      )
    .then((res)=>{  
      this.authService.isAuth().subscribe(user=>{
        if(user){
          user.updateProfile({
           displayName: this.userName

          }).then(() => {
            console.log('USER UPDATED!');
            this.ngZone.run(() => this.router.navigate(['home']));
          }).catch((error) => console.log('error',error));
        }
      });
      }).catch(err=>console.log('err',err.message));
  }

}
