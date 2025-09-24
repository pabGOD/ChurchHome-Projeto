import { Component, Input } from '@angular/core';
import { Culto } from '../../model/culto.model';
import { CommonModule } from '@angular/common'; // 1. IMPORTE O CommonModule

@Component({
  selector: 'app-culto-card',
  standalone: true,
  imports: [
    CommonModule // 2. ADICIONE O CommonModule AOS IMPORTS DO COMPONENTE
  ],
  templateUrl: './culto-card.component.html',
  styleUrls: ['./culto-card.component.css']
})
export class CultoCardComponent {
  @Input() culto!: Culto;

  // 3. ADICIONE A FUNÇÃO QUE ESTAVA FALTANDO
  getTagClass(tipo: string): string {
    switch (tipo) {
      case 'CULTO DOMINICAL': return 'tag-dominical';
      case 'REUNIÃO DE ORAÇÃO': return 'tag-oracao';
      case 'ESTUDO BÍBLICO': return 'tag-estudo';
      case 'EVENTO ESPECIAL': return 'tag-especial';
      default: return '';
    }
  }
}