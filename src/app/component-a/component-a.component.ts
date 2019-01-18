import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {
  public someoneText = 'Lorem    ipsum    dolor    sit    amet    consectetur    adipisicing elit  Blanditiis qui.';

  ngOnInit() {
  }

}
