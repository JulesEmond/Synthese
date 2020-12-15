import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Etoile } from '../models/etoile';
import { EtoileService } from '../services/etoile.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    type: new FormControl('', Validators.required),
    constellation: new FormControl('', Validators.required),
    distance: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  user: Etoile;
  validMessage: string = '';

  constructor(private service: EtoileService, private router: Router) {}

  ngOnInit(): void {}

  get formCreate() {
    return this.userForm.controls;
  }

  createUser() {
    if (this.userForm.valid) {
      this.service.save(this.userForm.value).subscribe(
        () => {
          this.userForm.reset();
          this.router.navigateByUrl('/crud');
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.validMessage = 'Veuillez vérifier le formulaire';
    }
  }
}
