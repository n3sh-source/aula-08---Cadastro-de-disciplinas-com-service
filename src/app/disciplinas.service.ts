import { Injectable } from '@angular/core';
import { listData } from './lista';

interface Disciplinas {
  nome: string;
  diaSemana: string;
  horario: string;
}

@Injectable()
export class DisciplinasService {
  list: Array<Disciplinas> = listData;

  constructor() {}

  add(disciplina: Disciplinas) {
    this.list.push(disciplina);
  }

  del(index: number) {
    this.list.splice(index, 1);
  }

  getLista() {
    return this.list;
  }
}
