import {Component} from '@angular/core';
import {interactionList, InteractionModel} from '../../interaction.model'
import * as _ from 'lodash'
import {MatDialog} from '@angular/material/dialog'
import {DialogData, DialogType} from './dialog.model'
import {DialogDialogComponent} from '../dialog-dialog/dialog-dialog.component'

@Component({
    selector: 'app-dialog-parent',
    templateUrl: './dialog-parent.component.html',
    styleUrls: ['./dialog-parent.component.scss']
})
export class DialogParentComponent {

    isCopyObj: boolean = false
    interactions: Array<InteractionModel> = _.cloneDeep(interactionList)

    constructor(public dialog: MatDialog) {
    }

    addRow() {
        const maxObj = _.maxBy(this.interactions, 'id') || <InteractionModel>{id: 0}
        const newItem = <InteractionModel>{id: maxObj.id + 1, isAdd: true}
        this.openDialog(DialogType.Edit, newItem)
    }

    editRow(item: InteractionModel) {
        this.openDialog(DialogType.Edit, item)
    }

    deleteRow(item: InteractionModel) {
        this.openDialog(DialogType.Delete, item)
    }

    private openDialog(dialogType: DialogType, item: InteractionModel) {
        const dialogRef = this.dialog.open(DialogDialogComponent, {
            data: <DialogData>{
                dialogType: dialogType,
                item: this.isCopyObj ? _.cloneDeep(item) : item
            }
        })
        dialogRef.afterClosed().subscribe(data => this.resultDialog(data))
    }

    resultDialog(data: DialogData) {
        if (!data) {
            return
        }
        const index = this.interactions.findIndex(f => f.id === data.item.id)
        switch (data.dialogType) {
            case DialogType.New:
                this.interactions.push(data.item)
                break
            case DialogType.Edit:
                this.interactions.splice(index, 1, data.item)
                break
            case DialogType.Delete:
                this.interactions.splice(index, 1)
                break
        }
    }

}
