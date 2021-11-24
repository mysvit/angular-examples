import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {interactionList, InteractionVC} from '../../interaction.model'
import * as _ from 'lodash'
import {VcChildComponent} from '../vc-child/vc-child.component'

@Component({
    selector: 'app-vc-parent',
    templateUrl: './vc-parent.component.html',
    styleUrls: ['./vc-parent.component.scss']
})
export class VcParentComponent implements OnInit {

    isCopyObj: boolean = false
    interactions: Array<InteractionVC> = _.cloneDeep(interactionList)
    newInteraction?: InteractionVC

    @ViewChildren(VcChildComponent) vcChildList!: QueryList<VcChildComponent>;

    constructor() {
    }

    ngOnInit(): void {
    }

    addRow() {
        const maxObj = _.maxBy(this.interactions, 'id') || <InteractionVC>{id: 0};
        this.newInteraction = <InteractionVC>{id: maxObj.id + 1, isAdd: true};
    }

    editRow(item: InteractionVC) {
        item.isEdit = true
        item.isDelete = false
    }

    deleteRow(item: InteractionVC) {
        item.isDelete = true
        item.isEdit = false
    }

    saveChildClick(item: InteractionVC) {
        const childItem = this.vcChildList.find(f => f.item?.id === item.id)?.item
            || <InteractionVC>{}
        const index = this.interactions.findIndex(f => f.id === childItem?.id)
        if (this.newInteraction) {
            this.interactions.push(this.newInteraction)
            this.newInteraction = undefined
        }
        if (item.isEdit) {
            childItem.isEdit = false
            this.interactions.splice(index, 1, childItem)
        }
        if (item.isDelete) {
            this.interactions.splice(index, 1)
        }
        item.isEdit = false
        item.isDelete = false
    }

    cancelChildClick(item: InteractionVC) {
        item.isEdit = false
        item.isDelete = false
    }

}
