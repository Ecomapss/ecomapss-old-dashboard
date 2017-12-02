export interface ResourceHistory {
    Data: Array<Historia>
}

export interface Historia{
    historia: Boolean,
    titulo: String,
    info: String,
    localidade: String
}

export interface OneHistoria {
    data: Historia,
    Error: Boolean
}

export class HistoriaModel implements Historia {
    constructor(
        public historia: Boolean,
        public titulo: String,
        public info: String,
        public localidade: String
    ){this.historia = true}

    clear(): void {
        this.titulo = "";
        this.info = "";
        this.localidade = "";
    }
}