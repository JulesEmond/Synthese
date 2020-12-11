import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService extends GenericService<User, number> {
  constructor(http: HttpClient) {
    super(http, 'http://localhost:3004/myApi');
  }
}
