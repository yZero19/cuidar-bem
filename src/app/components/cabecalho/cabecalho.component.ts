import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/core/service/usuario.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {
  isLoggedIn: boolean = false
  constructor(

    private usuarioService: UsuarioService
  ) {


   }

  ngOnInit(): void {
    this.usuarioService.isLoggedIn.subscribe(loggedIn => {
      this.isLoggedIn = !loggedIn;
    });
  }

}


