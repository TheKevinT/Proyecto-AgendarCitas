import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { Paciente } from '../Modelo/paciente';
import { Cita } from '../Modelo/cita';
import { Doctor } from '../Modelo/doctor';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection 
} from "@angular/fire/firestore";
import { CitasDoc } from '../Modelo/citasDoc';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private citasCollection: AngularFirestoreCollection<Cita>;
  private citaObs : Observable<Cita[]> 
  public citas: Cita[] = [];
  public usuarioC: any = {};
  private citaDocument: AngularFirestoreDocument<Cita>
  private cit:Observable<Cita> 

  //CITAS-DOCTORES
  private citasDocCollection: AngularFirestoreCollection<CitasDoc>;
  private citaDocObs : Observable<CitasDoc[]> 
  public citasDoc: CitasDoc[] = [];

  constructor( private afsAuth: AngularFireAuth, private afs: AngularFirestore) {
  
    this.afsAuth.authState.subscribe(user =>{
  
      console.log('Estado del usuario', user);
        if(!user){
            return;
        }
      this.usuarioC.name = user.displayName;
      this.usuarioC.uid = user.uid;
      })

      //CREAR COLECCION CITAS
      this.citasCollection=afs.collection<Cita>('citas');
      this.citaObs= this.citasCollection.valueChanges();

      //CREAR COLECCION CITAS-DOCTOR
      this.citasDocCollection=afs.collection<CitasDoc>('citasDoctores');
      this.citaDocObs= this.citasDocCollection.valueChanges();


   }

  //LOGEARSE
  async login(email:string, password:string){

    try{
      const result = await this.afsAuth.signInWithEmailAndPassword(
      email,
      password
    );
    return result;
  }

    catch (err){
      console.log(err)

    }
  
  }
//CERRAR SESION
   async logout(){

      try{

        await this.afsAuth.signOut();
      }
      catch(err){
          console.log(err)
      }
      
    }

 //recuperar usuario actualmente logeado

 getCurrentUser(){
  return this.afsAuth.authState.pipe(first()).toPromise();
}

isAuth() {
  return this.afsAuth.authState.pipe(map(auth => auth));
}


  
    //CREAR USUARIO
     register(  nombre: string, direccion: string, email: string,  telf:number, userName:string,password:string,ci:string,fecha:string, gen:string){

        return new Promise((resolve, reject) => {
          this.afsAuth.createUserWithEmailAndPassword(email,password)
            .then(userData => {
              resolve(userData), this.crearPaciente(userData.user,nombre,direccion,telf,userName,ci,fecha,gen);
      
            })
            .catch(err => console.log(reject(err)));
        });
    }

    private crearPaciente(user,nombre:any, direccion:any, telf:any,usernName:any, ci:any,fecha:any,gen:any ) {
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

      const data: Paciente = {
        id: user.uid,
        email: user.email,
        name: nombre,
        direccion: direccion,
        ci: ci,
        telf: telf,
        fecha: fecha,
        userName:usernName,
        gen: gen
      };
      return userRef.set(data, { merge: true });
    }


   

  //Crear CITA

  CrearCita(nombrePaciente:any,especialidad:any, nombreDoctor:any,fechaCita:any,horaCita:any, consultorio:any ){
  
    const cita: Cita = {
      id: this.usuarioC.uid,
      nombrePaciente: nombrePaciente,
      especialidad: especialidad,
      nombreDoc: nombreDoctor,
      fechaCita: fechaCita,
      hora: horaCita,
      consultorio:consultorio
    }

    return this.citasCollection.add( cita );

  }


  getAllCitas(){
    return this.citaObs=this.citasCollection.snapshotChanges().pipe(map(changes=>{
      return changes.map(action =>{
        const data= action.payload.doc.data() as Cita;
        data.id=action.payload.doc.id;
        return data;
      });
    }));
     }

     getCita(idUser: string){
      this.citaDocument= this.afs.doc<Cita>(`citas/${idUser}`);
      return this.cit = this.citaDocument.snapshotChanges().pipe(map(action=>{
        if(action.payload.exists==false){
          return null;
        }else{
          const data= action.payload.data() as Cita;
          data.id = action.payload.id;
          return data;
        }
      }));
    }



     //CREAR DOCTOR

  registerDoctor( nombre: string, direccion: string, email: string,  telf:number, userName:string,password:string,ci:string,oficina:string,fecha:string, gen:string){

  return new Promise((resolve, reject) => {
    this.afsAuth.createUserWithEmailAndPassword(email,password)
      .then(userData => {
        resolve(userData), this.crearDoc(userData.user,nombre,direccion,telf,userName,ci,oficina,fecha,gen);

      })
      .catch(err => console.log(reject(err)));
  });
}

private crearDoc(user,nombre:any, especialidad:any, telf:any,usernName:any, ci:any, consultorioDoc:any, fecha:any,gen:any ) {
  const userRef: AngularFirestoreDocument<any> = this.afs.doc(`doctores/${user.uid}`);

  const data: Doctor = {
    idDoc: user.uid,
    correoDoc: user.email,
    nombreDoctor: nombre,
    especialidadDoc: especialidad,
    celuDoc: telf,
    userNameDoc: usernName,
    ciDoc: ci,
    oficinaDoc: consultorioDoc,
    fechaDoc: fecha,
    genDoc: gen
  };
  return userRef.set(data, { merge: true });
}


//registrar cita-Doctor

CrearCitaDoc(nombrePaciente:any,especialidad:any, nombreDoctor:any,fechaCita:any,horaCita:any, consultorio:any , pulso:any,temperatura:any,presion:any,sintomas:any,observaciones:any,receta:any,examenes:any){
  
  const data: CitasDoc = {
    id: this.usuarioC.uid,
    nombrePaciente: nombrePaciente,
    especialidad: especialidad,
    nombreDoc: nombreDoctor,
    fechaCita: fechaCita,
    hora: horaCita,
    consultorio:consultorio,
    pulso: pulso,
    temperatura: temperatura,
    presion: presion,
    sintomas: sintomas,
    observaciones: observaciones,
    receta: receta,
    examenes: examenes
    
  }

  return this.citasDocCollection.add( data );

}






}
