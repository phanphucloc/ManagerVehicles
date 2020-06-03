import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLoadingCenter]',
  exportAs: "drLoadingCenter"
})
export class LoadingCenterDirective {

  private listStyleElBackground = [
    {
      key: "position",
      value: "absolute",
    },
    {
      key: "width",
      value: "100%",
    },
    {
      key: "height",
      value: "100%",
    },
    {
      key: "background-color",
      value: "#00000082",
    },
    {
      key: "z-index",
      value: "1",
    },
    {
      key: "left",
      value: "0px",
    },
    {
      key: "top",
      value: "0px",
    },
    {
      key: "animation",
      value: "FadeIn ease-in-out",
    },
    {
      key: "animation-duration",
      value: ".6s",
    }
  ]

  private listStyleElIcon = [
    {
      key: "position",
      value: "absolute",
    },
    {
      key: "z-index",
      value: "1",
    },
    {
      key: "left",
      value: "50%",
    },
    {
      key: "top",
      value: "50%",
    },
    {
      key: "transform",
      value: "translate(-50%, -50%)",
    },
    {
      key: "font-size",
      value: "40px",
    },
    {
      key: "color",
      value: "white",
    },
  ]

  private elBackground: any;
  constructor(
    private eleRef: ElementRef,
    private render: Renderer2
  ) { }


  //Show loading at position center
  showloadingCenter(): void {

    //Creacte and setup element background
    this.elBackground = this.render.createElement('div');
    this.render.addClass(this.elBackground, 'bg-black');
    this.setStyleMuti(this.elBackground, this.listStyleElBackground);

    //Creacte and setup element icon
    var elIcon = this.render.createElement('i');
    this.addClassMuti(elIcon, ["fa", "fa-spinner", "fa-spin", "fa-fw"]);
    this.setStyleMuti(elIcon, this.listStyleElIcon);

    this.render.appendChild(this.elBackground, elIcon);

    //Setup element showloading
    this.render.setStyle(this.eleRef.nativeElement, 'position', 'relative');
    this.render.setStyle(this.eleRef.nativeElement, 'min-height', '300px');
    this.render.appendChild(this.eleRef.nativeElement, this.elBackground);

  }


  //Hide loading at position center
  hideloadingCenter(): void {
    //Setup element hide loading
    this.render.removeChild(this.eleRef.nativeElement, this.elBackground)
    this.render.removeStyle(this.eleRef.nativeElement, 'position');
    this.render.removeStyle(this.eleRef.nativeElement, 'min-height');

  }


  //Set multiple styles for the element 
  setStyleMuti(ele: any, arrayStyle: Array<Object>): void {
    arrayStyle.forEach((item: any, index: Number) => {
      this.render.setStyle(ele, item.key, item.value);
    })
  }

  //Add multiple class  for the element 
  addClassMuti(ele: any, arrayStyle: Array<string>): void {
    arrayStyle.forEach((item: string, index: Number) => {
      this.render.addClass(ele, item);
    })
  }
}
