import { contentChild, Directive, effect, ElementRef, inject, input, Renderer2 } from "@angular/core"
import { CounterService } from "./counter.service"

@Directive()
export class HostBaseDirective {

    appHostNot = input<string>('')
    appHostIncl = input<string>('')

    private renderer = inject(Renderer2)
    private elementRef = inject<ElementRef<any>>(ElementRef)
    private contChild = contentChild<ElementRef>('log')

    constructor() {
        const normalCounter = inject(CounterService, {optional: true})
        const selfCounter = inject(CounterService, {self: true, optional: true})
        const skipSelfCounter = inject(CounterService, {skipSelf: true, optional: true})
        const hostCounter = inject(CounterService, {host: true, optional: true})
        effect(() => {
            this.addLog(`Directive, CounterService ${this.appHostNot() || this.appHostIncl()} declared and injected Normal ${normalCounter?.getInstanceId()} ${normalCounter?.getLocation()}`)
            this.addLog(`Directive, CounterService ${this.appHostNot() || this.appHostIncl()} declared and injected Self ${selfCounter?.getInstanceId()} ${selfCounter?.getLocation()}`)
            this.addLog(`Directive, CounterService ${this.appHostNot() || this.appHostIncl()} declared and injected SkipSelf ${skipSelfCounter?.getInstanceId()} ${skipSelfCounter?.getLocation()}`)
            this.addLog(`Directive, CounterService ${this.appHostNot() || this.appHostIncl()} declared and injected Host ${hostCounter?.getInstanceId()} ${hostCounter?.getLocation()}`)
        })
    }

    private addLog(msg: string) {
        let cont = 'ContentChild'
        let logCont = this.contChild()?.nativeElement
        if (!logCont) {
            cont = 'ElementRef'
            logCont = this.elementRef.nativeElement
        }
        const paragraph = this.renderer.createElement('p')
        const textNode = this.renderer.createText(`${cont} ${msg}`)
        this.renderer.appendChild(paragraph, textNode)
        this.renderer.appendChild(logCont, paragraph)
    }

}
