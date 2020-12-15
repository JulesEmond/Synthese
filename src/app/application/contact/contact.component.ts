import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', Validators.required),
    question: new FormControl('', Validators.required),
  });

  validMessage: string;

  ngOnInit(): void {}

  get formCreate() {
    return this.contactForm.controls;
  }

  resetForm() {
    if (this.contactForm.valid) {
      this.contactForm.reset();
    } else {
      this.validMessage = 'Veuillez remplir en entier le formulaire';
    }
  }
}
