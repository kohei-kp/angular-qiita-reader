import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QiitaService {
  private qiitaApiUrl = 'https://qiita.com/api/v2';

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Qiitaの投稿一覧を取得する
   * @param page - ページ
   * @param perPage - 1ページで取得する記事数
   */
  getQiitaPost(page: number = 1, perPage: number = 20): Observable<any> {
    const url = `${this.qiitaApiUrl}/items`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError<any>('getQiitaPost'))
    );
  }

  /**
   * @param result - observableな結果として返す任意の値
   */
  private handleError<T> (result) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
