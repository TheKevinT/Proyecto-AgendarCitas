import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Cita } from '../Modelo/cita';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {


  public citas: Cita[];
  constructor(private authService:AuthService) { }

  ngOnInit() {

    this.getListCitas();
  }

  getListCitas(){
    this.authService.getAllCitas().subscribe(citas => {
    this.citas=citas;
    });
  }

}
