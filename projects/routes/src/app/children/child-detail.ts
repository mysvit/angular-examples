import { Component, inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AsyncPipe, JsonPipe } from '@angular/common'

@Component({
    selector: 'child-detail',
    imports: [
        JsonPipe,
        AsyncPipe
    ],
    template: `
        <h1>Child detail</h1>
        @let params = this.activatedRoute.params | async | json;
        @if (params !== '{}') {
            {{ params }}
        }
        @let query = this.activatedRoute.queryParams | async | json;
        @if (query !== '{}') {
            {{ query }}
        }
    `
})
export class ChildDetailComponent {
    activatedRoute = inject(ActivatedRoute)
}