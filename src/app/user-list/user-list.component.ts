import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() names: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
