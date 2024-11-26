import {Component, Inject} from '@angular/core';
import {MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef} from '@angular/material/legacy-dialog'
import {DialogData} from '../dialog.model'
import {ModificationType} from '../../interaction.model'

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
