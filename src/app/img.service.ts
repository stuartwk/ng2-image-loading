import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ImgService {

  constructor(private http: Http) { }

  getImgList(): Observable<Object[]> {
    return this.http
      .get('https://unsplash.it/list')
      .map( (res) =>
        res.json()
      );
  }

}
