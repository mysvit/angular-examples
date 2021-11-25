import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    isDialogInteraction: boolean = false
    isIOInteraction: boolean = false
    isServiceInteraction: boolean = false
    isVCInteraction: boolean = true
}
