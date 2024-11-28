import {Component, Inject} from '@angular/core';
import {DialogData} from '../dialog.model'
import {ModificationType} from '../../interaction.model'
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: 'app-dialog-dialog',
    templateUrl: './dialog-dialog.component.html',
    styleUrls: ['./dialog-dialog.component.scss'],
    standalone: false
})
export class DialogDialogComponent {

    ModificationType = ModificationType

    constructor(public dialogRef: MatDialogRef<DialogDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }

    cancelClick(): void {
        this.dialogRef.close()
    }

}
