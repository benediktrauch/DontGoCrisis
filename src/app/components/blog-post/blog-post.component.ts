import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  @Input() blogPost: any;
  constructor() { }

  ngOnInit(): void {
    console.log('this.blogPost', this.blogPost);
  }

}
