import { Injectable } from '@angular/core';
import { Paciente } from '../Modelo/paciente';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Doctor } from '../Modelo/doctor';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  private usersCollection : AngularFirestoreCollection<Paciente>
  private users : Observable<Paciente[]> 
  private userDocument: AngularFirestoreDocument<Paciente>
  private user:Observable<Paciente> 


  //DOCTORES
  private doctorCollection : AngularFirestoreCollection<Doctor>
  private docts : Observable<Doctor[]> 
  private docDocument: AngularFirestoreDocument<Doctor>
  private doct:Observable<Doctor> 


  constructor(private afs: AngularFirestore) {

    this.usersCollection=afs.collection<Paciente>('users');
    this.users= this.usersCollection.valueChanges();

//doctores
    this.doctorCollection=afs.collection<Doctor>('doctores');
    this.docts= this.doctorCollection.valueChanges();

   }

  //PARA EXTRAER TODOS LOS PACIENTES
  getAllPacientes(){
    return this.users=this.usersCollection.snapshotChanges().pipe(map(changes=>{
      return changes.map(action =>{
        const data= action.payload.doc.data() as Paciente;
        data.id=action.payload.doc.id;
        return data;
      });
    }));
     }

     getUser(idUser: string){
      this.userDocument=this.afs.doc<Paciente>(`users/${idUser}`);
      return this.user=this.userDocument.snapshotChanges().pipe(map(action=>{
        if(action.payload.exists==false){
          return null;
        }else{
          const data= action.payload.data() as Paciente;
          data.id=action.payload.id;
          return data;
        }
      }));
    }

    getUserName(name: string){
      this.userDocument=this.afs.doc<Paciente>(`users/${name}`);
      return this.user=this.userDocument.snapshotChanges().pipe(map(action=>{
        if(action.payload.exists==false){
          return null;
        }else{
          const data= action.payload.data() as Paciente;
          data.id=action.payload.id;
          return data;
        }
      }));
    }
//EXTRAER DOCTORES

    getAllDoctores(){
      return this.docts=this.doctorCollection.snapshotChanges().pipe(map(changes=>{
        return changes.map(action =>{
          const data= action.payload.doc.data() as Doctor;
          data.idDoc = action.payload.doc.id;
          return data;
        });
      }));
       }
//EXTRAER UN SOLO DOCTOR
       getDoc(idUser: string){
        this.docDocument= this.afs.doc<Doctor>(`doctores/${idUser}`);
        return this.doct = this.docDocument.snapshotChanges().pipe(map(action=>{
          if(action.payload.exists==false){
            return null;
          }else{
            const data= action.payload.data() as Doctor;
            data.idDoc = action.payload.id;
            return data;
          }
        }));
      }

  //actualizar un doctor
  UpdateDoc(doct: Doctor, idUser: string): void{
    let idDoc = doct.idDoc;
    this.docDocument = this.afs.doc<Doctor>(`doctores/${idUser}`);
    this.docDocument.update(doct);

  }

 //borrar un doctor
      deleteDoc(idUser: string): void{
        this.docDocument = this.afs.doc<Doctor>(`doctores/${idUser}`);
        this.docDocument.delete();

      }

  }


