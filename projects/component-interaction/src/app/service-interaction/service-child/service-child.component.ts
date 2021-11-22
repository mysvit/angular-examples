import {Component, Input, OnInit} from '@angular/core';
import {InteractionService} from '../interaction.service'
import {InteractionModel} from '../../interaction.model'

@Component({
    selector: 'app-service-child',
    templateUrl: './service-child.component.html',
    styleUrls: ['./service-child.component.scss']
})
export class ServiceChildComponent implements OnInit {

    @Input() id!: number
    selectedItem!: InteractionModel

    constructor(public interactionService: InteractionService) {
    }

    ngOnInit(): void {
        this.selectedItem = this.interactionService.interactions.find(f => f.id === this.id)
            || <InteractionModel>{}
    }

    saveClick() {
        this.save(true)
    }

    cancelClick() {
        this.save(false)
    }

    save(isSave: boolean) {
        this.selectedItem.isEdit = false
        if (isSave) {
            // this.selectedItem
        }
    }

}
