import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { HttpClient } from '@angular/common/http';

interface ApiConfigInterface {
    base_url: string,
    api_key: string,
    api_format: string,
    path_lists_names: string
}

export interface ApiBooksListsInterface {
    results: Array<any>
}

@Injectable()
export class ApiService {

    /**
     * Config key for API service
     */
    private configKey = 'api';

    private config = {} as ApiConfigInterface;

    constructor(
        private configService: ConfigService,
        private http: HttpClient
    ) {
        this.config = this.configService.getConfig(this.configKey);
    }

    /**
     * public getListsNamesApiUrl - Build lists names API url
     *
     * @return {type}  description
     */
    public getListsNamesApiUrl() {
        return `${this.config.base_url}${this.config.path_lists_names}`;
    }

    /**
     * public getApiData - Get data from api
     *
     * @param  {type} url: Api url
     * @return {type}
     */
    public getApiData(url: string) {
        return this.http.get(url, {
            params: {
                'api-key': this.config.api_key
            }
        });
    }
}
