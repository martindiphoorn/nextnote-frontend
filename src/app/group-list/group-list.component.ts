import { Component, OnInit } from '@angular/core';
import {GroupApiService} from '../group/shared/group-api.service';
import {Group} from '../group/shared/group.model';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {
  groups: Group[];

  constructor(private groupApiService: GroupApiService) { }

  ngOnInit() {
    this.groupApiService.all().subscribe(value => {
      this.groups = value;
    })
  }
}
