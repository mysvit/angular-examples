import { contentChild, Directive, effect, ElementRef, inject, input, Renderer2, ViewContainerRef } from "@angular/core"
import { CounterService } from "./counter.service"
import { CounterLabelComponent } from './counter-label.component'

@Directive()
export class HostBaseDirective {

    appHostNot = input<string>('')
    appHostIncl = input<string>('')

    private renderer = inject(Renderer2)
    private viewContainerRef = inject(ViewContainerRef)
    private elementRef = inject<ElementRef<any>>(ElementRef)
    private contChild = contentChild<ElementRef>('log')

    constructor() {
        const normalCounter = inject(CounterService, {optional: true})
        const selfCounter = inject(CounterService, {self: true, optional: true})
        const skipSelfCounter = inject(CounterService, {skipSelf: true, optional: true})
        const hostCounter = inject(CounterService, {host: true, optional: true})

        effect(() => {
            const dirGrp = this.creatContainer()
            this.addLog(dirGrp, `Directive GROUP LOG`)
            this.addLog(dirGrp, this.contChild()?.nativeElement
                ? 'Directive applied to (Child) used ContentChild'
                : 'Directive applied inside (Child) as child element used ElementRef')
            this.addLog(dirGrp, `CounterService ${this.appHostNot() || this.appHostIncl()} declared.`)
            this.addLog(dirGrp, 'Normal', normalCounter?.getInstanceId(), normalCounter?.getLocation(), normalCounter?.getCount(), normalCounter ? '' : 'NULL')
            this.addLog(dirGrp, 'Self', selfCounter?.getInstanceId(), selfCounter?.getLocation(), selfCounter?.getCount(), selfCounter ? '' : 'NULL')
            this.addLog(dirGrp, 'SkipSelf', skipSelfCounter?.getInstanceId(), skipSelfCounter?.getLocation(), skipSelfCounter?.getCount(), skipSelfCounter ? '' : 'NULL')
            this.addLog(dirGrp, 'Host', hostCounter?.getInstanceId(), hostCounter?.getLocation(), hostCounter?.getCount(), hostCounter ? '' : 'NULL')
        })
    }

    private creatContainer() {
        let logContent = this.contChild()?.nativeElement
        if (!logContent) {
            logContent = this.elementRef.nativeElement
        }
        const dirGrp = this.renderer.createElement('div')
        this.renderer.addClass(dirGrp, 'directive-grp')
        this.renderer.appendChild(logContent, dirGrp)
        return dirGrp
    }

    private addLog(container: any, msg: string, instanceId?: string, location?: string, count?: any, err?: string) {
        const paragraph = this.renderer.createElement('p')
        const textNode = this.renderer.createText(msg)
        this.renderer.appendChild(paragraph, textNode)
        this.renderer.appendChild(container, paragraph)

        if (instanceId || err) {
            const label = this.viewContainerRef.createComponent(CounterLabelComponent)
            label.setInput('instanceId', instanceId)
            label.setInput('location', location)
            label.setInput('count', count)
            label.setInput('errorLabel', err)
            this.renderer.appendChild(container, label.location.nativeElement)
        }
    }

}
