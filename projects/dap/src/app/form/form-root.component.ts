import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field.component';
import { RequiredValidatorDirective } from './required-validator.directive';
import { FormsModule } from '@angular/forms'; // Needed for ngModel

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, FormFieldComponent, RequiredValidatorDirective, FormsModule],
    template: `
        <h1>Host() vs. Self() Exclusive Use Case</h1>
        <p>Observe the console and the component status to see which injection strategy succeeds.</p>

        <div class="field-container">
            <app-form-field label="Required Field 1" appRequiredValidator></app-form-field>

            <app-form-field label="Required Field 2" appRequiredValidator></app-form-field>

            <app-form-field label="Optional Field"></app-form-field>
        </div>
    `,
    styles: [`
        .field-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            padding: 20px;
        }
    `]
})
export class FormRootComponent {}
