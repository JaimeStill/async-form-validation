import {
  Component,
  EventEmitter,
  Input
} from '@angular/core';

import {
  FormBuilder,
  FormGroup
} from '@angular/forms';

import {
  GenerateOrgForm,
  Organization,
  StorageState
} from '../models';

import { AppService } from '../services';

@Component({
  selector: 'org-editor',
  templateUrl: 'org-editor.component.html'
})
export class OrgEditorComponent {
  private org: Organization;

  state: StorageState<Organization>;
  form: FormGroup;

  @Input() set data (data: Organization) {
    this.org = data;
    this.load();
  }

  @Input() label = 'Organization';
  @Input() size = 360;
  @Input() update = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    public app: AppService
  ) { }

  private load = () => {
    this.state = this.app.generateState(this.org);

    const value = this.state.hasState
      ? this.state.getState()
      : this.org;

    this.form = GenerateOrgForm(value, this.fb);

    this.form
      .valueChanges
      .subscribe((org: Organization) => this.state.updateState(org));
  }

  clearCache = () => {
    this.form.reset(this.org);
    this.state.clearState();
  }

  save = () => {
    if (this.form?.valid) {
      this.form?.value?.id
        ? this.app.updateOrganization(this.form.value)
        : this.app.addOrganization(this.form.value);

      this.clearCache();
      this.update.emit();
    }
  }
}
