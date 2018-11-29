/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

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

  interface SmeupMat {
    'columns': any[];
    'rows': any[];
  }
  interface SmeupMatAttributes extends StencilHTMLAttributes {
    'columns'?: any[];
    'rows'?: any[];
  }
}

declare global {
  interface StencilElementInterfaces {
    'MyComponent': Components.MyComponent;
    'SmeupMat': Components.SmeupMat;
  }

  interface StencilIntrinsicElements {
    'my-component': Components.MyComponentAttributes;
    'smeup-mat': Components.SmeupMatAttributes;
  }


  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLSmeupMatElement extends Components.SmeupMat, HTMLStencilElement {}
  var HTMLSmeupMatElement: {
    prototype: HTMLSmeupMatElement;
    new (): HTMLSmeupMatElement;
  };

  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement
    'smeup-mat': HTMLSmeupMatElement
  }

  interface ElementTagNameMap {
    'my-component': HTMLMyComponentElement;
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
