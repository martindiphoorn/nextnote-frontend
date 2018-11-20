import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NoteApiService} from "./shared/note-api.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Note} from "./shared/note.model";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  editForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private noteApiService: NoteApiService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getNote();
  }

  getNote(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id === 0) {
      // Create new note
      const note = new Note();
      note.id = 0;
      note.name = '';
      this.createForm(note);
    } else {
      // Retrieve the data
      this.noteApiService.get(id).subscribe(value => this.createForm(value));
    }
  }

  createForm(note: Note) {
    // use the FormBuilder to create a FormGroup
    this.editForm = this.formBuilder.group(note);

    // Watch for changes in the form
    this.editForm.valueChanges.subscribe(value => {
      console.log(value);
    })
  }

  save() {
    const note = <Note> this.editForm.getRawValue();
    if (note.id === 0) {
      this.noteApiService.create(note).subscribe(value => {
        this.router.navigate(['/notes']);
      });
    } else {
      this.noteApiService.update(note).subscribe(value => {
        this.router.navigate(['/notes']);
      });
    }
  }

}
