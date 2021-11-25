import {Component} from '@angular/core';
import {ServiceInteractionService} from '../service-interaction.service'
import {InteractionSRV, ModificationType} from '../../interaction.model'

@Component({
    selector: 'app-service-parent',
    templateUrl: './service-parent.component.html',
    styleUrls: ['./service-parent.component.scss'],
    providers: [ServiceInteractionService]
})
export class ServiceParentComponent {

    ModificationType = ModificationType

    constructor(public si: ServiceInteractionService) {
    }

    addRowClick() {
        this.si.selectItem(<InteractionSRV>{}, ModificationType.New)
    }

    editRowClick(item: InteractionSRV) {
        this.si.selectItem(item, ModificationType.Edit)
    }

    deleteRowClick(item: InteractionSRV) {
        this.si.selectItem(item, ModificationType.Delete)
    }

}
