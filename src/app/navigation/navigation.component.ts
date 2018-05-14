import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search/search.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    /**
     * Show search
     *
     * @type {boolean}
     */
    public showSearch = false;

    constructor(public search: SearchService) { }

    ngOnInit() {
    }

    /**
     * Update search string value
     *
     * @param event
     */
    public emitSearchData(event) {
        this.search.searchString = event.target.value;
    }
}
