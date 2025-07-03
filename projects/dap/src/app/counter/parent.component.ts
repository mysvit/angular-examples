import { Component, inject, Renderer2, viewChildren } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CounterService } from './counter.service'
import { ServiceLocation } from '../service-location'
import { LabelComponent } from './label.component'
import { DynamicContentDirective } from './dynamic.directive'
import { CounterChildInclComponent } from './child-incl.component'
import { HostInclDirective } from './host-incl.directive'
import { CounterChildNotComponent } from './child-not.component'
import { FormsModule } from '@angular/forms'
import { HostNotDirective } from './host-not.directive'

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
    imports: [CommonModule, LabelComponent, DynamicContentDirective, FormsModule],
    template: `
        <div class="parent-box">
            <h2>(Parent) CounterService declared in providers</h2>
            <button (click)="normalCounter.increment()">Increment Counter</button>
            <button (click)="handleNewComponentClick()">New Component</button>

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

                <!--                <app-counter-child-incl label="(Child) CounterService declared in providers <br> + Directive with declared service (Host)"-->
                <!--                                        appHostIncl>-->
                <!--                </app-counter-child-incl>-->

                <!--                <app-counter-child-incl label="(Child) Service declared"></app-counter-child-incl>-->
                <!--                <app-counter-child-not label="(Child) Service NOT declared"></app-counter-child-not>-->


                <!--                <app-counter-child-incl label="(Child) Service declared">-->
                <!--                    <app-counter-child-incl-proj label="(Projection) Service declared">-->
                <!--                    </app-counter-child-incl-proj>-->
                <!--                </app-counter-child-incl>-->

                <!--                <app-counter-child-incl-view label="(Child) Service declared in VIEW_PROVIDERS">-->
                <!--                    <app-counter-child-incl-proj label="(Projection) Service declared">-->
                <!--                    </app-counter-child-incl-proj>-->
                <!--                </app-counter-child-incl-view>-->


                <!--                <app-counter-child-incl label="(Child) CounterService declared in providers <br> + Directive with declared service (Host)"-->
                <!--                                        appHostIncl>-->
                <!--                    <div #log></div>-->
                <!--                </app-counter-child-incl>-->
                <!--                <app-counter-child-incl label="(Child) CounterService NOT declared in providers <br> + Directive with declared service (Host)">-->
                <!--                    <div appHostIncl></div>-->
                <!--                </app-counter-child-incl>-->

                <!--                <app-counter-child-incl-view label="(Child) CounterService declared in providers <br> + Directive with declared service (Host)"-->
                <!--                                        appHostIncl>-->
                <!--                    <div #log></div>-->
                <!--                </app-counter-child-incl-view>-->
                <!--                <app-counter-child-incl-view label="(Child) CounterService NOT declared in providers <br> + Directive with declared service (Host)">-->
                <!--                    <div appHostIncl></div>-->
                <!--                </app-counter-child-incl-view>-->

                <!--                <app-counter-child-incl label="(Child) CounterService declared in providers <br> + Directive with NOT declared service (Host)"-->
                <!--                                        appHostNot="NOT">-->
                <!--                    <div #log></div>-->
                <!--                </app-counter-child-incl>-->
                <!--                <app-counter-child-incl-view label="(Child) CounterService NOT declared in providers <br> + Directive with declared service (Host)">-->
                <!--                    <div appHostNot="NOT"></div>-->
                <!--                </app-counter-child-incl-view>-->

                <!--                <app-counter-child-not label="(Child) CounterService NOT declared in providers <br> + Directive with NOT declared service (Host)">-->
                <!--                    <div appHostNot="NOT"></div>-->
                <!--                </app-counter-child-not>-->
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

    selectedChild: Services = Services.NoService
    selectedDirective: Services = Services.Empty

    handleNewComponentClick() {
        const childContent = this.dynamicContent()
            .find(ref => ref.appDynamicContent() === DynamicContent.Child)
        const projectedContent = this.dynamicContent()
            .find(ref => ref.appDynamicContent() === DynamicContent.Projected)

        const child = this.selectedChild === Services.NoService
            ? CounterChildNotComponent : CounterChildInclComponent
        const directive = this.selectedDirective === Services.Empty
            ? [] : this.selectedDirective === Services.NoService
                ? [HostNotDirective] : [HostInclDirective]
        const childComponent = childContent?.viewContainerRef.createComponent(child,
            {directives: directive})
        childComponent?.setInput('label', this.childLabel())

        // const projectedContent = this.dynamicContent()
        //     .find(ref => ref.appDynamicContent() === DynamicContent.Projected)
        // const projComp = projectedContent?.viewContainerRef.createComponent(CounterChildInclProjComponent)
        //
        // const childContent = this.dynamicContent()
        //     .find(ref => ref.appDynamicContent() === DynamicContent.Child)
        // childContent?.viewContainerRef.createComponent(CounterChildInclComponent, {projectableNodes: [[projComp?.location.nativeElement]]})
    }

    childLabel() {
        const childN = this.selectedChild === Services.NoService ? 'NOT' : ''
        const directiveN = this.selectedDirective === Services.NoService ? 'NOT' : ''
        const childText = `(Child) Component Service ${childN} declared`
        const directiveText = this.selectedDirective !== Services.Empty
            ? `<br> (Host) Directive Service ${directiveN} declared`
            : ''
        return childText + directiveText
    }

}

