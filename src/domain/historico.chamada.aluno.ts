import { Aluno } from './aluno';
import { Chamada } from './chamada';

export class HistoricoChamadaAluno {
  private _aluno: Aluno;

  private _chamada: Chamada;

  get aluno(): Aluno {
    return this._aluno;
  }

  set aluno(value: Aluno) {
    this._aluno = value;
  }

  get chamada(): Chamada {
    return this._chamada;
  }

  set chamada(value: Chamada) {
    this._chamada = value;
  }
}
