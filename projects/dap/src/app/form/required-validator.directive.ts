import { Directive, InjectionToken } from '@angular/core'
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms'

export const REQUIRED_VALIDATOR_TOKEN = new InjectionToken<RequiredValidatorDirective>('REQUIRED_VALIDATOR_TOKEN')

@Directive({
    selector: '[appRequiredValidator]', // Applied to an element
    standalone: true,
    // Provide the directive itself using NG_VALIDATORS for forms,
    // and also provide our custom token to make it discoverable by @Host()
    providers: [
        {provide: NG_VALIDATORS, useExisting: RequiredValidatorDirective, multi: true},
        {provide: REQUIRED_VALIDATOR_TOKEN, useExisting: RequiredValidatorDirective} // KEY: Provide our custom token
    ]
})
export class RequiredValidatorDirective implements Validator {

    constructor() {
        console.log(`[RequiredValidatorDirective] Instance created on host.`)
    }

    // A simple validation logic
    validate(control: AbstractControl): ValidationErrors | null {
        const isValid = control.value != null && String(control.value).trim() !== ''
        return isValid ? null : {'appRequired': true}
    }

}
