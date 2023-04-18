import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel; // Instancia de Usuario Model

  constructor() { }

  ngOnInit() {
    this.usuario = new UsuarioModel(); //Inicializacion
   }
   onSubmit( form: NgForm ) {

    // if ( form.form.status == "INVALID") {
    //   return ;
    // }
    console.log("Formulario Enviado");
    console.log(this.usuario);
    console.log( form);

   }

}
