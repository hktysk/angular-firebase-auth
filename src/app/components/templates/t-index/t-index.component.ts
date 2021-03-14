import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-t-index',
  templateUrl: './t-index.component.html',
  styleUrls: ['./t-index.component.sass']
})
export class TIndexComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {}

  @Input()
  buttons = [];
}
