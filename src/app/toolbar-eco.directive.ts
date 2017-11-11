import { Directive,  ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
	selector: '[toolbareco]'
})


export class ToolbarEcoDirective {

	constructor(private _el: ElementRef, private _renderer: Renderer2) {
		console.log(_el);
	}

	@HostListener("window:scroll", [])
	onWindowScroll() {
		let number = window.pageYOffset || document.documentElement.scrollTop;

		if (number > 500) {
			this.putClass(true);
		}else{
			this.putClass(false);
		}
	}	

	putClass(value: boolean) {
		if (value) {
			this._renderer.removeClass(this._el.nativeElement, "header-toolbar");
			this._renderer.addClass(this._el.nativeElement, 'header-toolbar-colored');
		}else{
			this._renderer.removeClass(this._el.nativeElement, 'header-toolbar-colored');
			this._renderer.addClass(this._el.nativeElement, "header-toolbar");
		}	
	}

}
