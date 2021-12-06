import {Component, OnDestroy} from '@angular/core';
import {map} from 'rxjs'
import {Action, AppService} from './app.service'
import {Example} from './app.model'
import {HttpLogService} from './http/http-log.service'
import {MessageType} from './http/http.model'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

    MessageType = MessageType
    list: Array<Example> = new Array<Example>()
    selectedItem: Example = <Example>{id: 0, name: 'SomeName'}
    oneItem?: Example
    resultList: Array<string> = []

    constructor(public appService: AppService, public httpLogService: HttpLogService) {
    }

    ngOnDestroy() {
    }

    getListClick() {
        this.httpLogService.add('_')
        return this.appService.getList()
            .subscribe(data => {
                this.list = data
                this.httpLogService.add('Result: '.concat(JSON.stringify(data)))
            })
    }

    selectItemClick(item: Example) {
        this.selectedItem = item
    }

    getItemByParamClick(item: Example) {
        this.httpLogService.add('_')
        return this.appService.getItemByParam(item.id)
            .subscribe(data => this.httpLogService.add('Result: '.concat(JSON.stringify(data))))
    }

    getItemByRouteClick(item: Example) {
        this.httpLogService.add('_')
        return this.appService.getItemByRoute(item.id)
            .subscribe(data => this.httpLogService.add('Result: '.concat(JSON.stringify(data))))
    }

    getItemByRouteHandlersClick(item: Example) {
        this.httpLogService.add('_')
        this.appService.getItemByRouteHandlers(item.name)
            .subscribe(data => this.httpLogService.add('Result: '.concat(JSON.stringify(data))))
    }

    postItemClick(item: Example) {
        this.httpLogService.add('_')
        this.appService.postItem(item)
            .subscribe(data => this.httpLogService.add('Result: '.concat(JSON.stringify(data))))
    }

    postErrorClick() {
        this.httpLogService.add('_')
        this.appService.postErrorExample()
            .subscribe(data => this.httpLogService.add('subscribe return default data: '.concat(JSON.stringify(data))))
    }

    putItemClick(item: Example) {
        this.httpLogService.add('_')
        this.appService.putItem(Action.text, item)
            .pipe(
                map(data => this.oneItem = data)
            )
            .subscribe()
    }

    deleteItemClick(item: Example) {
        this.httpLogService.add('_')
        this.appService.deleteItem(item.id.toString())
            .pipe(
                map(data => this.oneItem = data)
            ).subscribe()
    }

}
