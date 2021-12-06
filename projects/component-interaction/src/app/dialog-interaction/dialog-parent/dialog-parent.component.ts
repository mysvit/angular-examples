import {Component} from '@angular/core';
import {InteractionDlg, interactionList, ModificationType} from '../../interaction.model'
import * as _ from 'lodash'
import {MatDialog} from '@angular/material/dialog'
import {DialogData} from '../dialog.model'
import {DialogDialogComponent} from '../dialog-dialog/dialog-dialog.component'

@Component({
    selector: 'app-dialog-parent',
    templateUrl: './dialog-parent.component.html',
    styleUrls: ['./dialog-parent.component.scss']
})
export class DialogParentComponent {

    isCopyObj: boolean = false
    interactions: Array<InteractionDlg> = _.cloneDeep(interactionList)
    apiList = ['aaaaaaaa', 'dfdfdfdfdfd']

    constructor(public dialog: MatDialog) {
    }

    addRowClick() {
        const maxObj = _.maxBy(this.interactions, 'id') || <InteractionDlg>{id: 0}
        const newItem = <InteractionDlg>{id: maxObj.id + 1, isAdd: true}
        this.openDialog(ModificationType.New, newItem)
    }

    editRowClick(item: InteractionDlg) {
        this.openDialog(ModificationType.Edit, item)
    }

    deleteRowClick(item: InteractionDlg) {
        this.openDialog(ModificationType.Delete, item)
    }

    private openDialog(dialogType: ModificationType, item: InteractionDlg) {
        const dialogRef = this.dialog.open(DialogDialogComponent, {
            data: <DialogData>{
                modificationType: dialogType,
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
        switch (data.modificationType) {
            case ModificationType.New:
                this.interactions.push(data.item)
                break
            case ModificationType.Edit:
                this.interactions.splice(index, 1, data.item)
                break
            case ModificationType.Delete:
                this.interactions.splice(index, 1)
                break
        }
    }

}
