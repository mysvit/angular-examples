import { AfterContentInit, afterNextRender, ComponentRef, contentChild, Directive, inject, input, viewChild, ViewContainerRef } from "@angular/core"
import { CounterService } from "./counter.service"
import { LabelComponent } from './label.component'
import { DynamicContentDirective } from './dynamic.directive'
import { DynamicService } from './dynamic.service'
import { GroupComponent } from './group.component'

@Directive()
export class HostBaseDirective implements AfterContentInit {

    appHostNot = input<string>('')
    appHostIncl = input<string>('')

    readonly normalCounter = inject(CounterService, {optional: true})
    readonly selfCounter = inject(CounterService, {self: true, optional: true})
    readonly skipSelfCounter = inject(CounterService, {skipSelf: true, optional: true})
    readonly hostCounter = inject(CounterService, {host: true, optional: true})

    readonly hostContainerRef = inject(ViewContainerRef)
    readonly projectedContent = contentChild(DynamicContentDirective)
    readonly childContent = viewChild(DynamicContentDirective)
    readonly dynamicService = inject(DynamicService, {self: true})

    get isDirectiveHost(): boolean {
        return !!this.dynamicService.viewContainerRef
    }

    get containerRef() {
        return this.dynamicService.viewContainerRef
    }

    ngAfterContentInit() {
        console.log(`HostBaseDirective containerRef:`, this.containerRef)
        console.log(`hostContainerRef`, this.projectedContent()?.viewContainerRef)
        console.log('childContent', this.childContent()?.viewContainerRef)

        const grp = this.containerRef?.createComponent(GroupComponent)
        this.appendLog(grp, this.addLog(`Directive Group Log `))

        this.appendLog(grp, this.addLog('Directive applied to (Child) component'))
        this.appendLog(grp, this.addLog(`If Service declared it override (child) providers`))
        this.appendLog(grp, this.addLog('Normal', this.normalCounter?.getInstanceId(), this.normalCounter?.getLocation(), this.normalCounter?.getCount(),
            this.normalCounter ? '' : 'NULL'))
        this.appendLog(grp, this.addLog('Self', this.selfCounter?.getInstanceId(), this.selfCounter?.getLocation(), this.selfCounter?.getCount(),
            this.selfCounter ? '' : 'NULL'))
        this.appendLog(grp, this.addLog('SkipSelf', this.skipSelfCounter?.getInstanceId(), this.skipSelfCounter?.getLocation(), this.skipSelfCounter?.getCount(),
            this.skipSelfCounter ? '' : 'NULL'))
        this.appendLog(grp, this.addLog('Host', this.hostCounter?.getInstanceId(), this.hostCounter?.getLocation(), this.hostCounter?.getCount(),
            this.hostCounter ? '' : 'NULL'))
    }


    private addLog(msg: string, instanceId?: string, location?: string, count?: any, err?: string) {
        const label = this.containerRef?.createComponent(LabelComponent)
        label?.setInput('msg', msg)
        label?.setInput('instanceId', instanceId)
        label?.setInput('location', location)
        label?.setInput('count', this.normalCounter?.getCount())
        label?.setInput('errorLabel', err)
        return label
    }

    private appendLog(grp?: ComponentRef<GroupComponent>, label?: ComponentRef<LabelComponent>) {
        grp?.location.nativeElement.appendChild(label?.location.nativeElement)
    }

}
