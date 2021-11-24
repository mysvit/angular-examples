import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'
import {InteractionIO} from '../../interaction.model'

@Component({
    selector: 'app-io-dialog',
    templateUrl: './io-dialog.component.html',
    styleUrls: ['./io-dialog.component.scss']
})
export class IoDialogComponent {

    constructor(public dialogRef: MatDialogRef<IoDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: InteractionIO) {
    }

    cancelClick(): void {
        this.dialogRef.close();
    }

}
