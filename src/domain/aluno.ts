import { Chamada } from './chamada';

export class Aluno {
  private _nome: string;

  private _statusMatricula: boolean;

  private _historicoPresenca: Array<Chamada>;

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }

  get statusMatricula(): boolean {
    return this._statusMatricula;
  }

  set statusMatricula(value: boolean) {
    this._statusMatricula = value;
  }

  get historicoPresenca(): Array<Chamada> {
    return this._historicoPresenca;
  }

  set historicoPresenca(value: Array<Chamada>) {
    this._historicoPresenca = value;
  }
}
