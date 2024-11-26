import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InteractionIO, InteractionModel} from '../../interaction.model'
import * as _ from 'lodash'

@Component({
    selector: 'app-io-child',
    templateUrl: './io-child.component.html',
    standalone: false
})
export class IoChildComponent implements OnInit {

    @Input() item!: InteractionIO
    @Input() isCopyObj: boolean = false

    @Output() result: EventEmitter<InteractionModel> = new EventEmitter<InteractionModel>()

    constructor() {
    }

    ngOnInit(): void {
        if (this.isCopyObj) {
            this.item = _.cloneDeep(this.item)
        }
    }

    saveClick() {
        this.result.emit(this.item)
    }

    deleteClick() {
        this.result.emit(this.item)
    }

    cancelClick() {
        this.item.isCancel = true
        this.result.emit(this.item)
    }

}
