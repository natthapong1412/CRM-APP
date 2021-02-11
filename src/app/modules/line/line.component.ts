import { LineService } from './line.service';
import { MatSidenav } from '@angular/material/sidenav';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {

  @ViewChild('drawer')drawer:MatSidenav;
  data: any[];

  constructor(public LineService: LineService) { }

  ngOnInit(): void {
    this.data = this.LineService.getUserdata();
  }

  toggle (){
    this.drawer.toggle()
  }
}
