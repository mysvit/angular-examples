import {Injectable} from '@angular/core';
import {interactionList, InteractionSRV} from '../interaction.model'
import * as _ from 'lodash'

@Injectable({
    providedIn: 'root'
})
export class InteractionService {

    interactions: Array<InteractionSRV> = _.cloneDeep(interactionList)
    isCopyObj: boolean = false
    newInteraction?: InteractionSRV

    constructor() {
    }

}
