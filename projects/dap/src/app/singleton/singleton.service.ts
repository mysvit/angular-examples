import { Injectable, Optional, SkipSelf } from '@angular/core'

// provided in root
@Injectable({
    providedIn: 'root',
})
export class SingletonService {

    private instanceId = Math.random().toString(36).substring(2, 9)

    // restrict use in children's provider
    constructor(@Optional() @SkipSelf() selfService: SingletonService) {
        console.log(`Construct SingletonService ID: [${this.instanceId}] @Optional() @SkipSelf(): selfService:`, selfService)
        if (selfService) {
            throw new Error('SingletonService is singleton, restricted create another instance')
        }
    }

}
