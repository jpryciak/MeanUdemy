import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newPost = 'NO CONTENT';
  enteredValue = '';
  onAddPost(postInput: HTMLTextAreaElement){
    this.newPost = this.enteredValue;
  }
}
