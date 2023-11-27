import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/core/service/usuario.service';
import { UserRequestDto } from 'src/app/core/types/User';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form!: FormGroup;
  userRequest: UserRequestDto
  password: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
  ) {
    this.userRequest = new UserRequestDto()
    this.userRequest.sexo = '';
  }

  ngOnInit(): void {
    window.scroll(0, 0);

    this.form = this.formBuilder.group({
      nome: new FormControl('', Validators.required),
      sobrenome: new FormControl('', Validators.required),
      idade: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      rg: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', Validators.required)
    });
  }

  salvar() {
    if (this.form.valid) {
      this.userRequest = this.form.value;


      this.usuarioService.signUp(this.userRequest).subscribe(
        (resp: any) => {
          this.alertSuccess("Usuário cadastrado com sucesso!");
          this.router.navigate(['/login']);
        },
        (error) => {
          if (error.error && error.error.length > 0) {
            const firstError = error.error[0];
            this.alertError('Erro ao cadastrar usuário: ' + firstError.message);
          } else {
            this.alertError('Erro ao cadastrar usuário: ' + error.message);
          }
        }
      );

    } else {
      this.alertError('Preencha todos os campos obrigatorios!');
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
