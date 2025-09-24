import { Component, OnInit } from '@angular/core';
import { Culto } from '../model/culto.model';
import { CultoCardComponent } from './culto-card/culto-card.component'; 
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-cultos',
  standalone: true, 
  imports: [
    CommonModule, 
    CultoCardComponent 
  ],
  templateUrl: './cultos.component.html',
  styleUrls: ['./cultos.component.css']
})
export class CultosComponent implements OnInit {
  public cultos: Culto[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cultos = [
      {
        id: 1,
        titulo: 'Culto de Celebração',
        subtitulo: 'Culto de celebração com louvor e ministração da palavra',
        data: new Date('2025-09-17T09:00:00'),
        local: 'Templo Principal',
        participantesConfirmados: 145,
        tipo: 'CULTO DOMINICAL'
      },
      {
        id: 2,
        titulo: 'Reunião de Oração Matinal',
        subtitulo: 'Momento de oração e intercessão pela igreja e comunidade',
        data: new Date('2025-09-18T06:00:00'),
        local: 'Sala de Oração',
        participantesConfirmados: 32,
        tipo: 'REUNIÃO DE ORAÇÃO'
      },
      {
        id: 3,
        titulo: 'Estudo Bíblico - Livro de João',
        subtitulo: 'Continuação do estudo no evangelho de João, capítulo 8',
        data: new Date('2025-09-19T19:30:00'),
        local: 'Sala Multiuso',
        participantesConfirmados: 50,
        tipo: 'ESTUDO BÍBLICO'
      },
      {
        id: 4,
        titulo: 'Conferência de Jovens',
        subtitulo: 'Conferência especial para jovens com ministração e louvor',
        data: new Date('2025-09-21T19:00:00'),
        local: 'Auditório Anexo',
        participantesConfirmados: 215,
        tipo: 'EVENTO ESPECIAL'
      }
    ];
  }

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