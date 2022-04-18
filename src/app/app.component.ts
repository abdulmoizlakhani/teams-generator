import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'teams-generator';
  memberName = '';
  members: string[] = [];
  errorMessage = '';

  addMember() {
    if (!this.memberName) {
      this.errorMessage = 'Please enter a name';
      return;
    }
    this.members.push(this.memberName);
    this.memberName = '';
  }

  onInput(member: string) {
    this.memberName = member;
    this.errorMessage = '';
  }
}
