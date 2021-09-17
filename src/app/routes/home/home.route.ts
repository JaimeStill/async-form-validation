import {
  Component,
  OnInit
} from '@angular/core';

import {
  AppService,
  ConfirmDialog,
  Organization
} from 'core';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'home-route',
  templateUrl: 'home.route.html'
})
export class HomeRoute implements OnInit {
  organization: Organization;

  constructor(
    private dialog: MatDialog,
    public app: AppService
  ) { }

  private new = () => {
    return {
      id: null,
      name: null
    } as Organization;
  }

  ngOnInit() {
    this.refresh();
    this.organization = this.new();
  }

  selected = (o: Organization) => o?.id === this.organization?.id;

  selectOrganization = (o: Organization) =>
    this.organization = this.selected(o)
      ? this.new()
      : o;

  refresh = () => this.app.getOrganizations();

  removeOrganization = (o: Organization) => o && this.dialog.open(ConfirmDialog, {
    data: {
      title: 'Remove Organization',
      content: `Are you sure you want to remove organization ${o.name}?`
    },
    disableClose: true,
    autoFocus: false
  })
  .afterClosed()
  .subscribe(res => {
    if (res) {
      if (this.selected(o)) this.selectOrganization(o);
      this.app.removeOrganization(o);
      this.app.getOrganizations();
    }
  });
}
