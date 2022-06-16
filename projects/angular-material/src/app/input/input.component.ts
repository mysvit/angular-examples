import {Component, OnInit} from '@angular/core';
import {UntypedFormControl, Validators} from '@angular/forms'

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

    emailFormControl = new UntypedFormControl('', [Validators.required, Validators.email])
    wwwFormControl = new UntypedFormControl('', [Validators.pattern(/([w+3])([.])(\w+)([.])(\w+)/)])
    postalCode = new UntypedFormControl()
    phoneNumber = new UntypedFormControl()

    // matcher = new MyErrorStateMatcher()

    constructor() {
    }

    ngOnInit(): void {
    }

    formChanged() {
        console.log(this.wwwFormControl, this.postalCode)
    }

}

/** Error when invalid control is dirty, touched, or submitted. */
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//     isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//         const isSubmitted = form && form.submitted;
//         return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted))
//     }
// }
