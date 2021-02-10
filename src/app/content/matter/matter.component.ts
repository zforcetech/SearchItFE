import { Component, Input, OnInit } from '@angular/core';
import { Celebrity } from 'src/app/model/Celebrity';

@Component({
  selector: 'app-matter',
  templateUrl: './matter.component.html',
  styleUrls: ['./matter.component.scss']
})
export class MatterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() public celebImage: string;
  @Input() public showImage: boolean;
  @Input("results") public celebs: Celebrity[];
@Input()public defaultText: string;
}
