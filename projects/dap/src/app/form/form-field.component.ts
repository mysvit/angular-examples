import { Component, inject, Input, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms' // For internal form binding
import { REQUIRED_VALIDATOR_TOKEN } from './required-validator.directive' // Import the token

@Component({
    selector: 'app-form-field',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    template: `
        <div class="form-field-wrapper">
            <label [for]="id">{{ label }}</label>
            <input [id]="id" type="text" [(ngModel)]="value" [placeholder]="label"/>

            <div class="status-box">
                <p><strong>Field: {{ label }}</strong></p>
                <p>Value: "{{ value }}"</p>

                @if (hostValidator) {
                    <p class="success">✅ Host Validator Found (via Host)</p>
                } @else {
                    <p class="warning">❌ Host Validator NOT Found (via Host)</p>
                }

                @if (selfValidator) {
                    <p class="success">✅ Self Validator Found (via Self)</p>
                } @else {
                    <p class="warning">❌ Self Validator NOT Found (via Self)</p>
                }

                <p class="note">
                    Note: NgModel/FormControlName will still validate even if the validator isn't explicitly injected
                    here,
                    as they use NG_VALIDATORS token. This example demonstrates injecting our custom
                    REQUIRED_VALIDATOR_TOKEN.
                </p>
            </div>
        </div>
    `,
    styles: [`
        .form-field-wrapper {
            border: 1px solid #007bff;
            padding: 15px;
            margin: 10px;
            border-radius: 8px;
            width: 300px;
            background-color: #e6f7ff;
        }

        input {
            width: calc(100% - 20px);
            padding: 8px;
            margin-bottom: 10px;
            border: 1px solid #007bff;
            border-radius: 4px;
        }

        .status-box {
            background-color: #f0f8ff;
            border: 1px dashed #aed9ff;
            padding: 10px;
            margin-top: 10px;
            font-size: 0.9em;
        }

        .success {
            color: green;
            font-weight: bold;
        }

        .warning {
            color: red;
            font-weight: bold;
        }

        .note {
            font-size: 0.8em;
            color: #555;
        }
    `]
})
export class FormFieldComponent implements OnInit {

    @Input() label: string = 'Field'
    id: string = 'field-' + Math.random().toString(36).substring(2, 9)
    value: string = ''

    // *** THE CRITICAL INJECTION POINTS ***
    // This will find the `REQUIRED_VALIDATOR_TOKEN` IF `RequiredValidatorDirective`
    // is applied to `<app-form-field>` (the host element). It will NOT look up.
    hostValidator = inject(REQUIRED_VALIDATOR_TOKEN, {host: true, optional: true})

    // This will ONLY find the `REQUIRED_VALIDATOR_TOKEN` IF `FormFieldComponent`
    // itself provides it in its `providers` array (which it doesn't).
    // It will NOT look at directives on the host, nor up the tree.
    selfValidator = inject(REQUIRED_VALIDATOR_TOKEN, {self: true, optional: true})

    constructor() {
        console.log(`[FormFieldComponent - ${this.label}] Initialized.`)
        if (this.hostValidator) {
            console.log(`[FormFieldComponent - ${this.label}] @Host() found validator!`)
        } else {
            console.log(`[FormFieldComponent - ${this.label}] @Host() did NOT find validator.`)
        }
        if (this.selfValidator) {
            console.log(`[FormFieldComponent - ${this.label}] @Self() found validator!`)
        } else {
            console.log(`[FormFieldComponent - ${this.label}] @Self() did NOT find validator.`)
        }
    }

    ngOnInit(): void {
        // this.selfValidator?.validate(this.value)
    }

}
