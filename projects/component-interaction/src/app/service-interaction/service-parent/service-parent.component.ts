import {Component, OnInit} from '@angular/core';
import {InteractionService} from '../interaction.service'
import {InteractionSRV} from '../../interaction.model'
import * as _ from 'lodash'

@Component({
    selector: 'app-service-parent',
    templateUrl: './service-parent.component.html',
    styleUrls: ['./service-parent.component.scss'],
    providers: [InteractionService]
})
export class ServiceParentComponent implements OnInit {

    constructor(public interactionService: InteractionService) {
    }

    ngOnInit(): void {
    }

    addRow() {
        const maxObj = _.maxBy(this.interactionService.interactions, 'id') || <InteractionSRV>{id: 0};
        this.interactionService.newInteraction = <InteractionSRV>{id: maxObj.id + 1, isEdit: true};
    }

    editRow(item: InteractionSRV) {
        item.isEdit = true
    }

    deleteRow(item: InteractionSRV) {
        item.isDelete = true
    }

}
