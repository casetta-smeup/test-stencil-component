/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface KetchupBtn {
    'align': string;
    'borderColor': string;
    'btnStyle': any;
    'buttonClass': string;
    'buttons': any[];
    'columns': number;
    'fillspace': boolean;
    'flat': boolean;
    'horizontal': boolean;
    'rounded': boolean;
    'showSelection': boolean;
    'showicon': boolean;
    'showtext': boolean;
    'textmode': string;
    'transparent': boolean;
  }
  interface KetchupBtnAttributes extends StencilHTMLAttributes {
    'align'?: string;
    'borderColor'?: string;
    'btnStyle'?: any;
    'buttonClass'?: string;
    'buttons'?: any[];
    'columns'?: number;
    'fillspace'?: boolean;
    'flat'?: boolean;
    'horizontal'?: boolean;
    'rounded'?: boolean;
    'showSelection'?: boolean;
    'showicon'?: boolean;
    'showtext'?: boolean;
    'textmode'?: string;
    'transparent'?: boolean;
  }

  interface KetchupCal {
    'initialDate': Date;
    'showNavigation': boolean;
    'showWeek': false;
  }
  interface KetchupCalAttributes extends StencilHTMLAttributes {
    'initialDate'?: Date;
    'onEventClicked'?: (event: CustomEvent) => void;
    'showNavigation'?: boolean;
    'showWeek'?: false;
  }

  interface KetchupCnd {
    'value': number;
  }
  interface KetchupCndAttributes extends StencilHTMLAttributes {
    'onCountdownEnded'?: (event: CustomEvent) => void;
    'value'?: number;
  }

  interface KetchupButton {
    'align': string;
    'borderColor': string;
    'btnStyle': any;
    'buttonClass': string;
    'fillspace': boolean;
    'flat': boolean;
    'iconClass': string;
    'label': string;
    'rounded': boolean;
    'showicon': boolean;
    'showtext': boolean;
    'textmode': string;
    'transparent': boolean;
  }
  interface KetchupButtonAttributes extends StencilHTMLAttributes {
    'align'?: string;
    'borderColor'?: string;
    'btnStyle'?: any;
    'buttonClass'?: string;
    'fillspace'?: boolean;
    'flat'?: boolean;
    'iconClass'?: string;
    'label'?: string;
    'onBtnClicked'?: (event: CustomEvent) => void;
    'rounded'?: boolean;
    'showicon'?: boolean;
    'showtext'?: boolean;
    'textmode'?: string;
    'transparent'?: boolean;
  }

  interface SmeupMat {
    'columns': any[];
    'filterable': boolean;
    'rows': any[];
    'sortable': boolean;
  }
  interface SmeupMatAttributes extends StencilHTMLAttributes {
    'columns'?: any[];
    'filterable'?: boolean;
    'onOnCellClicked'?: (event: CustomEvent) => void;
    'rows'?: any[];
    'sortable'?: boolean;
  }
}

declare global {
  interface StencilElementInterfaces {
    'KetchupBtn': Components.KetchupBtn;
    'KetchupCal': Components.KetchupCal;
    'KetchupCnd': Components.KetchupCnd;
    'KetchupButton': Components.KetchupButton;
    'SmeupMat': Components.SmeupMat;
  }

  interface StencilIntrinsicElements {
    'ketchup-btn': Components.KetchupBtnAttributes;
    'ketchup-cal': Components.KetchupCalAttributes;
    'ketchup-cnd': Components.KetchupCndAttributes;
    'ketchup-button': Components.KetchupButtonAttributes;
    'smeup-mat': Components.SmeupMatAttributes;
  }


  interface HTMLKetchupBtnElement extends Components.KetchupBtn, HTMLStencilElement {}
  var HTMLKetchupBtnElement: {
    prototype: HTMLKetchupBtnElement;
    new (): HTMLKetchupBtnElement;
  };

  interface HTMLKetchupCalElement extends Components.KetchupCal, HTMLStencilElement {}
  var HTMLKetchupCalElement: {
    prototype: HTMLKetchupCalElement;
    new (): HTMLKetchupCalElement;
  };

  interface HTMLKetchupCndElement extends Components.KetchupCnd, HTMLStencilElement {}
  var HTMLKetchupCndElement: {
    prototype: HTMLKetchupCndElement;
    new (): HTMLKetchupCndElement;
  };

  interface HTMLKetchupButtonElement extends Components.KetchupButton, HTMLStencilElement {}
  var HTMLKetchupButtonElement: {
    prototype: HTMLKetchupButtonElement;
    new (): HTMLKetchupButtonElement;
  };

  interface HTMLSmeupMatElement extends Components.SmeupMat, HTMLStencilElement {}
  var HTMLSmeupMatElement: {
    prototype: HTMLSmeupMatElement;
    new (): HTMLSmeupMatElement;
  };

  interface HTMLElementTagNameMap {
    'ketchup-btn': HTMLKetchupBtnElement
    'ketchup-cal': HTMLKetchupCalElement
    'ketchup-cnd': HTMLKetchupCndElement
    'ketchup-button': HTMLKetchupButtonElement
    'smeup-mat': HTMLSmeupMatElement
  }

  interface ElementTagNameMap {
    'ketchup-btn': HTMLKetchupBtnElement;
    'ketchup-cal': HTMLKetchupCalElement;
    'ketchup-cnd': HTMLKetchupCndElement;
    'ketchup-button': HTMLKetchupButtonElement;
    'smeup-mat': HTMLSmeupMatElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
