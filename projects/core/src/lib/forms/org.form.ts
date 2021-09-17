import {
  Component,
  Input
} from '@angular/core';

import {
  ApiValidator,
  AppService
} from '../services';

import { FormGroup } from '@angular/forms';

@Component({
  selector: 'org-form',
  templateUrl: 'org.form.html',
  providers: [
    ApiValidator,
    AppService
  ]
})
export class OrgForm {
  form: FormGroup;

  get name() { return this.form?.get('name') }

  @Input() set data (data: FormGroup) {
    this.form = data;

    this.validator.registerValidator(
      this.app.validateOrgName,
      this.form,
      this.name
    );
  }

  constructor(
    private validator: ApiValidator,
    private app: AppService
  ) { }
}
