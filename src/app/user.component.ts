import { Component, Input } from '@angular/core';
import { User, UserInfo } from './user';
import { UserService } from './user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `,
  ],
})
export class UserComponent {
  user: User;
  users: User[] = [];

  usersTyped: UserInfo[] = [];

  addUserForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  });

  constructor(public userService: UserService) {}

  saveUser() {
    this.user = this.addUserForm.value;
    this.userService.saveUser(this.user).subscribe((response: any) => {
      console.log(response);

      this.users.push({ name: response.name, job: response.email });
    });
  }

  saveUserTyped() {
    this.user = this.addUserForm.value;
    this.userService
      .saveUserTyped(this.user)
      .subscribe((response: UserInfo) => {
        console.log(response);

        this.users.push({ name: response.name, job: response.email });
        this.usersTyped.push({
          name: response.name,
          email: response.email,
          id: response.id,
          createdAt: response.createdAt,
        });
      });
  }

  ngOnInit(): void {}
}
