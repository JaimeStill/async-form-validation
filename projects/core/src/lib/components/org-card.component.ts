import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Organization } from '../models';

@Component({
  selector: 'org-card',
  templateUrl: 'org-card.component.html'
})
export class OrgCardComponent {
  @Input() org: Organization;
  @Input() selected: boolean = false;
  @Input() size: number = 320;

  @Output() select = new EventEmitter<Organization>();
  @Output() remove = new EventEmitter<Organization>();
}
