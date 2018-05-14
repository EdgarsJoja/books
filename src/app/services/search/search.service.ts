import {Injectable} from '@angular/core';

@Injectable()
export class SearchService {

    /**
     * Search string
     *
     * @type {string}
     */
    public searchString = '';

    constructor() {
    }
}
