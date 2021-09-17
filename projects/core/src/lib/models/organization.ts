import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

export interface Organization {
  id: number;
  name: string;
}

export const GenerateOrgForm = (org: Organization, fb: FormBuilder): FormGroup =>
  fb.group({
    id: [org.id],
    name: [org.name, Validators.required]
  })
