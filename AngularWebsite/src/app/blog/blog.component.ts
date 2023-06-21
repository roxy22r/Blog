import { Component, Inject, OnInit} from '@angular/core';
import { BlogItem, BlogService } from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})


export class BlogComponent implements OnInit {
  blogItems:BlogItem[] = []


  constructor(@Inject(BlogService) private service:BlogService) { }

   async ngOnInit(): Promise<void>{
    this.blogItems = await this.service.getAll();
  }

}
