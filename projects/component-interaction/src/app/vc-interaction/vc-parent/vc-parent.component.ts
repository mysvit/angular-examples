import {Component, ViewChild} from '@angular/core';
import {interactionList, InteractionVC, ModificationType} from '../../interaction.model'
import * as _ from 'lodash'
import {VcChildComponent} from '../vc-child/vc-child.component'
import {interval, take, takeWhile} from 'rxjs'

@Component({
    selector: 'app-vc-parent',
    templateUrl: './vc-parent.component.html',
    styleUrls: ['./vc-parent.component.scss'],
    standalone: false
})
export class VcParentComponent {

    ModificationType = ModificationType
    interactions: Array<InteractionVC> = _.cloneDeep(interactionList)
    isCopyObj: boolean = false
    selectedItem: InteractionVC = <InteractionVC>{}
    modificationType?: ModificationType

    @ViewChild(VcChildComponent) vcChild!: VcChildComponent

    constructor() {
    }

    childAssign() {
        interval(5).pipe(
            takeWhile(() => {
                if (this.vcChild === undefined) {
                    return true
                } else {
                    this.vcChild.item = this.selectedItem
                    return false
                }
            }),
            take(10)
        ).subscribe();
    }

    addRowClick() {
        const maxId = (_.maxBy(this.interactions, 'id') || <InteractionVC>{id: 0}).id + 1
        this.selectedItem = <InteractionVC>{id: maxId}
        this.modificationType = ModificationType.New
        this.childAssign()
    }

    editRowClick(item: InteractionVC) {
        this.selectedItem = this.isCopyObj ? _.cloneDeep(item) : item
        this.modificationType = ModificationType.Edit
        this.childAssign()
    }

    deleteRowClick(item: InteractionVC) {
        this.selectedItem = this.isCopyObj ? _.cloneDeep(item) : item
        this.modificationType = ModificationType.Delete
    }

    saveChildClick() {
        if (this.modificationType === ModificationType.New) {
            this.interactions.push(this.vcChild.item)
        } else {
            const index = this.interactions.findIndex(f => f.id === this.selectedItem.id)
            this.interactions.splice(index, 1, this.vcChild.item)
        }
        this.clearSelected()
    }

    deleteChildClick() {
        const index = this.interactions.findIndex(f => f.id === this.selectedItem.id)
        this.interactions.splice(index, 1)
    }

    cancelChildClick() {
        this.clearSelected()
    }

    private clearSelected() {
        this.selectedItem = <InteractionVC>{}
        this.modificationType = undefined
    }

}
