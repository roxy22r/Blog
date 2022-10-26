import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllBlogTopicsComponent } from './list-all-blog-topics.component';

describe('ListAllBlogTopicsComponent', () => {
  let component: ListAllBlogTopicsComponent;
  let fixture: ComponentFixture<ListAllBlogTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllBlogTopicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllBlogTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
