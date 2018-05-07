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
            this.book = data[isbn];
            console.log(data);
        });
    }
}
