import { Component } from "@angular/core";

@Component({
  selector: 'app-user',
  template: `<div>{{ user.name }}</div>`,
})
export class UserComponent {
  user: User;

  constructor() {
    this.user = this.getUser();
  }

  private getUser(): User {
    return { name: 'John Doe', age: 30, role: 'Admin' }; // Mock data
  }
}

interface User {
  name: string;
  age: number;
  role: string;
}
