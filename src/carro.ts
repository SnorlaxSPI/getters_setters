export class Carro {
  modelo: string;
  ano: number;
  valor: number;

  constructor(m: string, a: number, v: number) {
    this.modelo = m;
    this.ano = a;
    this.valor = v;
  }

  public getModelo() {
    return this.modelo;
  }

  public setModelo(modelo: string): string {
    return (this.modelo = modelo);
  }

  public getAno() {
    return this.ano;
  }

  public setAno(ano: number): number {
    return (this.ano = ano);
  }

  public getValor(): number {
    return this.valor;
  }

  public setValor(valor: number): number {
    return (this.valor = valor);
  }
}
