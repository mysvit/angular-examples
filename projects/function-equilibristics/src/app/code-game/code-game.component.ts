import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-code-game',
    templateUrl: './code-game.component.html',
    styleUrls: ['./code-game.component.scss']
})
export class CodeGameComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    fibonacci() {
        const N: number = 7;
        const ch: string = 'F';
        let fi = 0
        let n2 = 1
        let nextTerm = 0;
        for (let i = 0; i < N; i++) {
            nextTerm = fi + n2;
            fi = n2;
            n2 = nextTerm;
            console.log(ch.repeat(fi))
        }
    }

    caesarCipher() {
        const ALPHABET: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ_';
        const MESSAGE: string = 'NQVTMO_S';
        const WORD: string = 'WHAT';

        // length of alphabet
        let L = ALPHABET.length
        // shift
        loop1:
            for (let A = 0; A <= L; A++) {
                // multiplier
                loop2:
                    for (let B = 0; B <= L; B++) {

                        // new alphabet
                        let SHIFT_ALPHABET = []
                        // new alphabet
                        for (let X = 0; X < L; X++) {
                            SHIFT_ALPHABET.push(ALPHABET[((X + A) * B) % L])
                        }
                        // console.error('shift:', A, ', multiplier:', B)
                        // console.error(ALPHABET_X.join(""))

                        // decrypt
                        let resultStr = [];
                        for (let i = 0; i < MESSAGE.length; i++) {
                            for (let j = 0; j < L; j++) {
                                if (MESSAGE[i] === ALPHABET[j]) {
                                    resultStr.push(SHIFT_ALPHABET[j]);
                                }
                            }
                        }
                        // if contain the word
                        if (resultStr.join("").indexOf(WORD) >= 0) {
                            console.error('shift:', A, ', multiplier:', B)
                            console.error(SHIFT_ALPHABET.join(""))
                            console.log(resultStr.join(""))
                            break loop1;
                        }

                    }
            }

    }

    shadowCasting() {
        const N: number = 7;
        const rl = [
            '#     #',
            ' #   #',
            '  # #',
            '   #',
            '  # #',
            ' #   #',
            '#     #',
        ]
        let arr: Array<string> = []
        let arrShadow: Array<string> = []

        // fill array
        for (let i = 0; i < N; i++) {
            arr.push(rl[i])
            arrShadow.push(' '.repeat(arr[i].length))
        }
        arrShadow.push('')
        arrShadow.push('')

        // drawing shadow in shadow's array
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[i][j].charCodeAt(0) > 32) {
                    arrShadow[i + 1] = insertShadow(arrShadow[i + 1], j + 1, '-')
                    arrShadow[i + 2] = insertShadow(arrShadow[i + 2], j + 2, '`')
                }
            }
        }

        // apply image on shadow
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[i][j].charCodeAt(0) > 32) {
                    arrShadow[i] = replaceAt(arrShadow[i], j, arr[i][j])
                }
            }
        }

        function insertShadow(str: string, shadowIndex: number, shadowChar: string) {
            if (shadowIndex >= str.length) {
                str = str.concat(' '.repeat(shadowIndex - str.length))
            }
            return str.substr(0, shadowIndex) + shadowChar + str.substr(shadowIndex + 1);
        }

        function replaceAt(str: string, index: number, replacement: string) {
            return str.substr(0, index) + replacement + str.substr(index + replacement.length);
        }

        // output
        for (let i = 0; i < N + 2; i++) {
            console.log(arrShadow[i].trimEnd())
        }

    }

    foldingANoteTest() {
        this.foldingANote([['OA', 'LM']], 'LMAO')
        this.foldingANote([['uDuu', 'u!eu', 'uudu', 'uuuu']], 'Duuuuuuuuuuuude!')
    }

    foldingANote(arr: string[][], expected: string) {

        let currLevel = 0

        while (arr[0].length > 1) {
            rightToLeftTo(true)
            console.info(arr)
            bottomToTop(true)
            console.info(arr)
            rightToLeftTo(false)
            console.info(arr)
            bottomToTop(false)
            console.info(arr)
        }
        console.log('expected:', expected, ', result:', arr.reverse().join(''))

        // right to left = true
        // left to right = false
        function rightToLeftTo(rl: boolean) {
            if (arr[0].length === 1) {
                return
            }
            for (let foldLevel = currLevel; foldLevel >= 0; foldLevel--) {
                currLevel++
                arr[currLevel] = []
                const s2 = arr[foldLevel][0].length / 2
                for (let i = 0; i < arr[foldLevel].length; i++) {
                    arr[currLevel].push(arr[foldLevel][i]
                        .split('').splice((rl ? -1 * s2 : 0), s2).reverse().join(''))
                    arr[foldLevel][i] = arr[foldLevel][i]
                        .split('').splice((rl ? 0 : s2), s2).join('')
                }
            }
        }

        // bottom to top = true
        // top to bottom = false
        function bottomToTop(bt: boolean) {
            if (arr[0].length === 1) {
                return
            }
            // top to bottom
            for (let foldLevel = currLevel; foldLevel >= 0; foldLevel--) {
                currLevel++
                arr[currLevel] = []
                let a2 = arr[foldLevel].length / 2
                if (bt) {
                    arr[currLevel] = arr[foldLevel].splice(-1 * a2).reverse()
                } else {
                    arr[currLevel] = arr[foldLevel].splice(0, a2).reverse()
                }
            }
        }

    }

    changeMoney() {
        console.log(100)
        console.log('2:',change(100)?.two, change(100)?.two == 0)
        console.log('5:',change(100)?.five, change(100)?.five == 0)
        console.log('10:',change(100)?.ten, change(100)?.ten == 10)
        console.log(43)
        console.log('2:',change(43)?.two, change(43)?.two == 4)
        console.log('5:',change(43)?.five, change(43)?.five == 1)
        console.log('10:',change(43)?.ten, change(43)?.ten == 3)
        console.log(11)
        console.log('2:',change(11)?.two, change(11)?.two == 3)
        console.log('5:',change(11)?.five, change(11)?.five == 1)
        console.log('10:',change(11)?.ten, change(11)?.ten == 0)
        console.log(15)
        console.log('2:', change(15)?.two, change(15)?.two == 0)
        console.log('5:', change(15)?.five, change(15)?.five == 1)
        console.log('10:', change(15)?.ten, change(15)?.ten == 1)

        function change(cash: number) {
            let two = 0;
            let five = 0;
            let ten = Math.floor(cash / 10);
            if (cash == 1) {
                return null
            }
            // ten
            if (cash % 10 == 0 || (cash % 10 > 0 && (cash % 10 % 5 === 0 || cash % 10 % 2 === 0))) {
                cash = cash - ten * 10
            } else {
                ten = ten - 1
                if ((cash % ten * 10) % 5 === 0 || (cash % ten * 10) % 2 === 0) {
                    cash = cash - ten * 10
                } else {
                    ten = 0
                }
            }
            // five
            if (cash !== 0) {
                five = Math.floor(cash / 5);
                if (cash % 5 == 0 || (cash % 5 > 0 && cash % 5 % 2 === 0)) {
                    cash = cash - five * 5
                    two = Math.floor(cash / 2)
                } else {
                    five = five - 1
                }
            }
            // two
            if (cash !== 0) {
                if ((cash - five * 5) % 2 === 0) {
                    cash = cash - five * 5
                } else {
                    five = 0
                }
                two = Math.floor(cash / 2)
            }
            return {
                two: two,
                five: five,
                ten: ten
            }
        }
    }


}


