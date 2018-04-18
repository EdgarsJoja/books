import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {

    /**
     * Config
     */
    private config = {
        api: {
            api_key: 'd1dc18277ebc4040b92f3653c14c8195',
            api_format: 'json',
            base_url: 'https://api.nytimes.com/svc/books/v3/',
            path_lists_names: 'lists/names.json'
        }
    };

    constructor(private http: HttpClient) {

    }
    /**
     * getConfig - Get config by key
     *
     * @param  {type} config: string description
     * @return {type}                description
     */
    getConfig(config: string) {
        return this.config[config];
    }
}
