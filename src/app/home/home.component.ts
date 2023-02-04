import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {
  amount: string;
  business: string;
  credit_card: string;
  datetime: string;
  private: string;
  company: string;
  employer: string;
  description: string;
}

/** Constants used to fill up our data base. */
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  toggleButton: any = [];
  toggleButtonCompany: any = [];
  toggleButtonEmployer: any = [];

  SelectCheck(index: number){
    this.toggleButton[index] = !this.toggleButton[index];
  }
  SelectCheckCompany(index: number){
    this.toggleButtonCompany[index] = !this.toggleButtonCompany[index];
  }
  SelectCheckEmployer(index: number){
    this.toggleButtonEmployer[index] = !this.toggleButtonEmployer[index];
  }
  displayedColumns: string[] = ['amount', 'business', 'credit_card', 'datetime', 'private', 'company', 'employer', 'description'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
/** Builds and returns a new User. */
function createNewUser(amount: number): UserData {
  const business =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    amount: amount.toString(),
    business: business,
    credit_card: Math.round(Math.random() * 100).toString(),
    datetime: NAMES[Math.round(Math.random() * (NAMES.length - 1))],
    private: NAMES[Math.round(Math.random() * (NAMES.length - 1))],
    company: NAMES[Math.round(Math.random() * (NAMES.length - 1))],
    employer: NAMES[Math.round(Math.random() * (NAMES.length - 1))],
    description: NAMES[Math.round(Math.random() * (NAMES.length - 1))],
  };
}
