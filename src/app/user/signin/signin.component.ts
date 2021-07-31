import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  exist;
  click;
  control;
  userForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    aboutMe: new FormControl(''),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      /*Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}/
      ),*/
    ]),
    civility: new FormControl(),
  });
  signinForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  get firstName() {
    return this.userForm.get('firstName');
  }
  get lastName() {
    return this.userForm.get('lastName');
  }
  get email() {
    return this.userForm.get('email');
  }
  get password() {
    return this.userForm.get('password');
  }
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}
  save() {
    const userFormValue = { ...this.userForm.getRawValue() };

    this.exist = false;
    this.click = false;
    this.control = '';

    this.userService.getAll().subscribe((next) =>
      next['hydrat:member'].map((r) => {
        if (r.email == userFormValue.email.value) {
          this.exist = true;
        }
      })
    );

    if (!this.exist) {
      this.userService.addUser(userFormValue).subscribe((res) => {
        localStorage.setItem('currentUser', JSON.stringify(res));
        this.router.navigate(['']);
      });
    } else {
      this.control = 'Ce mail existe déja !';
    }
  }

  signin(): void {
    this.userService.getAll().subscribe((res) => {
      res['hydra:member'].map((r) => {
        if (
          r.email === this.signinForm.get('email').value &&
          r.password === this.signinForm.get('password').value
        ) {
          localStorage.setItem('currentUser', JSON.stringify(r));
          this.router.navigate(['/']);
        }
      });
    });
  }
}
