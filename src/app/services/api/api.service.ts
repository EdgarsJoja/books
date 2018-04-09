import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { HttpClient } from '@angular/common/http';

interface ApiConfigInterface {
    base_url: String,
    api_key: String,
    api_format: String,
    path_lists_names: String
}

@Injectable()
export class ApiService {
    private configKey = 'api';

    private config: = <ApiConfigInterface>{};

    constructor(
        private configService: ConfigService,
        private http: HttpClient
    ) {
        this.configService.getConfig(this.configKey).subscribe(
            data => { this.config = JSON.parse(data) },
            error => {}
        );
    }

    public getListsNamesApiUrl() {
        return this.config.base_url + this.config.path_lists_names;
    }

    public getApiData(url: String) {
        return this.http.get(url, {
            params: {
                'api-key': this.config.api_key
            }
        });
    }
}
