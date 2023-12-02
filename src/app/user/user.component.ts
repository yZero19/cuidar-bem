import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../core/service/usuario.service';


interface Usuario {
  nome: string
  sobrenome: string
  cpf: string
  email: string
  idade: string
  sexo: string
} 

interface consulta{

  data: Date
  horario : string
  medico : string
  serviço : string




}


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usuario : Usuario;
  form: FormGroup;
  consulta : consulta;

  constructor(private router: Router,
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.buscarPorId().subscribe(

      (resp: any) => {
        console.log(resp);
        this.usuario = resp 
      }
    );
 
        
       
      }
}
