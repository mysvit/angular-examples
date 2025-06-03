import {Directive, effect, input, TemplateRef, ViewContainerRef} from '@angular/core'

@Directive({
    selector: '[myShow]'
})
export class ShowDirective {

    private hasView = false

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) {
        effect(() => {
            if (this.myShow() && !this.hasView) {
                this.viewContainer.createEmbeddedView(this.templateRef)
                this.hasView = true
                return
            }
            if (!this.myShow() && this.hasView) {
                this.viewContainer.clear()
                this.hasView = false
                return
            }
        })
    }

    // input the same as directive name
    readonly myShow = input.required<boolean>()

}
