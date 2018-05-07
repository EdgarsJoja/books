import { Injectable } from '@angular/core';

import { ConfigService } from '../config/config.service';
import { ApiService } from '../api/api.service';

interface ApiConfigInterface {
    base_url: string;
    api_format: string;
    data_format: string;
}

export interface OlBooksApiResponseInterface {
    title: string;
    authors: Array<any>;
    cover: any;
    subtitle: string;
    notes: string;
}

@Injectable()
export class OlBooksService {
    /**
     * Config key for API service
     */
    private configKey = 'olb-api';

    private config = {} as ApiConfigInterface;

    constructor(private apiService: ApiService, private configService: ConfigService) {
        this.config = this.configService.getConfig(this.configKey);
    }

    /**
     * Get API url for book data
     *
     * @returns {string}
     */
    public getBookApiUrl() {
        return `${this.config.base_url}`;
    }

    /**
     * public getApiData - Get data from api
     *
     * @param {string} url
     * @param params
     * @returns {Observable<Object>}
     */
    public getApiData(url: string, params: any = {}) {
        return this.apiService.getApiData(url, Object.assign({
            format: this.config.api_format,
            jscmd: this.config.data_format
        }, params));
    }
}
