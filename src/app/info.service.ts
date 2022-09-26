import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  Names: string[] = [];
  LoggedInUser: string = "";

  Roles: any[] = [
    { Name: "Ashok", Role: "Admin" },
    { Name: "Kumar", Role: "Travel" },
    { Name: "Raj", Role: "Admin" }];
  constructor() {
    
   }
}
