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
        this.messages.push(moment().format('hh:mm:ss').concat(' ').concat(text));
    }

}
