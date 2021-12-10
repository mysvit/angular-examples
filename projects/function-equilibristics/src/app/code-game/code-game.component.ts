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


}
