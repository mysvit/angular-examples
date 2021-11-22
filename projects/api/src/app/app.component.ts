import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    apiUrl = 'https://localhost:5555';
    public weatherList: Array<WeatherForecast> = new Array<WeatherForecast>();

    constructor(public http: HttpClient) {
    }

    getWeatherClick() {
        this.http.get<Array<WeatherForecast>>(this.apiUrl.concat('/WeatherForecast'))
            .pipe(
                map(data => this.weatherList = data)
            )
            .subscribe()
    }

    postWeatherClick(item: WeatherForecast) {

        this.http.post<string>(this.apiUrl.concat('/WeatherForecast'), item)
            .pipe(
                map(data => item.postResult = data)
            )
            .subscribe()
    }

}

export interface WeatherForecast {
    date: Date;
    temperatureC: bigint;
    temperatureF: bigint;
    summary: string;
    postResult: string;
}

