import {Component} from '@angular/core';
import {CustomPipe, PipeType} from "./pipes/custom.pipe";
import {CustomAsyncPipe} from "./pipes/custom-async.pipe";
import {AsyncPipe} from "@angular/common";
import {customAsyncPipeNotPurePipe} from "./pipes/custom-async-not-pure.pipe";
import {customExtendPipe} from "./pipes/custom-extend.pipe";

@Component({
    selector: 'app-root',
    imports: [
        CustomPipe,
        CustomAsyncPipe,
        AsyncPipe,
        customAsyncPipeNotPurePipe,
        customExtendPipe
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

    PipeType = PipeType

    valueU = 'to-upper-case'
    valueL = 'TO-LOWER-CASE'
    valueN = 10

}
