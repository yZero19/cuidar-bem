import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../core/service/usuario.service';
import { AgendamentoService } from '../core/service/agendamento.service';
import { format } from 'date-fns';


interface Usuario {
  nome: string
  sobrenome: string
  cpf: string
  email: string
  idade: string
  sexo: string
}

interface Consulta {

  data: any
  horario: string
  medico: string
  servico: string
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usuario: Usuario;
  form: FormGroup;
  consultas: Consulta[];

  constructor(private router: Router,
    private usuarioService: UsuarioService,
    private agendamentoService: AgendamentoService){

      this.usuario = {
       
        nome: '',
        sobrenome: '',
        cpf: '',
        email: '',
        idade: '',
        sexo: '',

      }
     }

  ngOnInit(): void {
    this.teste()
    this.usuarioService.buscarPorId().subscribe(

      (resp: any) => {
        console.log(resp);
        this.usuario = resp
      }
    );
  } 

  teste() {

    this.agendamentoService.listarConsultas().subscribe(

      (resp: any) => {
        this.consultas = resp
        console.log(this.consultas);
        console.log(resp);
      }
    );

  }

  }
