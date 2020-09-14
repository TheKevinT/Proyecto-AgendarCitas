import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.css']
})
export class NavAdminComponent implements OnInit {

  constructor(public authService:AuthService ) { }

  ngOnInit(): void {
  }

  logOut():void{
    this.authService.logout();
    console.log("cerrar sesion");
  }


}
