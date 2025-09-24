import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {
  // O @Output cria um evento que o componente pai pode "ouvir"
  @Output() closeModal = new EventEmitter<void>();

  // Variável para controlar qual aba está ativa
  view: 'login' | 'register' = 'login';

  // Função para fechar o modal
  close(): void {
    this.closeModal.emit();
  }

  // Função para trocar de aba
  changeView(view: 'login' | 'register'): void {
    this.view = view;
  }
}