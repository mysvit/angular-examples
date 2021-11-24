import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'
import {DialogData, DialogType} from '../dialog-parent/dialog.model'

@Component({
    selector: 'app-dialog-dialog',
    templateUrl: './dialog-dialog.component.html',
    styleUrls: ['./dialog-dialog.component.scss']
})
export class DialogDialogComponent {

    DialogType = DialogType

    constructor(public dialogRef: MatDialogRef<DialogDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: DialogData) {
        console.log(data)
    }

    cancelClick(): void {
        this.dialogRef.close();
    }

}
