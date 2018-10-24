import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() postList: Array<Object> = [];
  @Output() sendPostId: EventEmitter<string> = new EventEmitter();

  private selectedPostId: string = null;

  constructor() { }

  ngOnInit() {
  }

  handleClickPost(id: string): void {
    this.selectedPostId = id;
    this.sendPostId.emit(id);
  }

}
