import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

    constructor(protected configService: ConfigService, private http: HttpClient) {
    }

    /**
     * public getApiData - Get data from api
     *
     * @param {string} url
     * @param params
     * @returns {Observable<Object>}
     */
    public getApiData(url: string, params = {}) {
        return this.http.get(url, {
            params: params
        });
    }
}
