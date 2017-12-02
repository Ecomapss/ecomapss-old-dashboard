export interface ResourceFossil {
    Data: Array<Fossil>
}

export interface Fossil{
    fossil: Boolean,
    designacao: String,
    estratigrafia: String,
    idade: String,
    procedencia: String,
    info: String
}

export interface OneFossil{
    data: Fossil,
    Error: Boolean
}

export class FossilModel implements Fossil {
    constructor(
        public fossil: Boolean,
        public designacao: String,
        public estratigrafia: String,
        public idade: String,
        public procedencia: String,
        public info: String
    ){this.fossil = true}

    clear(): void{
        this.designacao = "";
        this.estratigrafia = "";
        this.idade = "";
        this.info = "";
        this.procedencia = "";
    }
}