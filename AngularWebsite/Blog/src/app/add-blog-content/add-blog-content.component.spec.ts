import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlogContentComponent } from './add-blog-content.component';

describe('AddBlogContentComponent', () => {
  let component: AddBlogContentComponent;
  let fixture: ComponentFixture<AddBlogContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBlogContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBlogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
