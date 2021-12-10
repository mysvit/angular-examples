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
        console.log(aVeryBigSum([1, 2, 3, 5555555]))
        console.log(diagonalDifference([[1, 2, 15], [4, 5, 6], [7, 8, 9]]))
        console.log(miniMaxSum([1, 2, 3, 4, 5]))
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

// @ts-ignore
function aVeryBigSum(ar) {
    // @ts-ignore
    return ar.reduce((a, b) => {
        return a + b;
    }, 0)
}

// @ts-ignore
function diagonalDifference(arr) {
    let jl = 0
    let jr = arr[0].length - 1
    let l = 0
    let r = 0
    for (let i = 0; i < arr.length; i++) {
        l += arr[i][jl]
        r += arr[i][jr]
        jl++
        jr--
    }
    return Math.abs(l - r)
}

// @ts-ignore
function miniMaxSum(arr) {
    const res = []
    // @ts-ignore
    arr.sort((a, b) => {
        return a - b
    })
    // min
    // @ts-ignore
    res.push(arr.slice(0, 4).reduce((a, b) => {
        return a + b
    }, 0))
    // max
    // @ts-ignore
    res.push(arr.slice(-4).reduce((a, b) => {
        return a + b
    }, 0))
    return res
}
