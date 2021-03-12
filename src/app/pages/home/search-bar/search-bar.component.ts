import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Article } from '@models/article';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'blog-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent implements OnInit {

  @Input() articles!: Article[] | null;
  articles$!: Observable<Article[]>;
  formGroup!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.onInputChange();
  }

  buildForm(): void {
    this.formGroup = this.fb.group({
      title: ['']
    });
  }

  onInputChange(): void {
    this.articles$ = this.formGroup.controls.title.valueChanges.pipe(
      startWith(''),
      map((value: string) => value.trim()),
      map(keyword => {
        if (this.articles && this.articles.length) {
          return (this.articles as Article[]).filter(article => article.title.indexOf(keyword) > -1);
        } else {
          return [];
        }
      })
    );
  }
}
