import { Component, OnInit, ViewEncapsulation, ViewChild } from "@angular/core";
import { WebConsumerService } from "../services/web-consumer.service";
import { MatPaginator, MatTableDataSource, MatSort } from "@angular/material";
import { Tree } from "../tree-component/classes/Tree";
import { MessageServiceService } from '../services/message-service.service';

@Component({
  selector: "app-tree-list",
  templateUrl: "./tree-list.component.html",
  styleUrls: ["./tree-list.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class TreeListComponent implements OnInit {
  displayedColumns = ["nome_cie", "categoria", "origem"];
  trees: Array<Tree>;
  dataSource: MatTableDataSource<Tree>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _webData: WebConsumerService, private _messageService: MessageServiceService) {
    this._messageService.listen().subscribe(result => {
      this.getData();
    })
  }

  ngOnInit() {
    this.getData();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  
  getData(): void {
    this._webData.getTrees().subscribe(trees => {
      let ElementData: Tree[] = trees.Data;
      console.log(ElementData);
      this.dataSource = new MatTableDataSource(ElementData);
    });
  }
}


