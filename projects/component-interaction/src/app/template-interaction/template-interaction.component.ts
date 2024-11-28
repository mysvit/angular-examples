import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-template-interaction',
    templateUrl: './template-interaction.component.html',
    styleUrls: ['./template-interaction.component.scss'],
    standalone: false
})
export class TemplateInteractionComponent implements OnInit {

    list = [
        {name: 1, isChecked: true, click: () => this.eventMethod('s')},
        {name: 2, isChecked: false, click: () => this.eventMethod('s')},
        {name: 3, isChecked: false, click: () => this.eventMethod('s')}
    ]

    constructor() {
    }

    ngOnInit(): void {
    }

    getMethod(bool: boolean) {
        return bool
    }

    get eventClick() {
        return () => this.eventMethod('s')
    }

    eventMethod(event: any) {
        console.debug('eventMethod', event)
    }

}
