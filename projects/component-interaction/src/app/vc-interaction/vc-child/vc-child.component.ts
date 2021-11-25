import {Component} from '@angular/core';
import {InteractionVC} from '../../interaction.model'

@Component({
    selector: 'app-vc-child',
    templateUrl: './vc-child.component.html',
    styleUrls: ['./vc-child.component.scss']
})
export class VcChildComponent {

    item!: InteractionVC

    constructor() {
    }

}
