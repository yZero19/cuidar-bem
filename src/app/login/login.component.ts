import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
const cpfInput = document.getElementById('login') as HTMLInputElement | null;

if (cpfInput) {
    cpfInput.addEventListener('input', function () {
        let cpf = cpfInput.value.replace(/\D/g, '');

        if (cpf.length >= 11) {
            cpf = cpf.substring(0, 11);
            cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        }

        cpfInput.value = cpf;
    });
} else {
    console.error('Elemento com ID "login" não encontrado.');
}