import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Etoile } from '../models/etoile';
import { EtoileService } from '../services/etoile.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './read-one.component.html',
  styleUrls: ['./read-one.component.css'],
})
export class ReadOneComponent implements OnInit {
  readStarForm: FormGroup;
  id: number;
  etoile: Etoile;
  validMessage: string = '';

  constructor(private service: EtoileService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.findById(this.id).subscribe(
      (res) => {
        this.etoile = res;
      },
      (err) => {
        console.log(err);
      }
    );
    this.readStarForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      type: new FormControl('', Validators.required),
      constellation: new FormControl('', Validators.required),
      distance: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  get formUpdate() {
    return this.readStarForm.controls;
  }
}
