import { Component, OnInit } from '@angular/core';
import { QiitaService } from '../qiita.service';

@Component({
  selector: 'app-qiita-reader',
  templateUrl: './qiita-reader.component.html',
  styleUrls: ['./qiita-reader.component.css']
})
export class QiitaReaderComponent implements OnInit {
  qiitaPostList: Array<any> = [];
  selectedPostContent: any = {};

  constructor(private qiitaService: QiitaService) { }

  ngOnInit() {
    this.getQiitaPost();
  }

  getQiitaPost() {
    this.qiitaService.getQiitaPost()
        .subscribe(qiitaPostList => this.qiitaPostList = qiitaPostList);
  }

  updateSelectedPostContent(id: string) {
    this.selectedPostContent = this.qiitaPostList.find(post => post.id === id) || {};
  }
}
