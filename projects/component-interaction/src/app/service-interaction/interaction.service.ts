import {Injectable} from '@angular/core';
import {interactionList} from '../interaction.model'

@Injectable({
    providedIn: 'root'
})
export class InteractionService {

    interactions = interactionList;

    constructor() {
    }

}
