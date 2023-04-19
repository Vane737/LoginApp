import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel;
  constructor() { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }
  onSubmit( formu:NgForm ) {

    if (formu.invalid) {
      return;
    }
    console.log("hola mundo");
    console.log(formu);
    console.log(this.usuario);
  }

}
