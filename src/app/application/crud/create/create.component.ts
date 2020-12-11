import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', Validators.required),
    emailOffers: new FormControl('', Validators.required),
    interfaceStyle: new FormControl('', Validators.required),
    subscriptionType: new FormControl('', Validators.required),
    notes: new FormControl('', Validators.required),
  });

  user: User;
  validMessage: string = '';

  constructor(private service: UserService, private router: Router) {}

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
