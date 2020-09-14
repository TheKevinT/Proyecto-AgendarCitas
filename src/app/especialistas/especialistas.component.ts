import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../Services/data-api.service';
import { Doctor } from '../Modelo/doctor';

@Component({
  selector: 'app-especialistas',
  templateUrl: './especialistas.component.html',
  styleUrls: ['./especialistas.component.css']
})
export class EspecialistasComponent implements OnInit {

  public doctores: Doctor[];
  constructor( private dataApi:DataApiService ) { }

  ngOnInit(){
    
    this.getListDoctores();
  }

  getListDoctores(){
    this.dataApi.getAllDoctores().subscribe(doctores => {
      this.doctores=doctores;
      });

  }

}
