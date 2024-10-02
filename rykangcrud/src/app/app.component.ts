import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NotesComponent } from "./notes/notes.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , FooterComponent , NavbarComponent ,NotesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rykangcrud';
}
