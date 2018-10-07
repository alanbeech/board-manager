import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatInput, MatPaginator, MatTableDataSource} from '@angular/material';
import {BoardsService} from '../boards.service';
import {SelectionModel} from '@angular/cdk/collections';
import {EditDialogComponent} from '../edit-dialog/edit-dialog.component';
import {ActivatedRoute} from '@angular/router';
import {AddDialogComponent} from '../add-dialog/add-dialog.component';
import {ConfirmDeleteComponent} from '../confirm-delete/confirm-delete.component';
import {AccountService} from '../account.service';
import {ViewBoardComponent} from '../view-board/view-board.component';
import {NotificationsService} from '../services/notifications.service';
import {NotificationType} from '../services/notification-type.enum';

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
  dataSource: any;
  boards: Array<Board>;
  selection = new SelectionModel<Board>(allowMultiSelect, initialSelection);
  boardType: number;
  isLoggedIn = false;
  isAdmin = false;

  @ViewChild(MatInput) filterInput: MatInput;

  constructor(
    private boardsService: BoardsService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private accountService: AccountService,
    private notificationService: NotificationsService) { }
  getBoards(boardType: number) {

    this.isLoggedIn = this.accountService.getKey() !== '' && this.accountService.getKey() != null ;
    this.isAdmin = this.accountService.isAdmin();

    this.boardsService.getBoards(boardType).subscribe((data:  Array<Board>) => {
      this.boards  =  data;
      this.dataSource = new MatTableDataSource(this.boards);
      this.applyFilter(this.filterInput.value);
    }, (error) => {
      this.notificationService.showNotification(`Sorry. We are unable to get the boards at this time. Please try later`, NotificationType.Error);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addBoard() {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe((added: boolean) => {
      if (added) {
        this.notificationService.showNotification('Your board has been added. Thank you.', NotificationType.Success)
        this.getBoards(this.boardType);
      }
    }, (error) => {
      this.notificationService.showNotification(`Sorry. We were unable to delete your board at this time. Please try later.`, NotificationType.Error);
    });
  }

  deleteBoard(board: Board) {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {

      if (confirmed) {

        console.log('delete board', board);
        this.boardsService.deleteBoard(board.boardId).subscribe(() => {
          console.log('done');
          this.getBoards(this.boardType);
          this.notificationService.showNotification('Your board has been deleted.', NotificationType.Success);
        }, (error) => {
          this.notificationService.showNotification(`Sorry. We were unable to delete your board at this time. Please try later.`, NotificationType.Error)
        });
      }
    });
  }

  showEdit(a: any) {
    console.log(a);

    const dialogRef = this.dialog.open(EditDialogComponent, {

      width: '600px',
      data: a
    });

    dialogRef.afterClosed().subscribe((edited: boolean) => {
      if (edited) {
        this.notificationService.showNotification('Your board has been saved.', NotificationType.Success);
        this.getBoards(this.boardType);
      }
    });
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

  viewBoard(board: Board) {
    const dialogRef = this.dialog.open(ViewBoardComponent, {
      width: '600px',
      data: board
    });

    dialogRef.afterClosed().subscribe((edited: boolean) => { });
  }

  assignOwners() {
    alert('assign owners coming soon');
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.boardType = +params['filter']; // (+) converts string 'id' to a number
      this.getBoards(this.boardType);
      // In a real app: dispatch action to load the details here.
    });


    this.accountService.loggedIn.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
      this.getBoards(this.boardType);
    });
  }

}
