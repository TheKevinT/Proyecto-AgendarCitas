import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.css']
})
export class AgendarComponent implements OnInit {



  public nombrePaciente: string="";
  public especialidad: string="";
  public nombreDoctor: string="";
  public fechaCita: string="";
  public horaCita: string="";
  public consultorio = (Math.random() * (200 - 20) + 20).toFixed(0);

  constructor(private authService: AuthService ) { }

  ngOnInit(): void {
  }


  /*
  onAddCita(form){
    console.log('info ->', this.nombrePaciente, this.especialidad,this.nombreDoctor,this.fechaCita,this.horaCita, this.consultorio);
    form.reset();

  }*/

  onAddCita(form){
    
    this.authService.CrearCita(
      this.nombrePaciente, 
      this.especialidad,
      this.nombreDoctor,
      this.fechaCita,
      this.horaCita,
      this.consultorio
      )
    .then((res)=>{  
      this.authService.isAuth().subscribe(user=>{
        if(user){
          user.updateProfile({
       //displayName: this.nombrePaciente
          }).then(() => {
            console.log('Cita guardada!');
          }).catch((error) => console.log('error',error));
        }
      });
      }).catch(err=>console.log('err',err.message));

    form.reset();

  }


}
