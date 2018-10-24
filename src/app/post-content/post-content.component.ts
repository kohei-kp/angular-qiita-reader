import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class PostContentComponent implements OnInit {
  @Input() selectedContent: any = {};

  constructor() { }

  ngOnInit() {
  }

  hasSelectedContent() {
    console.log(Object.keys(this.selectedContent).length);
    return Object.keys(this.selectedContent).length > 1;
  }

}
