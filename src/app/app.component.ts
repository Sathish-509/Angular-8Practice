import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Sathish';
  flag = true;
  studentsList = ["Sathish", "Virat"];
  currentName = "";

  toggleFlag() {
    this.flag = !this.flag;
    return this.flag;
  }

  getColor() {
    if(this.flag) {
      return "green";
    } else{
      return "red";
    }
  }

  addStudent() {
    this.studentsList.push(this.currentName);
  }
}
