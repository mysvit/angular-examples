import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core'
import { CreateComponentChildComponent } from '../create-component-child/create-component-child.component'

@Component({
    selector: 'app-create-component-parent',
    templateUrl: './create-component-parent.component.html',
    styleUrls: ['./create-component-parent.component.scss']
})
export class CreateComponentParentComponent implements OnInit {

    @ViewChild('childHost', {read: ViewContainerRef, static: true}) childHostRef?: ViewContainerRef

    constructor() {
    }

    ngOnInit(): void {
    }

    handleAddComponentClick() {
        console.log(this.childHostRef)
        this.childHostRef?.clear()
        const ref = this.childHostRef?.createComponent<CreateComponentChildComponent>(CreateComponentChildComponent, {})
        if (ref) {
            ref.instance.label = '@Input LABEL'
            ref.instance.close.subscribe(event => {
                console.log(event)
                ref.destroy()
            })
        }
    }

}
