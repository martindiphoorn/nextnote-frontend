import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {Group} from './group.model';

@Injectable({
  providedIn: 'root'
})
export class GroupApiService {

  private API_URL = 'http://localhost:8090/groups';

  constructor(private  httpClient: HttpClient) {
  }

  public all(): Observable<Group[]> {
    return this.httpClient.get<Group[]>(this.API_URL);
  }

  public get(id: number): Observable<Group> {
    return this.httpClient.get<Group>(this.API_URL + '/' + id);
  }

  public create(group: Group): Observable<Group> {
    return this.httpClient.post<Group>(this.API_URL, group);
  }

  public update(group: Group): Observable<Group> {
    return this.httpClient.put<Group>(this.API_URL + '/' + group.id, group);
  }
}
