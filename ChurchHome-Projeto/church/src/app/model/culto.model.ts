// src/app/models/culto.model.ts

export interface Culto {
  id: number;
  titulo: string;
  subtitulo: string;
  data: Date;
  local: string;
  participantesConfirmados: number;
  tipo: 'CULTO DOMINICAL' | 'REUNIÃO DE ORAÇÃO' | 'ESTUDO BÍBLICO' | 'EVENTO ESPECIAL';
}