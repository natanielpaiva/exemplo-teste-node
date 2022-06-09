import { Aluno } from './aluno';

export class Chamada {
  private _aluno: Aluno;

  private _presente: boolean;

  private _data: Date;

  get aluno(): Aluno {
    return this._aluno;
  }

  set aluno(value: Aluno) {
    this._aluno = value;
  }

  get presente(): boolean {
    return this._presente;
  }

  set presente(value: boolean) {
    this._presente = value;
  }

  get data(): Date {
    return this._data;
  }

  set data(value: Date) {
    this._data = value;
  }
}
