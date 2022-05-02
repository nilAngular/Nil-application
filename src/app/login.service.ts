import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { User } from './login/user';

const USERS = [
  new User(1, "user1", "user1"),
  new User(2, "user2", "user2")
];
const usersObservable = of(USERS);
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  private isloggedIn = false;
    getAllUsers(): Observable<User[]> {
        return usersObservable;
    }
    isUserAuthenticated(username: string, password: string): Observable<boolean> {
        return this.getAllUsers().pipe(
            map(users => {
                const Authenticateduser = users.find(user => (user.username === username) && (user.password === password));
                if (Authenticateduser) {
                    this.isloggedIn = true;
                } else {
                    this.isloggedIn = false;
                }
                return this.isloggedIn;
            })
        );
    }
    isUserLoggedIn(): boolean {
        return this.isloggedIn;
    }
}
