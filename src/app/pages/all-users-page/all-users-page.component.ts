import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/models/user-details';
import { GetUsersService } from 'src/app/services/get-users.service';

@Component({
  selector: 'app-all-users-page',
  templateUrl: './all-users-page.component.html',
  styleUrls: ['./all-users-page.component.scss']
})
export class AllUsersPageComponent implements OnInit {

  //List of users
  allUsersList: UserDetails[] = [];
  
  constructor(
    private getUsersService: GetUsersService
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  // Method to retrieve all users
  getAllUsers() {
    this.getUsersService.getAllUsers().subscribe(
      response => {
        this.allUsersList = response;
      },
      error => {
        alert('Unable to retrieve users data. Please try again later.');
      } 
    )
  }


}
