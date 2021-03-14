import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {
  TIndexComponent as Template
} from '../../components/templates/t-index/t-index.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
})
export class IndexComponent implements OnInit {
  constructor(
    public auth: AuthService
  ){}

  ngOnInit() {}

  @ViewChild(Template)
  private template: Template;

  get buttons() {
    return [
      {
        icon: 'assets/img/sns-icons/google.png',
        text: 'Google',
        onClick: () => this.auth.googleSignIn()
      },
      {
        icon: 'assets/img/sns-icons/github.png',
        text: 'Github',
        onClick: () => this.auth.gitHubSignIn()
      },
      {
        icon: 'assets/img/sns-icons/twitter.png',
        text: 'Twitter',
        onClick: () => this.auth.twitterSignIn()
      },
    ]
  }
}
