import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: User[];
  idUser;
  deleteId;
  modal = false;
  userToEdit: any;
  userForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    aboutMe: new FormControl(''),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/),
    ]),
    civility: new FormControl(),
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
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAll().subscribe((next) => {
      this.users = next['hydra:member'];
    });
  }
  modalOn(idUser) {
    this.idUser = idUser;
    this.modal = true;
    this.userService.getUserById(idUser).subscribe((next) => {
      this.userToEdit = next;
      this.userForm.setValue({
        firstName: next.firstName,
        lastName: next.lastName,
        email: next.email,
        aboutMe: next.aboutMe,
        civility: next.civility,
      });
      console.log(this.userForm);
    });
  }
  edit() {
    const userFormValue = { ...this.userForm.getRawValue() };
    this.userService.updateUser(userFormValue, this.idUser).subscribe((res) => {
      this.modal = false;
      window.location.reload();
    });
  }
  deleteOn(id) {
    this.deleteId = id;
  }
  delete() {
    this.userService.deleteUser(this.deleteId).subscribe();
    window.location.reload();
  }
}
