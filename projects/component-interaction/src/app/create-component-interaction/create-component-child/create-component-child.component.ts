import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
    selector: 'app-create-component-child',
    templateUrl: './create-component-child.component.html',
    styleUrls: ['./create-component-child.component.scss'],
    standalone: false
})
export class CreateComponentChildComponent implements OnInit {

    @Input() label?: string
    @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>()

    constructor() {
        console.log('constructor label not showed', this.label)
    }

    ngOnInit(): void {
        console.log('ngOnInit label showed', this.label)
    }

    handleCloseClick() {
        this.close.emit(true)
    }

}
