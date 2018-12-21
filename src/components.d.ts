/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface KetchupBtn {
    'borderColor': string;
    'buttonClass': string;
    'buttons': any[];
    'fillspace': boolean;
    'flat': boolean;
    'horizontal': boolean;
    'rounded': boolean;
    'showicon': boolean;
    'showtext': boolean;
    'textmode': string;
    'transparent': boolean;
  }
  interface KetchupBtnAttributes extends StencilHTMLAttributes {
    'borderColor'?: string;
    'buttonClass'?: string;
    'buttons'?: any[];
    'fillspace'?: boolean;
    'flat'?: boolean;
    'horizontal'?: boolean;
    'rounded'?: boolean;
    'showicon'?: boolean;
    'showtext'?: boolean;
    'textmode'?: string;
    'transparent'?: boolean;
  }

  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface MyComponentAttributes extends StencilHTMLAttributes {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }

  interface KetchupButton {
    'borderColor': string;
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
    'borderColor'?: string;
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
    'MyComponent': Components.MyComponent;
    'KetchupButton': Components.KetchupButton;
    'SmeupMat': Components.SmeupMat;
  }

  interface StencilIntrinsicElements {
    'ketchup-btn': Components.KetchupBtnAttributes;
    'my-component': Components.MyComponentAttributes;
    'ketchup-button': Components.KetchupButtonAttributes;
    'smeup-mat': Components.SmeupMatAttributes;
  }


  interface HTMLKetchupBtnElement extends Components.KetchupBtn, HTMLStencilElement {}
  var HTMLKetchupBtnElement: {
    prototype: HTMLKetchupBtnElement;
    new (): HTMLKetchupBtnElement;
  };

  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
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
    'my-component': HTMLMyComponentElement
    'ketchup-button': HTMLKetchupButtonElement
    'smeup-mat': HTMLSmeupMatElement
  }

  interface ElementTagNameMap {
    'ketchup-btn': HTMLKetchupBtnElement;
    'my-component': HTMLMyComponentElement;
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
