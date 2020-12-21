import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../_models/post';
import { PostService } from '../../_services/post.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  
  @Input() post!: Post;
  @Input() index!: number;



  constructor(public postService: PostService, private router: Router) { }
    
  ngOnInit(): void {

    
  }

  onDelete(id: number){
    this.postService.delete(id).subscribe((res) => {
      console.log(res)
      this.router.navigate(['/'])
    })
  }

}
