import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserprofileComponentComponent } from "../app/userprofile-component/userprofile-component.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserprofileComponentComponent , CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstangRYK';
  users = [
    { name: 'Rubbas', eligiblitystatus: true, age: 20 },
    { name: 'ali', eligiblitystatus: false, age:19 },
    { name: 'maryam', eligiblitystatus: true, age: 16 },
    { name: 'hassan', eligiblitystatus: true, age: 20 },
    { name: 'abeer', eligiblitystatus: false, age: 16 }
  ];
}
