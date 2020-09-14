import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Cita } from '../../Modelo/cita';

@Component({
  selector: 'app-citas-doc',
  templateUrl: './citas-doc.component.html',
  styleUrls: ['./citas-doc.component.css']
})
export class CitasDocComponent implements OnInit {

  userName?: string="";
  public citas: Cita[];
  constructor(private authService:AuthService) { }

 async ngOnInit(){

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
    this.getListCitas();
  }
  getListCitas(){
    this.authService.getAllCitas().subscribe(citas => {
    this.citas=citas;
    });
  }

}
