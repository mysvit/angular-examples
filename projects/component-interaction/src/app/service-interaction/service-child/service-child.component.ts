import {Component, Input, OnInit} from '@angular/core';
import {InteractionService} from '../interaction.service'
import {InteractionSRV} from '../../interaction.model'
import * as _ from 'lodash'

@Component({
    selector: 'app-service-child',
    templateUrl: './service-child.component.html',
    styleUrls: ['./service-child.component.scss']
})
export class ServiceChildComponent implements OnInit {

    @Input() id?: number
    selectedItem!: InteractionSRV

    constructor(public interactionService: InteractionService) {
    }

    ngOnInit(): void {
        // New
        if (this.interactionService.newInteraction) {
            this.selectedItem = _.cloneDeep(this.interactionService.newInteraction)
            return;
        }
        // Edit or Delete
        const tmpObject = this.interactionService.interactions.find(f => f.id === this.id) || <InteractionSRV>{}
        if (this.interactionService.isCopyObj) {
            this.selectedItem = _.cloneDeep(tmpObject)
        } else {
            this.selectedItem = tmpObject
        }
    }

    saveClick() {
        if (this.interactionService.newInteraction) {
            this.addCommand(true)
        } else {
            this.editCommand(true)
        }
    }

    deleteClick() {
        this.deleteCommand(true)
    }

    cancelClick() {
        if (this.interactionService.newInteraction) {
            this.addCommand(false);
        } else if (this.selectedItem.isEdit) {
            this.editCommand(false)
        } else {
            this.deleteCommand(false)
        }
    }

    addCommand(isSave: boolean) {
        if (isSave) {
            this.selectedItem.isEdit = false
            this.interactionService.interactions.push(this.selectedItem)
        }
        this.interactionService.newInteraction = undefined
    }

    editCommand(isSave: boolean) {
        const index = this.interactionService.interactions.findIndex(f => f.id === this.id)
        if (isSave) {
            this.selectedItem.isEdit = false
            this.interactionService.interactions.splice(index, 1, this.selectedItem)
        } else {
            this.interactionService.interactions[index].isEdit = false
        }
    }

    deleteCommand(isDelete: boolean) {
        const index = this.interactionService.interactions.findIndex(f => f.id === this.id)
        if (isDelete) {
            this.interactionService.interactions.splice(index, 1)
        } else {
            this.interactionService.interactions[index].isDelete = false
        }
    }

}
