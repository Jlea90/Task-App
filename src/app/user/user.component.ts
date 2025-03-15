import { Component } from '@angular/core';

import { DUMMY_USERS } from '../dummy_users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // This component is responsible for displaying a list of users and allowing the user to select one.
  selectedUser = DUMMY_USERS[randomIndex];
 

 
}
