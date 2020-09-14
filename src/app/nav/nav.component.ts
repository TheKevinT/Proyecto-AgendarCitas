import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

 userName?: string="";

  constructor(public authService:AuthService) { }
  async ngOnInit() {

    console.log('logeado');

    const user = await this.authService.getCurrentUser();
    if(user){
      console.log('User ->', user);
      this.authService.isAuth().subscribe(authService=>{
        if(authService){
          
         this.userName=authService.displayName;

          console.log(this.userName);
    
        }
      })
    }
  }


  logOut():void{
    this.authService.logout();
    console.log("cerrar sesion");
  }



}
