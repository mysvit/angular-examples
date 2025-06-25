import { Inject, Injectable, InjectionToken } from '@angular/core'
import { ServiceLocation } from '../service-location'

export const SERVICE_LOCATION = new InjectionToken<string>('')

export const COUNTER_CHILD_FACTORY = () => {
    return new CounterService(ServiceLocation.child)
}
export const COUNTER_CHILD = new InjectionToken<CounterService>('CounterChild', {
    providedIn: 'root',
    factory: () => {
        return new CounterService(ServiceLocation.child)
    }
})


// No providedIn: 'root' here, so we control where it's provided
@Injectable()
export class CounterService {

    private readonly instanceId: string
    private count: number = 0

    constructor(@Inject(SERVICE_LOCATION) private serviceLocation: string) {
        this.instanceId = Math.random().toString(36).substring(2, 9)
        console.log(`CounterService created (ID: ${this.instanceId}), location: ${serviceLocation}`)
    }

    increment(): number {
        return ++this.count
    }

    getCount(): number {
        return this.count
    }

    getInstanceId(): string {
        return this.instanceId
    }

    getLocation(): string {
        return this.serviceLocation
    }

}
