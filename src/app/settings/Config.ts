export class Config {
    private bsURL: String;
    constructor () {
    }
    getBsUrl() {
        return this.bsURL;
    }
    setUrl(url: String){
        this.bsURL = url;
    }
}

export interface Info {
  Error: Boolean,
  Menssage: string,
}