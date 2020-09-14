import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../Modelo/doctor';
import { DataApiService } from '../../Services/data-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-doc',
  templateUrl: './editar-doc.component.html',
  styleUrls: ['./editar-doc.component.css']
})
export class EditarDocComponent implements OnInit {

  public doctores: Doctor;

  generos: any = [
    'Hombre',
    'Mujer',
  ];

  constructor(private router:Router ,private route: ActivatedRoute ,private dataApi: DataApiService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params=>{
      let id = params.id;
      this.getDocs(id);
    });

  }



  getDocs(id){
    this.dataApi.getDoc(id).subscribe(doctores => {
      this.doctores=doctores;
      });
  }

  onPreupdate(doctor: NgForm){

        this.dataApi.UpdateDoc(doctor.value)
     
  
  }
   


}
