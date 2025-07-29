import { Component, inject, Input, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ControlValueAccessor, FormControl, NgControl, ReactiveFormsModule } from '@angular/forms'

@Component({
    selector: 'my-input',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    template: `
        <div class="custom-input-wrapper">
            <label [for]="'input-' + id">{{ label }}</label>
            <input
                [id]="'input-' + id"
                type="text"
                [value]="value"
                (input)="onInput($event)"
                (blur)="onTouched()"
                [disabled]="isDisabled"
            />
            <div class="status-info">
                @if (ngControl) {
                    <p>NgControl found (via Host/host:true)</p>
                    <p>Status: {{ ngControl.status }}</p>
                    <p>Value: {{ ngControl.value }}</p>
                } @else {
                    <p class="warning">No NgControl found on host. (Using internal control)</p>
                    <p>Internal Value: {{ internalControl.value }}</p>
                }
            </div>
        </div>
    `,
    styles: [`
        .custom-input-wrapper {
            border: 1px solid #ccc;
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 8px;
            background-color: #e0f7fa; /* Light cyan */
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #333;
        }

        input {
            width: 100%;
            padding: 8px;
            border: 1px solid #00acc1;
            border-radius: 4px;
            box-sizing: border-box;
        }

        .status-info {
            font-size: 0.9em;
            color: #666;
            margin-top: 10px;
        }

        .warning {
            color: red;
            font-weight: bold;
        }
    `]
})
export class MyInputComponent implements ControlValueAccessor, OnInit {

    @Input() label: string = 'Custom Input'
    id: string = Math.random().toString(36).substring(2, 9) // Unique ID

    value: any = ''
    isDisabled: boolean = false
    onChange: any = () => {
    }
    onTouched: any = () => {
    }

    // Internal control for when NgControl is not found (e.g., if used without ngModel/formControl)
    internalControl = new FormControl('')

    // **THIS IS THE KEY:**
    // We use @Host() AND @Optional() for constructor injection.
    // OR, if using inject() function directly:
    ngControl = inject(NgControl, {host: true, optional: true})

    constructor() {
        console.log('ngControl', this.ngControl)
        if (this.ngControl) {
            // If NgControl is found on the host, register this component as its ControlValueAccessor
            this.ngControl.valueAccessor = this
            console.log(`[MyInputComponent - ${this.label}] NgControl found on host.`)
        } else {
            console.warn(`[MyInputComponent - ${this.label}] No NgControl found on host. Operating standalone.`)
        }
    }

    ngOnInit(): void {
        if (!this.ngControl) {
            // If no NgControl, use the internal FormControl
            this.internalControl.valueChanges.subscribe(val => {
                this.value = val
            })
        }
    }

    // ControlValueAccessor methods
    writeValue(obj: any): void {
        this.value = obj
        if (!this.ngControl) {
            this.internalControl.setValue(obj, {emitEvent: false})
        }
    }

    registerOnChange(fn: any): void {
        this.onChange = fn
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn
    }

    setDisabledState?(isDisabled: boolean): void {
        this.isDisabled = isDisabled
        if (!this.ngControl) {
            isDisabled ? this.internalControl.disable() : this.internalControl.enable()
        }
    }

    onInput(event: Event): void {
        const newValue = (event.target as HTMLInputElement).value
        this.value = newValue
        this.onChange(newValue) // Notify NgControl or internal control
        if (!this.ngControl) {
            this.internalControl.setValue(newValue)
        }
    }
}
