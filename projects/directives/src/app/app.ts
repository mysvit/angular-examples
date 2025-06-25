import { Component } from '@angular/core'
import { NgClass } from '@angular/common'
import { ShowDirective } from './directives/show.directive'
import { ClassDirective } from './directives/class.directive'
import { HighlightHostDirective } from './directives/highlight.directive'
import { HighlightRefDirective } from './directives/highlight-ref.directive'

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    imports: [
        NgClass,
        ShowDirective,
        ClassDirective,
        HighlightHostDirective,
        HighlightRefDirective
    ],
    styleUrls: ['./app.scss']
})
export class App {

    condition = false

}
