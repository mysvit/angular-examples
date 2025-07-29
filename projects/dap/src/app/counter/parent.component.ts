import {Component, inject, Renderer2, viewChildren} from '@angular/core'
import {CommonModule} from '@angular/common'
import {CounterService} from './counter.service'
import {ServiceLocation} from '../service-location'
import {LabelComponent} from './label.component'
import {DynamicContentDirective} from './dynamic.directive'
import {CounterChildInclComponent} from './child-incl.component'
import {HostInclDirective} from './host-incl.directive'
import {CounterChildNotComponent} from './child-not.component'
import {FormsModule} from '@angular/forms'
import {HostNotDirective} from './host-not.directive'
import {CounterChildInclProjComponent} from './child-incl-proj.component'

enum DynamicContent {
    Child = 'Child',
    Projected = 'Projected',
}

enum Services {
    Empty = '',
    NoService = 'NoService',
    WithService = 'WithService'
}

@Component({
    selector: 'app-counter-parent',
    imports: [CommonModule, LabelComponent, DynamicContentDirective, FormsModule, CounterChildInclComponent, CounterChildNotComponent, CounterChildInclProjComponent],
    template: `
        <div class="parent-box">
            <h2>(Parent) CounterService declared in providers</h2>
            <button (click)="normalCounter.increment()">Increment Counter</button>
            <button (click)="handleNewComponentClick()">New Component</button>

            <div>
                <label for="child-select">Child Component:</label>
                <select id="child-select" [(ngModel)]="selectedChild" name="child">
                    <option value="{{Services.WithService}}">With Service</option>
                    <option value="{{Services.NoService}}">WithOut Service</option>
                </select>

                <label for="directive-select">Host Directive:</label>
                <select id="directive-select" [(ngModel)]="selectedDirective" name="directive">
                    <option value="{{Services.Empty}}"></option>
                    <option value="{{Services.WithService}}">With Service</option>
                    <option value="{{Services.NoService}}">WithOut Service</option>
                </select>

                <label for="projection-select">Projection Component:</label>
                <select id="projection-select" [(ngModel)]="selectedProjection" name="projection">
                    <option value="{{Services.Empty}}"></option>
                    <option value="{{Services.WithService}}">With Service</option>
                    <option value="{{Services.NoService}}">WithOut Service</option>
                </select>
            </div>

            <hr>

            <p><b>Normal injection</b></p>
            <app-label [instanceId]="normalCounter.getInstanceId()"
                       [location]="normalCounter.getLocation()"
                       [count]="normalCounter.getCount()">
            </app-label>
            <hr>

            <div class="child">
                <ng-container appDynamicContent="{{DynamicContent.Child}}"></ng-container>
                <ng-container appDynamicContent="{{DynamicContent.Projected}}"></ng-container>

                <app-counter-child-incl label="(Child) Service declared">
                    <app-counter-child-incl-proj label="(Projection) Service declared">
                    </app-counter-child-incl-proj>
                </app-counter-child-incl>

                <app-counter-child-incl label="(Child) Service declared">
                    <app-counter-child-not label="(Projection) Service NOT declared">
                    </app-counter-child-not>
                </app-counter-child-incl>

                <app-counter-child-not label="(Child) Service declared">
                    <app-counter-child-incl-proj label="(Projection) Service NOT declared">
                    </app-counter-child-incl-proj>
                </app-counter-child-not>

            </div>
        </div>
    `,
    styleUrl: './parent.component.scss',
    providers: [
        // two-way to declare
        // {provide: LOCATION, useValue: 'parent'}, CounterService
        {provide: CounterService, useFactory: () => new CounterService(ServiceLocation.parent)}
    ]
})
export class CounterParentComponent {

    Services = Services

    readonly DynamicContent = DynamicContent
    readonly normalCounter = inject(CounterService)
    readonly renderer = inject(Renderer2)
    readonly dynamicContent = viewChildren(DynamicContentDirective)

    selectedChild: Services = Services.WithService
    selectedDirective: Services = Services.Empty
    selectedProjection: Services = Services.Empty

    handleNewComponentClick() {
        const childContent = this.dynamicContent()
            .find(ref => ref.appDynamicContent() === DynamicContent.Child)
        const childComponent = childContent?.viewContainerRef
            .createComponent(this.getChildComponent(), this.getChildOption())
        childComponent?.setInput('label', this.getChildLabel())
        // childComponent?.instance.dynamicContent()?.viewContainerRef.createComponent(CounterChildInclComponent)
    }

    private getChildComponent() {
        return this.selectedChild === Services.WithService
            ? CounterChildInclComponent : CounterChildNotComponent
    }

    private getChildOption() {
        let option = {}
        // directive
        if (this.selectedDirective !== Services.Empty) {
            let directive: any[] = this.selectedDirective === Services.WithService
                ? [HostInclDirective] : [HostNotDirective]
            option = {...option, directives: directive}
        }
        // projection
        if (this.selectedProjection !== Services.Empty) {
            let projection = CounterChildNotComponent
            let label = '(Projection) Service Not declared'
            if (this.selectedProjection === Services.WithService) {
                projection = CounterChildInclProjComponent
                label = '(Projection) Service declared'
            }
            const projectedContent = this.dynamicContent()
                .find(ref => ref.appDynamicContent() === DynamicContent.Projected)
            const projectedComponent = projectedContent?.viewContainerRef
                .createComponent(projection)
            projectedComponent?.setInput('label', label)
            option = {...option, projectableNodes: [[projectedComponent?.location.nativeElement]]}
        }
        return option
    }

    private getChildLabel() {
        const childN = this.selectedChild === Services.NoService ? 'NOT' : ''
        const directiveN = this.selectedDirective === Services.NoService ? 'NOT' : ''
        const childText = `(Child) Component Service ${childN} declared`
        const directiveText = this.selectedDirective !== Services.Empty
            ? `<br> (Host) Directive Service ${directiveN} declared`
            : ''
        return childText + directiveText
    }

}
