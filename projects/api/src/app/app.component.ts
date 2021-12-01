import {Component} from '@angular/core';
import {map} from 'rxjs'
import {Action, AppService} from './app.service'
import {Example} from './app.model'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    list: Array<Example> = new Array<Example>()
    selectedItem?: Example
    oneItem?: Example

    constructor(public appService: AppService) {
    }

    getListClick() {
        this.getList().subscribe()
    }

    selectItemClick(item: Example) {
        this.selectedItem = item
    }

    getItemByParamClick(item: Example) {
        this.getItemByParam(item.id).subscribe()
    }

    getItemByRouteClick(item: Example) {
        this.getItemByRoute(item.id).subscribe()
    }

    getItemByRouteHandlersClick(item: Example) {
        this.getItemByRouteHandlers(item.name).subscribe()
    }

    postItemClick(item: Example) {
        this.postItem(item).subscribe()
    }

    putItemClick(item: Example) {
        this.putItem(item).subscribe()
    }

    deleteItemClick(item: Example) {
        this.deleteItem(item.id.toString()).subscribe()
    }


    private getList() {
        return this.appService.getList()
            .pipe(
                map(data => this.list = data)
            )
    }

    private getItemByParam(id: number) {
        return this.appService.getItemByParam(id)
            .pipe(
                map(data => this.oneItem = data)
            )
    }

    private getItemByRoute(id: number) {
        return this.appService.getItemByRoute(id)
            .pipe(
                map(data => this.oneItem = data)
            )
    }

    private getItemByRouteHandlers(name: string) {
        return this.appService.getItemByRouteHandlers(name)
            .pipe(
                map(data => this.oneItem = data)
            )
    }

    private postItem(item: Example) {
        return this.appService.postItem(item)
            .pipe(
                map(data => this.oneItem = data)
            )
    }

    private putItem(item: Example) {
        return this.appService.putItem(Action.text, item)
            .pipe(
                map(data => this.oneItem = data)
            )
    }

    private deleteItem(id: string) {
        return this.appService.deleteItem(id)
            .pipe(
                map(data => this.oneItem = data)
            )
    }

}
