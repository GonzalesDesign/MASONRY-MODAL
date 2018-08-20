

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MasonryDataInterface } from './masonry-data-interface';

@Injectable({
  providedIn: 'root'
})
export class MasonryDataService {

  private _url = '../../assets/data/masonry-data.json';


  constructor(private _http: HttpClient) { }

  masonryData (): Observable<MasonryDataInterface[]> {
    return this._http.get<MasonryDataInterface[]>(this._url);
  }


}
