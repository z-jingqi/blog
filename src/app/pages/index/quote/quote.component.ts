import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blog-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  @Input() quote: string = '';
  @Input() quoteFrom: string = '';

  constructor() { }

  ngOnInit(): void { }

}
