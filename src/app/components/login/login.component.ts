import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/core/service/usuario.service';
import { LoginDto } from 'src/app/core/types/Login';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  loginDto: LoginDto
  isLoggedIn: boolean = false

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
  ) { 
    this.loginDto = new LoginDto();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      cpf: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required)
    });
  }

  salvar(){
    if(this.form.valid){
      this.loginDto = this.form.value
      
      this.usuarioService.login(this.loginDto).subscribe({
        next: (value) => {
          this.form.reset();
          this.router.navigate(['/agendamento']);
        },
        error: (err) => {
          if (err.status == 403) {
            this.alertError("Usuário ou senha inválido!")
          } else {
            console.log(err)
          }
        },
      })
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

  userIsLoggedIn() {
    return !!localStorage.getItem('token');
  }

}
