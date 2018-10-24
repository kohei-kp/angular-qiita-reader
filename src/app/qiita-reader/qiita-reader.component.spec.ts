import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QiitaReaderComponent } from './qiita-reader.component';

describe('QiitaReaderComponent', () => {
  let component: QiitaReaderComponent;
  let fixture: ComponentFixture<QiitaReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QiitaReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QiitaReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
