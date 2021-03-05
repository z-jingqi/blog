import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Converter, ConverterOptions } from 'showdown';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {
  converter!: Converter;

  constructor() {
    this.initConverter();
  }

  convertMdToHtml(url: string): Observable<string> {
    return new Observable(subscriber => {
      fetch(url).then(response => response.text()).then(data => {
        const htmlString = this.converter.makeHtml(data);
        subscriber.next(htmlString);
        subscriber.complete();
      });
    });
  }

  initConverter(options?: ConverterOptions): void {
    if (!this.converter) {
      this.converter = new Converter(options);
    }
  }
}
