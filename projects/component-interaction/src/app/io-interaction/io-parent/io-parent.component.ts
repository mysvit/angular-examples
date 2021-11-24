import {Component, OnInit} from '@angular/core';
import {InteractionIO, interactionList} from '../../interaction.model'
import * as _ from 'lodash'
import {MatDialog} from '@angular/material/dialog'
import {IoDialogComponent} from '../io-dialog/io-dialog.component'

@Component({
    selector: 'app-io-parent',
    templateUrl: './io-parent.component.html',
    styleUrls: ['./io-parent.component.scss']
})
export class IoParentComponent implements OnInit {

    isCopyObj: boolean = false
    interactions: Array<InteractionIO> = _.cloneDeep(interactionList)
    newInteraction?: InteractionIO

    constructor(public dialog: MatDialog) {
    }

    ngOnInit(): void {
    }

    addRow() {
        const maxObj = _.maxBy(this.interactions, 'id') || <InteractionIO>{id: 0};
        this.newInteraction = <InteractionIO>{id: maxObj.id + 1, isAdd: true};
    }

    editRow(item: InteractionIO) {
        item.isEdit = true
    }

    deleteRow(item: InteractionIO) {
        item.isEdit = false
        const dialogRef = this.dialog.open(IoDialogComponent, {data: item})
        dialogRef.afterClosed().subscribe(data => {
            if (data) {
                const index = this.interactions.findIndex(f => f.id === data.id)
                this.interactions.splice(index, 1)
            }
        });
    }

    resultEvent($event: InteractionIO) {
        if ($event.isCancel) {
            if ($event.isAdd) {
                this.newInteraction = undefined
                return
            }
            const item = this.interactions.find(f => f.id === $event.id) || <InteractionIO>{}
            item.isCancel = false
            item.isEdit = false
            item.isDelete = false
            return
        }
        const index = this.interactions.findIndex(f => f.id === $event.id)
        if ($event.isAdd) {
            this.newInteraction = undefined
            $event.isAdd = false
            this.interactions.push($event)
        }
        if ($event.isEdit) {
            $event.isEdit = false
            this.interactions.splice(index, 1, $event)
        }
        if ($event.isDelete) {
            this.interactions.splice(index, 1)
        }
    }

}
