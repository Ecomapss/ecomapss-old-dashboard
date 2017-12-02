import { Directive, ElementRef, Renderer2, HostListener } from "@angular/core";

@Directive({
  selector: "[appAppears]"
})

export class AppearsDirective {
  constructor(private _el: ElementRef, private _render: Renderer2) {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop;
    if (number > 500) {
      this.removeClass();
    }
  }
  removeClass() {
    this._render.removeClass(this._el.nativeElement, "disappear");
    this._render.addClass(this._el.nativeElement, "appear");
  }
}
