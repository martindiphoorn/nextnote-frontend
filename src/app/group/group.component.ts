import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupApiService} from './shared/group-api.service';
import {Group} from './shared/group.model';
import {Note} from '../note/shared/note.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  editForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private groupApiService: GroupApiService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getGroup();
  }

  getGroup(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id === 0) {
      // Create new group
      const group = new Group();
      group.id = 0;
      group.name = '';
      this.createForm(group);
    } else {
      // Retrieve the data
      this.groupApiService.get(id).subscribe(value => this.createForm(value));
    }
  }

  createForm(group: Group) {
    // use the FormBuilder to create a FormGroup
    this.editForm = this.formBuilder.group(group);

    // Watch for changes in the form
    this.editForm.valueChanges.subscribe(value => {
      console.log(value);
    })
  }

  save() {
    const group = <Group> this.editForm.getRawValue();
    if (group.id === 0) {
      this.groupApiService.create(group).subscribe(value => {
        this.router.navigate(['/groups']);
      });
    } else {
      this.groupApiService.update(group).subscribe(value => {
        this.router.navigate(['/groups']);
      });
    }
  }

}
