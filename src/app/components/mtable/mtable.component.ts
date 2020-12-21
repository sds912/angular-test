import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from './../../_models/element';


@Component({
  selector: 'app-mtable',
  templateUrl: './mtable.component.html',
  styleUrls: ['./mtable.component.scss']
})
export class MtableComponent implements AfterViewInit , OnInit{
  @Input() data!: PeriodicElement[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void{
   this.dataSource = new MatTableDataSource<PeriodicElement>(this.data);

  }
}



