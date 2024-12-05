import {Injectable} from '@angular/core';
import moment from 'moment';

@Injectable({
    providedIn: 'root'
})
export class LoggerService {

    messages: Array<string> = []
    showAllEvents: boolean = false

    clear() {
        this.messages = []
    }

    log(text: string) {
        this.messages.push(LogFormatter.log(text))
    }

}

export class LogFormatter {

    static log(text: string) {
        const time = moment().format('hh:mm:ss:SSSS').concat(' ')
        console.log(time, text)
        return time.concat(text)
    }

}
