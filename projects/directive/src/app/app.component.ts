import {Component} from '@angular/core';
import {LoadingState} from './directives/if-loaded.directive'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    state: LoadingState = {type: 'loading'};
    color: string = 'yellow'
    condition = false;

}
