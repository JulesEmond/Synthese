import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';
import { Etoile } from '../models/etoile';

@Injectable({
  providedIn: 'root',
})
export class EtoileService extends GenericService<Etoile, number> {
  constructor(http: HttpClient) {
    super(http, 'http://localhost:3004/myApi');
  }
}
