import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from 'src/app/_models/element';
import { ElementService } from 'src/app/_services/element.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor(private elementService: ElementService) { }

  elementData! : PeriodicElement[];

  ngOnInit(): void {
    this.elementData = this.elementService.getAll();
    
  }

}
