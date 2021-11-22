import {Component, OnInit} from '@angular/core';
import {InteractionService} from '../interaction.service'
import {InteractionModel} from '../../interaction.model'

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

    editRow(item: InteractionModel) {
        item.isEdit = true
    }

}
