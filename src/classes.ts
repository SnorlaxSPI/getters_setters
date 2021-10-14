export class Empresa {
  public readonly nome: string;
  public readonly colaboradores: Colaborador[] = [];
  public readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) {}
}

const empresa1 = new Empresa("Alessandro", "11.111.111/0001-11");

const colaborador1 = new Colaborador("Luiz", "Otavio");
const colaborador2 = new Colaborador("Alessandro", "Lins");
const colaborador3 = new Colaborador("Caio", "Vidal");

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

//console.log(empresa1);
empresa1.mostrarColaboradores();
