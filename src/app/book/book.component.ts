import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OlBooksService, OlBooksApiResponseInterface } from '../services/ol-books/ol-books-service.service';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

    public isbn;
    public book = {} as OlBooksApiResponseInterface;

    /**
     * Whether loader is showing
     *
     * @type {boolean}
     */
    public showLoader = true;

    /**
     * Whether there is no book data found
     *
     * @type {boolean}
     */
    public noDataFound = false;

    constructor(private route: ActivatedRoute, private olBooksService: OlBooksService) {
        this.route.params.subscribe(data => {
            this.isbn = data['isbn'];

            this.getBookData(this.isbn);
        });
    }

    ngOnInit() {
    }

    /**
     * Get book data
     *
     * @param {string} isbn
     */
    getBookData(isbn: string) {
        this.olBooksService.getApiData(this.olBooksService.getBookApiUrl(), {
            bibkeys: isbn
        }).subscribe((data: OlBooksApiResponseInterface) => {
            console.log(this.book !== {} ? 1 : 0);
            this.book = data[isbn];
            this.showLoader = false;

            if (!this.book) {
                this.noDataFound = true;
            }
        });
    }

    /**
     * Whether book content should be displayed
     *
     * @returns {boolean}
     */
    get showBookData() {
        return this.book && Object.keys(this.book).length > 0;
    }
}
