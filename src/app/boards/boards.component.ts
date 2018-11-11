import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatInput, MatPaginator, MatTableDataSource} from '@angular/material';
import {BoardsService} from './services/boards.service';
import {SelectionModel} from '@angular/cdk/collections';
import {EditDialogComponent} from './components/edit-dialog/edit-dialog.component';
import {ActivatedRoute, Router} from '@angular/router';
import {AddDialogComponent} from '../add-dialog/add-dialog.component';
import {ConfirmDeleteComponent} from '../components/confirm-delete/confirm-delete.component';
import {ViewBoardComponent} from './components/view-board/view-board.component';
import {NotificationsService} from '../services/notifications.service';
import {NotificationType} from '../services/notification-type.enum';
import {AccountService} from '../account.service';
import {Store, select} from '@ngrx/store';
import * as authActions from '../store/actions/board.actions';

export interface Board {
  owner: string;
  guardian: string;
  adoptedBy: string;
  urn: string;
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
  displayedColumns: string[] = ['position', 'type', 'status', 'name', 'symbol', 'longitude', 'menu'];
  dataSource: any;
  boards: Array<Board>;
  selection = new SelectionModel<Board>(allowMultiSelect, initialSelection);
  boardType: number;
  isLoggedIn = false;
  isAdmin = false;
  isLoading = false;
  showBeachCleanBoards = true;
  showLitterPickBoards = true;
  showStreetCleanBoards = true;


  @ViewChild(MatInput) filterInput: MatInput;

  constructor(
    private boardsService: BoardsService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private accountService: AccountService,
    private notificationService: NotificationsService,
    private store: Store<Board[]>) { }
  getBoards() {

    this.isLoggedIn = this.accountService.getKey() !== '' && this.accountService.getKey() != null ;
    this.isAdmin = this.accountService.isAdmin();

    this.isLoading = true;

    this.store.pipe(select((state: any) => state.board.boards)).subscribe((boards: any) => {
      this.isLoading = false;
      this.boards = boards;
      this.dataSource = new MatTableDataSource(this.boards);
      this.applyFilter(this.filterInput.value);
    });


    // this.boardsService.getBoards(-1).subscribe((data:  Array<Board>) => {
    //   this.isLoading = false;
    //
    //   const filteredBoards = new Array<Board>();
    //   this.boards = [];
    //   data.forEach((board) => {
    //     console.log(board.boardType);
    //     switch (board.boardType) {
    //       case 0:
    //         if (this.showBeachCleanBoards)
    //         {
    //           filteredBoards.push(board);
    //         }
    //         break;
    //       case 1:
    //         if (this.showLitterPickBoards)
    //         {
    //           filteredBoards.push(board);
    //         }
    //         break;
    //       case 2:
    //         if (this.showStreetCleanBoards)
    //         {
    //           filteredBoards.push(board);
    //         }
    //         break;
    //     }
    //   });
    //
    //   // this.boards  =  filteredBoards;
    //
    //   this.dataSource = new MatTableDataSource(filteredBoards);
    //
    //   this.applyFilter(this.filterInput.value);
    // }, (error) => {
    //   this.notificationService.showNotification(`Sorry. We are unable to get the boards at this time. Please try later`, NotificationType.Error);
    // });
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
        this.notificationService.showNotification('Your board has been added. Thank you.', NotificationType.Success);
        this.store.dispatch(new authActions.LoadBoards());
        // this.getBoards();
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
          // this.getBoards();
          this.store.dispatch(new authActions.LoadBoards());
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
        this.store.dispatch(new authActions.LoadBoards());
        // this.getBoards();
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

    // this.router.navigate([`board/${board.boardId}`]);

    const dialogRef = this.dialog.open(ViewBoardComponent, {
      width: '600px',
      data: board
    });

    dialogRef.afterClosed().subscribe((edited: boolean) => { });
  }

  assignGuardians(board: Board) {
    this.router.navigate([`admin/board-guardians/${board.boardId}`]);
  }

  assignGuardianAngels(board: Board) {
    this.router.navigate([`admin/board-guardian-angels/${board.boardId}`]);
  }

  ngOnInit() {

    this.getBoards();


    // this.route.params.subscribe(params => {
    //   this.boardType = +params['filter']; // (+) converts string 'id' to a number
    //   this.getBoards();
    //   // In a real app: dispatch action to load the details here.
    // }, () =>{
    //   this.isLoading = false;
    // });


    this.accountService.loggedIn.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
      // this.getBoards();

      this.store.pipe(select((state: any) => state.board.boards)).subscribe((boards: any) => {
        this.boards = boards;
      });
      // this.store.select(state => state).subscribe((test) => {
      //   console.log('dd', test)
      // });



    }, () => {
      this.isLoading = false;
    });
  }

}
