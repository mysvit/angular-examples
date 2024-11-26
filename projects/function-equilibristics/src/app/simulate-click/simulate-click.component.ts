import { Component, HostListener, OnInit } from '@angular/core'

@Component({
    selector: 'app-simulate-click',
    templateUrl: './simulate-click.component.html',
    styleUrls: ['./simulate-click.component.scss'],
    standalone: false
})
export class SimulateClickComponent implements OnInit {

    @HostListener('dblclick')
    dblclick() {
        console.log('dblclick')
    }

    @HostListener('click')
    click() {
        console.log('click')
    }

    constructor() {
    }

    ngOnInit(): void {
    }

    simulate() {
        const singl = new MouseEvent('click')
        const dbl = new MouseEvent('dblclick', {
            view: window,
            bubbles: true,
            cancelable: true
        })
        // const btn = document.getElementById('signID')
        const frm = document.getElementById('formID')
        console.log('signID', frm)
        if (frm) frm.dispatchEvent(dbl)
    }

}
