class Loc {
  lat: String;
  lng: String;
}

export interface Resource {
  Data: Array<Tree>;
}

export interface Tree {
  nome_pop: string;
  nome_cie: string;
  familia: string;
  categoria: string;
  origem: string;
  clima: string;
  luminosidade: string;
  altura: string;
  info: string;
  loc: Array<Number>;
}

export class TreeModel implements Tree {
  constructor(
    public nome_pop: string,
    public nome_cie: string,
    public familia: string,
    public categoria: string,
    public origem: string,
    public clima: string,
    public luminosidade: string,
    public altura: string,
    public info: string,
    public loc: Array<Number>
  ) {}

  clear() {
    this.nome_pop = "";
    this.nome_cie = "";
    this.familia = "";
    this.categoria = "";
    this.clima = "";
    this.luminosidade = "";
    this.origem = "";
    this.altura = "";
    this.info = "";
    this.loc = [];
  }
}
