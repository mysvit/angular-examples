import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MyInputComponent } from './my-input.component'
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'

@Component({
    selector: 'input-root',
    imports: [CommonModule, MyInputComponent, FormsModule, ReactiveFormsModule],
    template: `
        <h1>Host() is Necessary Here!</h1>

        <div class="container">
            <form #tdForm="ngForm">
                <h3>Template-Driven Form (NgModel)</h3>
                <my-input label="Email (TD)" name="emailTd" [(ngModel)]="emailTd"></my-input>
                <p>TD Model: {{ emailTd }}</p>
            </form>

            <form [formGroup]="myForm">
                <h3>Reactive Form (FormControlName)</h3>
                <my-input label="Username (RF)" formControlName="usernameRf"></my-input>
                <p>RF Model: {{ myForm.get('usernameRf')?.value }}</p>
            </form>

            <h3>Standalone Input</h3>
            <my-input label="Address (Standalone)"></my-input>
            <p>This input will NOT find NgControl via Host.</p>
        </div>
    `,
    styles: [`
        .container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
        }

        form, .container > h3, .container > my-input {
            border: 1px solid #007bff;
            padding: 20px;
            border-radius: 8px;
            width: 45%;
            min-width: 300px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        form h3 {
            margin-top: 0;
            color: #007bff;
        }
    `]
})
export class InputRootComponent implements OnInit {

    emailTd: string = 'test@example.com'
    myForm: FormGroup

    constructor() {
        this.myForm = new FormGroup({
            usernameRf: new FormControl('initialUser')
        })
    }

    ngOnInit(): void {
        this.myForm.get('usernameRf')?.valueChanges.subscribe(val => {
            console.log('Reactive Form Username:', val)
        })
    }

}
