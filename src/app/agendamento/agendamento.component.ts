import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agendamento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agendamento.component.html',
  styleUrl: './agendamento.component.css'
})
export class AgendamentoComponent {

}
function validarData(): boolean {
  const dataInput = document.getElementById("data") as HTMLInputElement;
  const dataSelecionada = new Date(dataInput.value);
  const diaDaSemana = dataSelecionada.getDay();

  if (diaDaSemana === 0 || diaDaSemana === 6) {
      alert("Desculpe, não é possível agendar consultas nos fins de semana.");
      return false;
  }
  return true;
}