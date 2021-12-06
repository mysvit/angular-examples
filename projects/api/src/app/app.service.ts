import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import {catchError, Observable, retry} from 'rxjs'
import {Example} from './app.model'
import {environment} from '../environments/environment'
import {HandleError, HttpErrorHandler} from './http/http-error-handler.service'

@Injectable({
    providedIn: 'root'
})
export class AppService {

    private handleError: HandleError;

    constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('AppService')
    }

    getList(): Observable<Array<Example>> {
        return this.http.get<Array<Example>>(environment.apiBase.concat('/simple/get-list'))
    }

    getItemByParam(id: number): Observable<Example> {
        const options = {params: new HttpParams().set('id', id)}
        return this.http.get<Example>(environment.apiBase.concat('/simple/get-item-by-param'), options)
    }

    getItemByRoute(id: number): Observable<Example> {
        return this.http.get<Example>(environment.apiBase.concat('/simple/get-item-by-route/').concat(id.toString()))
    }

    getItemByRouteHandlers(name: string): Observable<Example> {
        return this.http.get<Example>(environment.apiBase.concat('/simple/get-item-by-route-handlers/').concat(name))
    }

    postItem(item: Example): Observable<Example> {
        return this.http.post<Example>(environment.apiBase.concat('/simple/post-item'), item)
    }

    postErrorExample(): Observable<any> {
        return this.http.post(environment.apiBase.concat('/simple/post-error-example/'), '')
            .pipe(
                retry(3),
                catchError(this.handleError('post-error-example', []))
            )
    }

    putItem(action: Action, item: Example): Observable<Example> {
        return this.http.put<Example>(environment.apiBase.concat('/simple/put-item/')
            .concat(item.id.toString()).concat('/').concat(action), item)
    }

    deleteItem(id: string): Observable<Example> {
        return this.http.delete<Example>(environment.apiBase.concat('/simple/delete-item/').concat(id))
    }

}

export enum Action {
    text = 'text',
    img = 'img'
}
