import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiledragndropComponent } from './filedragndrop.component';

describe('FiledragndropComponent', () => {
  let component: FiledragndropComponent;
  let fixture: ComponentFixture<FiledragndropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiledragndropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiledragndropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
