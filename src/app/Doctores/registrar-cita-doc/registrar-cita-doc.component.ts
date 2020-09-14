import { Component, OnInit,NgZone } from '@angular/core';
import { Cita } from '../../Modelo/cita';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-registrar-cita-doc',
  templateUrl: './registrar-cita-doc.component.html',
  styleUrls: ['./registrar-cita-doc.component.css']
})
export class RegistrarCitaDocComponent implements OnInit {

  public citas: Cita;
//encabezado
  public nombrePaciente: string="";
  public especialidad:string ="";
  public nombreDoc:string ="";
  public fechaCita:string ="";
  public hora:string ="";
  public consultorio:string ="";
//datos de consulta
  public pulso:string ="";
  public temperatura:string ="";
  public presion:string ="";
  public sintomas:string ="";
  public observaciones:string ="";
  public receta:string ="";
  public examenes:string ="";



  constructor(private router:Router, private route: ActivatedRoute, private authService: AuthService, private ngZone:NgZone ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params=>{
      let id = params.id;
      this.getCita(id)
    });
  }

  
  getCita(id){
    this.authService.getCita(id).subscribe(citas => {
      this.citas=citas;
      this.nombrePaciente = citas.nombrePaciente;
      this.especialidad = citas.especialidad;
      this.nombreDoc = citas.nombreDoc;
      this.fechaCita = citas.fechaCita;
      this.hora = citas.hora;
      this.consultorio = citas.consultorio;
      });
  }
/*
  RegisterCitaDoc(){
    console.log(this.nombrePaciente,this.especialidad,this.nombreDoc,this.fechaCita,this.hora,this.consultorio,this.pulso,this.temperatura,this.presion,this.sintomas,this.observaciones,this.receta,this.examenes);


  }
  */
 RegisterCitaDoc(){

  
  this.authService.CrearCitaDoc(
    this.nombrePaciente,
    this.especialidad,
    this.nombreDoc,
    this.fechaCita,
    this.hora,
    this.consultorio,
    this.pulso,
    this.temperatura,
    this.presion,
    this.sintomas,
    this.observaciones,
    this.receta,
    this.examenes
    )
  .then((res)=>{  
    this.authService.isAuth().subscribe(user=>{
      if(user){
        user.updateProfile({
     //displayName: this.nombrePaciente
        }).then(() => {
          console.log('Cita registrada por doctor!');
          this.ngZone.run(() => this.router.navigate(['citasDoc']));
        }).catch((error) => console.log('error',error));
      }
    });
    }).catch(err=>console.log('err',err.message));

 }


}
