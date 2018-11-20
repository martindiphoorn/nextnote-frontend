import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Note} from "./note.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NoteApiService {

  private API_URL = 'http://localhost:8090/notes';

  constructor(private  httpClient: HttpClient) {
  }

  public all(): Observable<Note[]> {
    return this.httpClient.get<Note[]>(this.API_URL);
  }

  public get(id: number): Observable<Note> {
    return this.httpClient.get<Note>(this.API_URL + '/' + id);
  }

  public create(note: Note): Observable<Note> {
    return this.httpClient.post<Note>(this.API_URL, note);
  }

  public update(note: Note): Observable<Note> {
    return this.httpClient.put<Note>(this.API_URL + '/' + note.id, note);
  }
}
