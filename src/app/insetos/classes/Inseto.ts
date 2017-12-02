export interface Resource {
    Data: Array<Inseto>
}

export interface Inseto{
    inseto: Boolean,
    ordem: String,
    reino: String,
    filo: String,
    classe: String,
    info: String
}

export interface OneInseto {
    data: Inseto,
    Error: Boolean
}

export class InsetoModel implements Inseto {
    constructor(
        public inseto: Boolean,
        public ordem: String,
        public reino: String,
        public filo: String,
        public classe: String,
        public info: String
    ){this.inseto = true}

    clear(): void {
        this.ordem = "";
        this.classe = "";
        this.filo = "";
        this.info = "";
        this.reino = "";
    }
}