import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService extends GenericService<Employee, number> {
  constructor(http: HttpClient) {
    super(http, 'http://localhost:3003/api');
  }
}
