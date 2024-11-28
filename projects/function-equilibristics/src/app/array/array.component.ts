import {Component, OnInit} from '@angular/core'
import * as _ from 'lodash'
import moment from 'moment'

@Component({
    selector: 'app-array',
    templateUrl: './array.component.html',
    styleUrls: ['./array.component.scss'],
    standalone: false
})
export class ArrayComponent implements OnInit {

    SortType = SortType
    selectedSortType: SortType = SortType.sString
    SortDirection = SortDirection
    sortDirection: SortDirection = SortDirection.ASC

    listJS = [{
        str: 'B',
        num: 1,
        dat: '1/20/2022'
    }, {
        str: 'C',
        num: 2,
        dat: '1/31/2021'
    }, {
        str: 'A',
        num: 4,
        dat: '5/10/2021'
    }, {
        str: 'a',
        num: 3,
        dat: '2/19/2022'
    }, {
        str: 'D',
        num: 5,
        dat: '12/1/2021'
    }]

    listLodash = _.cloneDeep(this.listJS)

    constructor() {
    }

    ngOnInit(): void {
    }

    sortTypeChanged() {
        this.sortJS()
        this.sortLodash()
    }

    sortJS() {
        switch (this.selectedSortType) {
            // ********************************************************************************
            case SortType.sString:
                if (this.sortDirection === SortDirection.ASC) {
                    this.listJS.sort(function (a, b) {
                        const nameA = a.str
                        const nameB = b.str
                        if (nameA < nameB) {
                            return -1
                        }
                        if (nameA > nameB) {
                            return 1
                        }
                        return 0
                    })
                } else {
                    this.listJS.sort(function (a, b) {
                        const nameA = a.str
                        const nameB = b.str
                        if (nameA < nameB) {
                            return 1
                        }
                        if (nameA > nameB) {
                            return -1
                        }
                        return 0
                    })
                }
                break
            // ********************************************************************************
            case SortType.sNumber:
                if (this.sortDirection === SortDirection.ASC) {
                    this.listJS.sort(function (a, b) {
                        return a.num - b.num
                    })
                } else {
                    this.listJS.sort(function (a, b) {
                        return b.num - a.num
                    })
                }
                break
            // ********************************************************************************
            case SortType.sDate:
                if (this.sortDirection === SortDirection.ASC) {
                    this.listJS.sort(function (a, b) {
                        const aDate = Date.parse(a.dat)
                        const bDate = Date.parse(b.dat)
                        return aDate - bDate
                    })
                } else {
                    this.listJS.sort(function (a, b) {
                        const aDate = Date.parse(a.dat)
                        const bDate = Date.parse(b.dat)
                        return bDate - aDate
                    })
                }
                break
        }
    }

    sortLodash() {
        switch (this.selectedSortType) {
            case SortType.sString:
                this.listLodash = _.orderBy(this.listLodash, 'str', this.sortDirection)
                break
            case SortType.sNumber:
                this.listLodash = _.orderBy(this.listLodash, 'num', this.sortDirection)
                break
            case SortType.sDate:
                this.listLodash = _.orderBy(this.listLodash, (item) => {
                    return moment(item.dat, 'MM/DD/YYYY')
                }, this.sortDirection)
                break
        }
    }

    sumNumberJSValue: number = 0
    sumNumberLodashValue: number = 0

    sumNumber() {
        this.sumNumberJS()
        this.sumNumberLodash()
    }

    sumNumberJS() {
        this.sumNumberJSValue = this.listJS.reduce((a, b) => {
                return a + b.num;
            },
            // default value 0
            0)
    }

    sumNumberLodash() {
        this.sumNumberLodashValue = _.sumBy(this.listLodash, 'num')
    }

}


export interface Sort {
    str: string
    num: number
    dat: string
}

export enum SortType {
    sString = 'String',
    sNumber = 'Number',
    sDate = 'Date'
}

export enum SortDirection {
    ASC = 'asc',
    DESC = 'desc'
}
