import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig, MatPaginator, MatTableDataSource} from '@angular/material';
import {BoardsService} from '../boards.service';
import {LoginDialogComponent} from '../login-dialog/login-dialog.component';

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

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'longitude'];
  dataSource: any; // = new MatTableDataSource(ELEMENT_DATA);
  boards: Array<PeriodicElement>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private boardsService: BoardsService, public dialog: MatDialog) { }

  public  getBoards(){
    this.boardsService.getBoards().subscribe((data:  Array<PeriodicElement>) => {
      this.boards  =  data;
      this.dataSource = new MatTableDataSource(this.boards);
      console.log(data);
    });
  }

  login() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(LoginDialogComponent, dialogConfig);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.getBoards();
  }

}
