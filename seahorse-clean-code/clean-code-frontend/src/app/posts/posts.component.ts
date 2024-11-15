import { HttpClient } from "@angular/common/http";
import { Component, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: 'app-posts',
  template: `<ul><li *ngFor="let post of posts">{{ post.title }}</li></ul>`,
})
export class PostsComponent {
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  private loadPosts(): void {
    this.postService.getPosts().subscribe((data) => (this.posts = data));
  }
}

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}

interface Post {
  id: number;
  title: string;
  body: string;
}
