import {Injectable} from '@angular/core';
import {interactionList, InteractionSRV, ModificationType} from '../interaction.model'
import * as _ from 'lodash'

@Injectable({
    providedIn: 'root'
})
export class ServiceInteractionService {

    interactions: Array<InteractionSRV> = _.cloneDeep(interactionList)
    isCopyObj: boolean = false
    selectedItem!: InteractionSRV
    modificationType?: ModificationType

    constructor() {
    }

    selectItem(item: InteractionSRV, mType: ModificationType) {
        switch (mType) {
            case ModificationType.New:
                const maxId = (_.maxBy(this.interactions, 'id') || <InteractionSRV>{id: 0}).id + 1;
                this.selectedItem = <InteractionSRV>{id: maxId}
                break
            case ModificationType.Edit:
            case ModificationType.Delete:
                if (this.isCopyObj) {
                    this.selectedItem = _.cloneDeep(item)
                } else {
                    this.selectedItem = item
                }
        }
        this.modificationType = mType
    }

    save() {
        if (this.modificationType === ModificationType.New) {
            this.interactions.push(this.selectedItem)
        } else {
            const index = this.interactions.findIndex(f => f.id === this.selectedItem?.id)
            this.interactions.splice(index, 1, this.selectedItem)
        }
        this.clearSelection()
    }

    delete() {
        const index = this.interactions.findIndex(f => f.id === this.selectedItem?.id)
        this.interactions.splice(index, 1)
        this.clearSelection()
    }

    cancel() {
        this.clearSelection()
    }

    private clearSelection() {
        this.modificationType = undefined
        this.selectedItem = <InteractionSRV>{}
    }

}
