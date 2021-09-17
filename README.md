# Async Form Validation

The intent of this project is to demonstrate how to merge Angular Reactive Forms with an asynchronous validation strategy that allows the full object represented by the form to be provided for validation, yet have the validation target a specific `FormControl` within the `FormGroup`. This strategy also has the added benefit of integrating RxJS to manage the execution of the validation.

[![async-validation](https://user-images.githubusercontent.com/14102723/133704568-e24a7a05-90dd-4377-b56c-30551eb4c3a7.gif)](https://user-images.githubusercontent.com/14102723/133704568-e24a7a05-90dd-4377-b56c-30551eb4c3a7.gif)

## Usage

There are three steps to using this validation method. The setup for this demonstration is illustrated below:

1. The [`Organization`](./projects/core/src/lib/models/organization.ts) interface also defines a `GenerateOrgForm` function that generates the [`FormGroup`](https://angular.io/api/forms/FormGroup) via the [`FormBuilder`](https://angular.io/api/forms/FormBuilder) service.

    ```ts
    export const GenerateOrgForm = (org: Organization, fb: FormBuilder): FormGroup =>
      fb.group({
        id: [org.id],
        name: [org.name, Validators.required]
      })
    ```

2. A function that receives an instance of the item being validated and returns `Promise<boolean>` must be defined (see [`AppService`](./projects/core/src/lib/services/app.service.ts) for mock API implementation):

    ```ts
    validateOrgName = (org: Organization): Promise<boolean> => new Promise((resolve, reject) => {
      try {
        const res = this.db.validateOrgName(org);
        resolve(res);
      } catch (err: any) {
        reject(err);
      }
    })

    // Inside the private Database class
    validateOrgName = (org: Organization) =>
      this.db
        .organizations
        .filter(o =>
          o.id !== org?.id
          && o.name?.toLowerCase() === org?.name?.toLowerCase()
        )
        .length < 1;
    ```

3. The form is created and the validator is registered (see [org.form.ts](./projects/core/src/lib/forms/org.form.ts) and [org.form.html](./projects/core/src/lib/forms/org.form.html)):

    ```ts
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
        ApiValidatorService,
        AppService
      ]
    })
    export class OrgForm {
      form: FormGroup;

      // Get the FormControl for the name property
      get name() { return this.form?.get('name') }

      // Register asynchronous validation in the FormGroup Input property setter
      @Input() set data (data: FormGroup) {
        this.form = data;

        this.validator.registerValidator(
          this.app.validateOrgName,
          this.form,
          this.name
        )
      }

      constructor(
        private validator: ApiValidator,
        private app: AppService
      ) { }
    }
    ```

    ```html
    <form [formGroup]="form">
      <section fxLayout="column"
               fxLayoutAlign="start stretch">
        <mat-form-field class="my4">
          <mat-label>Name</mat-label>
          <input formControlName="name"
                 matInput>
          <mat-error *ngIf="name?.errors?.required">Name is required</mat-error>
          <!-- Note that the api validation error can now be checked on the form control -->
          <mat-error *ngIf="name?.errors?.api">Name is already in use</mat-error>
        </mat-form-field>
      </section>
    </form>
    ```

## How It Works

Before I was able to get this to work, I first had to create an [`ApiValidatorService`](./projects/core/src/lib/services/api-validator.service.ts) that abstracts the process of registering validation, as well as manages the internal state of the [`AbstractControl.error`](https://angular.io/api/forms/AbstractControl) object on the [`FormControl`](https://angular.io/api/forms/FormControl) provided. This is exposed via the `registerValidator` function:

```ts
registerValidator = async <T>(
  // The validation function
  validator: (obj: T) => Promise<boolean>,
  form: FormGroup,
  // The control representing the property to be validated
  control: AbstractControl,
  // The property to append to the AbstractControl.errors object
  error: string = 'api' 
) => {
  // Check the initial state for validation
  if (control.value) {
    const res = await validator(form.value);
    this.setErrorState(control, error, res ? null : true);
  } else
    this.setErrorState(control, error);
}
```

The services's internal `setErrorState` function manages the state of the `AbstractControl.error` object. This is necessary because there could potentially be other validation states, and there is not an API available to `AbstractControl` for simply adding and removing error states.

```ts
private setErrorState = (control: AbstractControl, error: string, value?: boolean) => {
  // If an error was encountered
  if (value) {
    const errors = control.errors
      // There are additional errors already present on the control, so append the error
      ? {
        ...control.errors,
        [error]: value
      }
      // There are no errors present on the control, so generate the errors object
      : {
        [error]: value
      };

      // Apply the errors to the control
      control.setErrors(errors);
    /*
      No error was encountered. If AbstractControl.errors has a value,
      be sure that our error state is cleared out.
    */
  } else if (control.errors) {
    if (control.errors.hasOwnProperty(error))
      delete control.errors[error];

    if (Object.keys(control.errors).length > 0)
      control.setErrors(control.errors);
    else
      control.setErrors(null);
  }
}
```

## Additional Files of Interest

* [OrgEditorComponent](./projects/core/src/lib/components/org-editor.component.ts) and [Template](./projects/core/src/lib/components/org-editor.component.html)
* [StorageState](./projects/core/src/lib/models/storage-state.ts)
* [OrgCardComponent](./projects/core/src/lib/components/org-card.component.ts) and [Template](./projects/core/src/lib/components/org-card.component.html)
* [HomeRoute](./src/app/routes/home/home.route.ts) and [Template](./src/app/routes/home/home.route.html)
