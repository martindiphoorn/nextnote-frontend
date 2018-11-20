import { Component, OnInit } from '@angular/core';
import {NoteApiService} from "../note/shared/note-api.service";
import {Note} from "../note/shared/note.model";

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  notes: Note[];

  constructor(private noteApiService: NoteApiService) { }

  ngOnInit() {
    this.noteApiService.all().subscribe(value => {
      this.notes = value;
    })
  }
}
