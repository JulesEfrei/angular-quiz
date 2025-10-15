import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userName: string = '';

  getUserName(): string {
    return this.userName;
  }

  setUserName(name: string) {
    this.userName = name;
  }
}
