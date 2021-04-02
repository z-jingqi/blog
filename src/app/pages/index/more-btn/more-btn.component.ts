import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'blog-more-btn',
  templateUrl: './more-btn.component.html',
  styleUrls: ['./more-btn.component.scss']
})
export class MoreBtnComponent implements OnInit {

  @Output() showMore: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void { }

}
