import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogItem } from '../blog/blog.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
})
export class BlogPostComponent {
  item: BlogItem = { id: '', title: 'NOT FOUND', content: '' };
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    //console.log(history.state);
    this.item = history.state;
  }
}
