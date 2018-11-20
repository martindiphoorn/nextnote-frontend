import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {NoteListComponent} from "./note-list/note-list.component";
import {NoteComponent} from "./note/note.component";
import {GroupListComponent} from './group-list/group-list.component';
import {GroupComponent} from './group/group.component';

const routes: Routes = [
  { path: '', redirectTo: '/notes', pathMatch: 'full' },
  { path: 'notes', component: NoteListComponent },
  { path: 'notes/:id', component: NoteComponent },
  { path: 'groups', component: GroupListComponent },
  { path: 'groups/:id', component: GroupComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
