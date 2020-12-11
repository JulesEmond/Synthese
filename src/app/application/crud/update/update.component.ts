import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  updateUserForm: FormGroup;
  id: number;
  user: User;
  validMessage: string = '';

  constructor(
    private service: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.findById(this.id).subscribe(
      (res) => {
        this.user = res;
      },
      (err) => {
        console.log(err);
      }
    );
    this.updateUserForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', Validators.required),
      emailOffers: new FormControl('', Validators.required),
      interfaceStyle: new FormControl('', Validators.required),
      subscriptionType: new FormControl('', Validators.required),
      notes: new FormControl('', Validators.required),
    });
  }

  get formUpdate() {
    return this.updateUserForm.controls;
  }

  updateUser() {
    if (this.updateUserForm.valid) {
      this.service.update(this.id, this.updateUserForm.value).subscribe(
        () => {
          this.updateUserForm.reset();
          this.router.navigateByUrl('crud');
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
