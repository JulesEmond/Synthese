import { Component, OnInit } from '@angular/core';
import { Etoile } from '../models/etoile';
import { EtoileService } from '../services/etoile.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
})
export class ReadComponent implements OnInit {
  listUsers: Array<Etoile>;

  constructor(private service: EtoileService) {}

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees(): void {
    this.service.findAll().subscribe(
      (data) => {
        this.listUsers = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public delete(id: number, i: any) {
    if (window.confirm('Are you sure?')) {
      this.service.deleteById(id).subscribe(
        () => {
          this.listUsers.splice(i, 1);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
