import { Component, OnInit } from '@angular/core';
import { NotesService, Note } from './notes.service';  // Import NotesService

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];  // Array to hold all notes
  newNote: Note = { title: '', description: '' };  // Model for the new note
  editNote: Note | null = null;  // Model for the note being edited

  constructor(private notesService: NotesService) {}  // Inject NotesService

  ngOnInit(): void {
    // Fetch existing notes when the component loads
    this.notesService.getNotes().subscribe((data) => {
      this.notes = data;
    });
  }

  // Method to add a new note
  onNoteCreate() {
    if (this.newNote.title && this.newNote.description) {
      this.notesService.addNote(this.newNote).subscribe((response) => {
        this.notes.push(response);  // Add the new note to the list
        this.newNote = { title: '', description: '' };  // Reset the form
      });
    }
  }

  // Method to edit an existing note
  onEditNote(note: Note) {
    this.editNote = { ...note };  // Clone the note for editing
  }

  // Method to save updated note
  onSaveEdit() {
    if (this.editNote && this.editNote.id) {
      this.notesService.updateNote(this.editNote.id, this.editNote).subscribe(() => {
        this.editNote = null;  // Clear the edit form
      });
    }
  }

  // Method to delete a note
  onDeleteNote(noteId: string) {
    this.notesService.deleteNote(noteId).subscribe(() => {
      this.notes = this.notes.filter(note => note.id !== noteId);  // Remove the note from the list
    });
  }
}
