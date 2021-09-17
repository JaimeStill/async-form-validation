import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const root = 'jps-async-val';
const module = 'organization';

import {
  Organization,
  StorageState
} from '../models';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private db = new Database();
  private organizations = new BehaviorSubject<Organization[]>(null);

  organizations$ = this.organizations.asObservable();

  clearOrganizations = () => this.organizations.next(null);

  generateState = (org: Organization) => new StorageState<Organization>(root, module, org?.id ? org.id.toString() : 'new');

  getOrganizations = () => this.organizations.next(
    this.db.getOrganizations()
  );

  validateOrgName = (org: Organization): Promise<boolean> => new Promise((resolve, reject) => {
    try {
      const res = this.db.validateOrgName(org);
      resolve(res);
    } catch (err: any) {
      reject(err);
    }
  });

  addOrganization = (org: Organization) => this.db.addOrganization(org);

  updateOrganization = (org: Organization) => this.db.updateOrganization(org);

  removeOrganization = (org: Organization) => this.db.removeOrganization(org);
}

class Database {
  private db = {
    organizations: new Array<Organization>(
      {
        id: 1,
        name: 'Good Toys'
      } as Organization,
      {
        id: 2,
        name: 'Rapid Bikes'
      } as Organization
    )
  }

  private generateId = (arr: number[]) => arr.reduce((a, v) => a = v > a ? v : a) + 1;

  private generateOrgId = () => this.generateId(
    this.db
      .organizations
      .map(x => x.id)
  );

  getOrganizations = () => this.db.organizations;

  validateOrgName = (org: Organization) =>
    this.db
      .organizations
      .filter(o =>
        o.id !== org?.id
        && o.name?.toLowerCase() === org?.name?.toLowerCase()
      )
      .length < 1;

  addOrganization = (org: Organization) => {
    org.id = this.generateOrgId();
    this.db.organizations.push(org);
  }

  updateOrganization = (org: Organization) => {
    const index = this.db.organizations.findIndex(o => o.id === org?.id);

    if (typeof index === 'number')
      this.db.organizations[index] = org;
  }

  removeOrganization = (org: Organization) => {
    const state = new StorageState(root, module, org?.id?.toString());

    if (state.hasState)
      state.clearState();

    const index = this.db.organizations.findIndex(o => o.id === org.id);

    if (typeof index === 'number')
      this.db.organizations.splice(index, 1);
  }
}
