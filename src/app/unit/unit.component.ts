import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import "rxjs/add/operator/map";

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  id;

  constructor(route:ActivatedRoute) {
    this.id = route.params.map((p:any) => p.id);
  }

  ngOnInit() {
  }

}
