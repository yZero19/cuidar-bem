import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgendamentoService } from 'src/app/core/service/agendamento.service';
import { AgendamentoRequestDto } from 'src/app/core/types/Agendamento';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {

  form!: FormGroup;
  agendamentoDto: AgendamentoRequestDto
  password: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private agendamentoService: AgendamentoService
  ) {
    this.agendamentoDto = new AgendamentoRequestDto()
  }

  ngOnInit(): void {
    window.scroll(0, 0);

    this.form = this.formBuilder.group({
      paciente: new FormControl('', Validators.required),
      data: new FormControl('', Validators.required),
      horario: new FormControl('08:30', Validators.required),
      medico: new FormControl("Dr1", Validators.required),
      servico: new FormControl("consultas-rotina", Validators.required)
    });
  }

  salvar() {
    if (this.form.valid) {
      this.agendamentoDto = this.form.value;

      this.agendamentoService.agendarConsulta(this.agendamentoDto).subscribe(
        (resp: any) => {
          this.alertSuccess("Consulta agendada com sucesso!");
        },
        (error) => {

          this.alertError('Erro no agandamento!');

        }
      );
    }
  }

  alertSuccess(message: string) {
    Swal.fire({
      title: `<h5 style="color:green">${message}</h5>`,
      icon: 'success',
      confirmButtonText: 'OK',
      showConfirmButton: false,
    });
  }

  alertError(message: string) {
    Swal.fire({
      title: `<h5>${message}</h5>`,
      icon: 'error',
      confirmButtonColor: '#d33',
      confirmButtonText: 'OK',
      showConfirmButton: false,
    });
  }

}
