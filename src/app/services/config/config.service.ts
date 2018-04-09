import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {

    /**
     * Config mapping
     */
    private config = {
        'api': 'assets/config/api.json'
    };

    constructor(private http: HttpClient) {

    }


    /**
     * getConfig - Get specific configuration
     *
     * @param  {string} config
     * @return {type}
     */
    getConfig(config: string) {
        return this.http.get(this.config[config], {
            responseType: 'text'
        });
    }
}
