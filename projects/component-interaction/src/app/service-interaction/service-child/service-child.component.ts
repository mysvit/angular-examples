import {Component} from '@angular/core';
import {ModificationType} from '../../interaction.model';
import {ServiceInteractionService} from '../service-interaction.service'

@Component({
    selector: 'app-service-child',
    templateUrl: './service-child.component.html',
    styleUrls: ['./service-child.component.scss']
})
export class ServiceChildComponent {

    ModificationType = ModificationType

    constructor(public si: ServiceInteractionService) {
    }

    saveClick() {
        this.si.save()
    }

    deleteClick() {
        this.si.delete()
    }

    cancelClick() {
        this.si.cancel()
    }

}
