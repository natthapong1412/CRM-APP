import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-deal-form',
  templateUrl: './deal-form.component.html',
  styleUrls: ['./deal-form.component.scss']
})
export class DealFormComponent implements OnInit {
  @Input() model: any
  constructor() { }

  ngOnInit(): void {
  }

}
