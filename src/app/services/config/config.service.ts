import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {

    /**
     * Config
     */
    private config = {
        'nyt-api': {
            api_key: 'd1dc18277ebc4040b92f3653c14c8195',
            api_format: 'json',
            base_url: 'https://api.nytimes.com/svc/books/v3/',
            path_lists_names: 'lists/names.json',
            path_lists: 'lists.json',
            path_reviews: 'reviews.json',
        },
        'olb-api': {
            base_url: 'https://openlibrary.org/api/books',
            api_format: 'json',
            data_format: 'data'
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
    public getConfig(config: string) {
        return this.config[config];
    }
}
