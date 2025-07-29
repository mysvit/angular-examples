import { AfterContentInit, ChangeDetectorRef, Directive, inject, Injector, input, viewChild } from '@angular/core'
import { CounterService } from './counter.service'
import { DynamicContentDirective } from './dynamic.directive'
import { DynamicService } from './dynamic.service'

@Directive()
export class CounterChildBaseComponent implements AfterContentInit {

    label = input('')
    readonly dynamicContent = viewChild(DynamicContentDirective)
    readonly dynamicService: DynamicService = inject(DynamicService)
    readonly changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef)

    normalCounter?: CounterService | null
    selfCounter?: CounterService | null
    skipSelfCounter?: CounterService | null
    hostCounter?: CounterService | null
    optionalCounter?: CounterService | null
    normalError?: string
    selfError?: string
    skipSelfError?: string
    hostError?: string
    optionalError?: string

    constructor() {
        const LOCAL_INJECTOR = inject(Injector)
        // try {
        //     // Normal search in LOCAL providers, after PARENT, after ROOT up to PLATFORM<
        //     this.normalCounter = inject(CounterService)
        // } catch (e: any) {
        //     this.normalError = e.message
        // }
        //
        // try {
        //     // Self() just look at component's providers array
        //     this.selfCounter = inject(CounterService, {self: true})
        //     // this.selfCounter = inject(COUNTER_CHILD)
        //
        // } catch (e: any) {
        //     this.selfError = e.message
        // }
        //
        // try {
        //     // SkipSelf() skips local provides look at parent
        //     this.skipSelfCounter = inject(CounterService, {skipSelf: true})
        // } catch (e: any) {
        //     this.skipSelfError = e.message
        // }
        //
        // try {
        //     // Host() search in LOCAL providers, after PARENT and stop there if not found
        //     this.hostCounter = inject(CounterService, {host: true})
        // } catch (e: any) {
        //     this.hostError = e.message
        // }
        //
        // // Optional() skips error for all decorator which gives error and return NULL
        // this.optionalCounter = inject(CounterService, {host: true, optional: true})

        setTimeout(() => {
            // Normal search in LOCAL providers, after PARENT, after ROOT up to PLATFORM<
            this.normalCounter = LOCAL_INJECTOR.get(CounterService)
            this.normalError = this.normalCounter ? '' : 'null'
            // Self() just look at component's providers array
            this.selfCounter = LOCAL_INJECTOR.get(CounterService, null, {self: true})
            this.selfError = this.selfCounter ? '' : 'null'
            // SkipSelf() skips local provides look at parent
            this.skipSelfCounter = LOCAL_INJECTOR.get(CounterService, null, {skipSelf: true})
            this.skipSelfError = this.skipSelfCounter ? '' : 'null'
            // Host() search in LOCAL providers, after PARENT and stop there if not found
            this.hostCounter = LOCAL_INJECTOR.get(CounterService, null, {host: true})
            this.hostError = this.hostCounter ? '' : 'null'
            // Optional() skips error for all decorator which gives error and return NULL
            this.optionalCounter = LOCAL_INJECTOR.get(CounterService, null, {host: true, optional: true})
            this.optionalError = this.optionalCounter ? '' : 'null'
            this.changeDetectorRef.markForCheck()
        }, 2000)
    }

    ngAfterContentInit() {
        this.dynamicService.viewContainerRef = this.dynamicContent()?.viewContainerRef
    }

    incrementCounters(): void {
        this.normalCounter?.increment()
        this.selfCounter?.increment()
        this.skipSelfCounter?.increment()
        this.hostCounter?.increment()
        this.optionalCounter?.increment()
    }
}
