import { Component, OnInit } from '@angular/core';
import { PostService } from '../../_services/post.service';
import { Post } from '../../_models/post';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  posts: Array<Post> = [];


  constructor(private postService: PostService ) { 

   
  }
  ngOnInit(): void {
    this.postService.findAll().subscribe((posts: Array<Post>) => {
    
      this.posts = posts

    })
  }

 

}
