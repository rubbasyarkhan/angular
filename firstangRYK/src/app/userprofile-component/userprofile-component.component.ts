import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute, numberAttribute } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-userprofile-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './userprofile-component.component.html',
  styleUrl: './userprofile-component.component.css',
})
export class UserprofileComponentComponent {
  // Name: string = 'Rubbas';
  // Designation: string = 'Frontend dev';
  // Salary: number = 50000;
  // inputvalue = ' ';

  // disbtn = true;
  // onchange(e: Event) {
  //   const inputval = (e.target as HTMLInputElement).value;
  //   console.log(inputval);
  //   this.inputvalue = inputval;
  // }

  // users = [
  //   { name: 'Rubbas', eligiblitystatus: true, age: 20 },
  //   { name: 'ali', eligiblitystatus: false, age:19 },
  //   { name: 'maryam', eligiblitystatus: true, age: 16 },
  //   { name: 'hassan', eligiblitystatus: true, age: 20 },
  //   { name: 'abeer', eligiblitystatus: false, age: 16 }
  // ];

  @Input({ alias: 'username' }) name = '';
  @Input({ transform: numberAttribute }) age!: number;
  @Input({ transform: booleanAttribute }) eligiblitystatus!: boolean ;
}
