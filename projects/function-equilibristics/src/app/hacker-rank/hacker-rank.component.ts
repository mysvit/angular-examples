import {Component} from '@angular/core';

@Component({
    selector: 'app-hacker-rank',
    templateUrl: './hacker-rank.component.html',
    styleUrls: ['./hacker-rank.component.scss']
})
export class HackerRankComponent {

    aVeryBigSum() {
        console.log(aVeryBigSum([1, 2, 3, 5555555]))
    }

    diagonalDifference() {
        console.log(diagonalDifference([[1, 2, 15], [4, 5, 6], [7, 8, 9]]))
    }

    miniMaxSum() {
        console.log(miniMaxSum([1, 2, 3, 4, 5]))
    }

    iceCreamParlor() {
        console.log(icecreamParlor(9, [1, 3, 4, 6, 7, 9]))
    }

}

// @ts-ignore
// JS sum .sum(
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

// @ts-ignore
function icecreamParlor(m, arr) {
    let first = 0
    let second = 0
    for (first = 0; first < arr.length; first++) {
        // @ts-ignore
        second = arr.findIndex((f, i) => i > first && f === m - arr[first])
        if (second > 0) {
            break
        }
    }
    return [first + 1, second + 1]
}
