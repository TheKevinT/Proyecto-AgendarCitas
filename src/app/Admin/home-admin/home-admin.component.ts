import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../Services/data-api.service';
import { Doctor } from '../../Modelo/doctor';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {


  public doctores: Doctor[];
  constructor( private dataApi: DataApiService) { }

  ngOnInit(){

    this.getListDoctores();
  }

  getListDoctores(){
    this.dataApi.getAllDoctores().subscribe(doctores => {
      this.doctores=doctores;
      });

  }

  onDeleteDoc(idDoc:string){

  const opcion = confirm('¿Estas seguro de que deseas eliminar?');
  if(opcion){
    //console.log('borrar id ->' , idDoc);
    this.dataApi.deleteDoc(idDoc);

  }
  }

}
