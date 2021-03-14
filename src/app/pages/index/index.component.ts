import { Component, OnInit, ViewChild } from '@angular/core';
import {
  TIndexComponent as Template
} from '../../components/templates/t-index/t-index.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
})
export class IndexComponent implements OnInit {
  constructor(){}

  ngOnInit() {}

  @ViewChild(Template)
  private template: Template;

  get buttons() {
    return [
      {
        icon: 'assets/img/sns-icons/google.png',
        text: 'Google',
        onClick: () => {}
      },
      {
        icon: 'assets/img/sns-icons/github.png',
        text: 'Github',
        onClick: () => {}
      },
      {
        icon: 'assets/img/sns-icons/twitter.png',
        text: 'Twitter',
        onClick: () => {}
      },
    ]
  }
}
