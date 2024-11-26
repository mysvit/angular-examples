import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-tag-div',
    templateUrl: './tag-div.component.html',
    styleUrls: ['./tag-div.component.scss'],
    standalone: false
})
export class TagDivComponent implements OnInit {

    click = 0

    constructor() {
    }

    ngOnInit(): void {
    }

    clickCommand() {
        this.click++;
    }
}
