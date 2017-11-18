export class Config {
    bsURL: String;
    constructor () {
        this.bsURL = "http://flask-env.zyq3kkkkdj.us-west-2.elasticbeanstalk.com/";
    }

    getBsUrl() {
        return this.bsURL;
    }
}