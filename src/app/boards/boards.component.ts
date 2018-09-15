import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig, MatPaginator, MatTableDataSource} from '@angular/material';
import {BoardsService} from '../boards.service';
import {SelectionModel} from '@angular/cdk/collections';
import {EditDialogComponent} from '../edit-dialog/edit-dialog.component';
import {ActivatedRoute} from '@angular/router';

export interface Board {
  boardId: number;
  twoMinuteId: string;
  name: string;
  location: string;
  description: string;
  photoUrls: string[];
  thumbnailUrls: string[];
  latitude: number;
  longitude: number;
  ownerIds: string[];
  boardType: number;
  status: number;
}

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
  boards: Array<Board>;
  selection = new SelectionModel<Board>(allowMultiSelect, initialSelection);
  boardType: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private boardsService: BoardsService,
    private route: ActivatedRoute,
    public dialog: MatDialog) { }

  public  getBoards(boardId: number){
    this.boardsService.getBoards(boardId).subscribe((data:  Array<Board>) => {
      this.boards  =  data;
      this.dataSource = new MatTableDataSource(this.boards);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  showEdit(a: any) {
    console.log(a);

    const dialogRef = this.dialog.open(EditDialogComponent, {
      height: '280px',
      width: '600px',
      data: a
    });

    // dialogRef..boardData = a;
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


    this.route.params.subscribe(params => {
      this.boardType = +params['filter']; // (+) converts string 'id' to a number
      this.getBoards(this.boardType);
      // In a real app: dispatch action to load the details here.
    });

  }

}
