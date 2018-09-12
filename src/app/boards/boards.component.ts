import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig, MatPaginator, MatTableDataSource} from '@angular/material';
import {BoardsService} from '../boards.service';
import {LoginDialogComponent} from '../login-dialog/login-dialog.component';
import {SelectionModel} from '@angular/cdk/collections';

export interface PeriodicElement {
  boardId: number;
  beachName: string;
  latitude: number;
  longitude: number;

  name: string;
  position: number;
  weight: number;
  symbol: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

const initialSelection = [];
const allowMultiSelect = true;


@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'longitude', 'menu'];
  dataSource: any; // = new MatTableDataSource(ELEMENT_DATA);
  boards: Array<PeriodicElement>;
  selection = new SelectionModel<PeriodicElement>(allowMultiSelect, initialSelection);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private boardsService: BoardsService, public dialog: MatDialog) { }

  public  getBoards(){
    this.boardsService.getBoards().subscribe((data:  Array<PeriodicElement>) => {
      this.boards  =  data;
      this.dataSource = new MatTableDataSource(this.boards);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  ngOnInit() {
    this.getBoards();
  }

}
