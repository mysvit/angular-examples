import {Component} from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent {

    testClick() {
        console.log(solveMeFirst(1, 5))
        console.log(compareTriplets([1, 2, 3], [2, 2, 5]))
    }

}

// @ts-ignore
function solveMeFirst(a, b) {
    return ((a >= 1 && a <= 1000) ? a : 0) + ((b >= 1 && b <= 1000) ? b : 0)
}

// @ts-ignore
function compareTriplets(a, b) {
    let res = [0, 0]
    for (let i = 0; i < 3; i++) {
        res[0] += a[i] > b[i] ? 1 : 0
        res[1] += a[i] < b[i] ? 1 : 0
    }
    return res
}
