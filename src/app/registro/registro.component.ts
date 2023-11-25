import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

}
const rgInput = document.getElementById('rg') as HTMLInputElement | null;

if (rgInput) {
    rgInput.addEventListener('input', function () {
        let value = rgInput.value.replace(/\D/g, '');

        if (value.length > 9) {
            value = value.substring(0, 9);
        }

        if (value.length > 2) {
            value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4');
        }

        rgInput.value = value;
    });
} else {
    console.error('Elemento com ID "rg" não encontrado.');
}

const idadeInput = document.getElementById('idade') as HTMLInputElement | null;

if (idadeInput) {
    idadeInput.addEventListener('input', function () {
        let idade = parseInt(idadeInput.value);

        if (isNaN(idade) || idade > 110) {
            idadeInput.value = '';
        }
    });
} else {
    console.error('Elemento com ID "idade" não encontrado.');
}
