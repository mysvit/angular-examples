import { Injectable, signal } from '@angular/core'

@Injectable({providedIn: 'root'})
export class AppConfigService {

    private useApiLogger = signal(false)
    shouldUseApiLogger = this.useApiLogger.asReadonly()

    setLoggerType(useApi: boolean) {
        this.useApiLogger.set(useApi)
    }

}
