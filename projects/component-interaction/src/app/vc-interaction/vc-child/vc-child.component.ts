import {Component, Input, OnInit} from '@angular/core';
import {InteractionVC} from '../../interaction.model'
import * as _ from 'lodash'

@Component({
    selector: 'app-vc-child',
    templateUrl: './vc-child.component.html',
    styleUrls: ['./vc-child.component.scss']
})
export class VcChildComponent implements OnInit {

    @Input() item!: InteractionVC
    @Input() isCopyObj: boolean = false

    constructor() {
    }

    ngOnInit(): void {
        if (this.isCopyObj) {
            this.item = _.cloneDeep(this.item)
        }
    }

}
