import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import {catchError, Observable, Subject} from 'rxjs'
import {Example} from './app.model'
import {environment} from '../environments/environment'
import {HandleError, HttpErrorHandler} from './http/http-error-handler.service'
import {HttpLogService} from './http/http-log.service'

@Injectable({
    providedIn: 'root'
})
export class AppService {

    url$: Subject<string> = new Subject<string>();

    private handleError: HandleError;

    constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('AppService')
    }

    getList(): Observable<Array<Example>> {
        return this.http.get<Array<Example>>(environment.apiBase.concat('/simple/get-list'))
    }

    getItemByParam(id: number): Observable<Example> {
        const url = environment.apiBase.concat('/simple/get-item-by-param')
        this.url$.next('_')
        this.url$.next('GET: '.concat(url).concat('?id=').concat(id.toString()))
        const options = {params: new HttpParams().set('id', id)}
        return this.http.get<Example>(url, options)
    }

    getItemByRoute(id: number): Observable<Example> {
        const url = environment.apiBase.concat('/simple/get-item-by-route/').concat(id.toString())
        this.url$.next('_')
        this.url$.next('GET: '.concat(url))
        return this.http.get<Example>(url)
    }

    getItemByRouteHandlers(name: string): Observable<Example> {
        const url = environment.apiBase.concat('/simple/get-item-by-route-handlers/').concat(name)
        this.url$.next('_')
        this.url$.next('GET: '.concat(url))
        return this.http.get<Example>(url)
    }

    postItem(item: Example): Observable<Example> {
        return this.http.post<Example>(environment.apiBase.concat('/simple/post-item'), item)
    }

    postErrorExample(): Observable<any> {
        return this.http.post(environment.apiBase.concat('/simple/post-error-example/'), '')
            .pipe(
                catchError(this.handleError('post-error-example', []))
            )
    }

    putItem(action: Action, item: Example): Observable<Example> {
        return this.http.put<Example>(environment.apiBase.concat('/simple/put-item/').concat(action), item)
    }

    deleteItem(id: string): Observable<Example> {
        return this.http.delete<Example>(environment.apiBase.concat('/simple/delete-item/').concat(id))
    }

}

export enum Action {
    text = 'text',
    img = 'img'
}
