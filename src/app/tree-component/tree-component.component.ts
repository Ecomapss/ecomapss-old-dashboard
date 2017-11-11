import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-tree-component',
	templateUrl: './tree-component.component.html',
	styleUrls: ['./tree-component.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class TreeComponentComponent implements OnInit {

	title = "Tres"

	constructor() { }

	ngOnInit() {

	}


}


