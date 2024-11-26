import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-input-interaction',
    templateUrl: './input-interaction.component.html',
    styleUrls: ['./input-interaction.component.scss'],
    standalone: false
})
export class InputInteractionComponent implements OnInit {

    radioValue?: string
    radioValue2?: string
    radioValue3?: string

    constructor() {
    }

    ngOnInit(): void {
    }

    radioChanged() {
        console.log(this.radioValue)
    }

}
