import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Etoile } from '../models/etoile';
import { EtoileService } from '../services/etoile.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  updateUserForm: FormGroup;
  id: number;
  etoile: Etoile;
  validMessage: string = '';

  constructor(
    private service: EtoileService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

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
    this.updateUserForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      type: new FormControl('', Validators.required),
      constellation: new FormControl('', Validators.required),
      distance: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
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
