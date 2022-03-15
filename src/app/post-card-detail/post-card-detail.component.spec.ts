import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardDetailComponent } from './post-card-detail.component';

describe('PostCardDetailComponent', () => {
  let component: PostCardDetailComponent;
  let fixture: ComponentFixture<PostCardDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCardDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
