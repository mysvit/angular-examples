import {Injectable} from '@angular/core';
import * as moment from 'moment'

@Injectable({
    providedIn: 'root'
})
export class LoggerService {

    messages: Array<string> = [];

    clear() {
        this.messages = [];
    }

    log(text: string) {
        this.messages.push(LogFormatter.log(text))
    }

}

export class LogFormatter {

    static log(text: string) {
        const res = moment().format('hh:mm:ss:SSSS').concat(' ').concat(text)
        console.log(res)
        return res
    }

}
