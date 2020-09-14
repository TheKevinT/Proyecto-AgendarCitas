import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registrar-doc',
  templateUrl: './registrar-doc.component.html',
  styleUrls: ['./registrar-doc.component.css']
})
export class RegistrarDocComponent implements OnInit {

 public nombreDoctor: string ="";
 public direccionDoc: string ="";
 public correoDoc: string ="";
 public celuDoc: number;
 public userNameDoc: string ="";
 public passDoc: string ="";
 public ciDoc: string ="";
 public oficinaDoc: string ="";
 public fechaDoc: string ="";
 public genDoc:string=""

 public selecGenero: string ="";
 
  generos: any = [
    'Hombre',
    'Mujer',
  ];
  constructor(private router: Router,private authService: AuthService,private ngZone: NgZone ) { }

  ngOnInit(): void {
  }
  radioGenero(event:any){
    this.selecGenero = event.target.value;
  }
/*
  onRegisterDoc(){

    console.log(this.nombreDoctor,this.direccionDoc,this.correoDoc,this.celuDoc,this.userNameDoc,this.passDoc,this.ciDoc,this.oficinaDoc,this.fechaDoc,this.genDoc);

  }*/

  onRegisterDoc(){
    this.authService.registerDoctor(
      this.nombreDoctor,
      this.direccionDoc,
      this.correoDoc,
      this.celuDoc,
      this.userNameDoc,
      this.passDoc,
      this.ciDoc,
      this.oficinaDoc,
      this.fechaDoc,
      this.genDoc

    )

    .then((res)=>{  
      this.authService.isAuth().subscribe(user=>{
        if(user){
          user.updateProfile({
           displayName: this.userNameDoc
          }).then(() => {
            console.log('DOCTOR REGISTRADO!');
            this.ngZone.run(() => this.router.navigate(['homeAdmin']));
          }).catch((error) => console.log('error',error));
        }
      });
      }).catch(err=>console.log('err',err.message));
  }

}
