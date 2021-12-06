import {Injectable} from '@angular/core';
import {HttpLogMessage, MessageType} from './http.model'

@Injectable({
    providedIn: 'root'
})
export class HttpLogService {

    messages: Array<HttpLogMessage> = [];

    add(text: string, type: MessageType = MessageType.Info) {
        this.messages.push(<HttpLogMessage>{msgType: type, msgText: text});
    }

    clear() {
        this.messages = [];
    }

}
