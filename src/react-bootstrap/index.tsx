/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * TEMPORARY SHIM — TODO(hb-migration): delete once no file imports
 * 'react-bootstrap' any more.
 *
 * The real package has been removed. The `"*": ["./src/*"]` path mapping in
 * tsconfig makes `import … from 'react-bootstrap'` resolve here, so pages that
 * are not migrated yet still compile and render (unstyled, with bare HTML
 * elements) instead of breaking the whole dev/build bundle.
 *
 * Every export is a plain passthrough element: `className`, `style`, DOM
 * handlers and data/aria attributes are forwarded; Bootstrap-specific props
 * (variant, bg, size, breakpoints …) are dropped. Sub-components (Card.Body,
 * Form.Control, Dropdown.Item …) are created lazily via a Proxy.
 */
import React from 'react';

type AnyProps = Record<string, any>;
type Tag = keyof React.JSX.IntrinsicElements;

const DOM_PROP = /^(on[A-Z]|data-|aria-)/;
const DOM_ALLOW = new Set([
  'className',
  'style',
  'id',
  'children',
  'href',
  'target',
  'rel',
  'type',
  'role',
  'tabIndex',
  'title',
  'placeholder',
  'value',
  'defaultValue',
  'checked',
  'defaultChecked',
  'disabled',
  'readOnly',
  'required',
  'name',
  'htmlFor',
  'src',
  'alt',
  'width',
  'height',
  'rows',
  'cols',
  'min',
  'max',
  'step',
  'autoFocus',
  'autoComplete',
  'key'
]);

const pickDomProps = (props: AnyProps) => {
  const out: AnyProps = {};
  for (const key of Object.keys(props)) {
    if (DOM_ALLOW.has(key) || DOM_PROP.test(key)) out[key] = props[key];
  }
  return out;
};

interface ShimOptions {
  /** Render nothing unless this boolean prop is true (Modal.show, Collapse.in…) */
  gate?: string;
  /** Sub-component tags, e.g. { Control: 'input' } */
  parts?: Record<string, Tag>;
}

const make = (tag: Tag = 'div', name = 'Shim', options: ShimOptions = {}): any => {
  const Component = React.forwardRef<any, AnyProps>(function ShimComponent(
    { as, children, ...props },
    ref
  ) {
    if (options.gate && props[options.gate] === false) return null;
    const Element: any = as || tag;
    return (
      <Element ref={ref} {...pickDomProps(props)}>
        {children}
      </Element>
    );
  });
  Component.displayName = name;

  return new Proxy(Component, {
    get(target: any, key) {
      if (key in target) return target[key];
      if (typeof key === 'string' && /^[A-Z]/.test(key)) {
        const sub = make(options.parts?.[key] ?? 'div', `${name}.${key}`);
        target[key] = sub;
        return sub;
      }
      return undefined;
    }
  });
};

export const Accordion = make('div', 'Accordion', { parts: { Button: 'button' } });
export const Alert = make('div', 'Alert');
export const Badge = make('span', 'Badge');
export const Breadcrumb = make('nav', 'Breadcrumb', { parts: { Item: 'li' } });
export const Button = make('button', 'Button');
export const ButtonGroup = make('div', 'ButtonGroup');
export const Card = make('div', 'Card', { parts: { Title: 'h5', Img: 'img' } });
export const Carousel = make('div', 'Carousel');
export const Col = make('div', 'Col');
export const Collapse = make('div', 'Collapse', { gate: 'in' });
export const Container = make('div', 'Container');
export const Dropdown = make('div', 'Dropdown', {
  parts: { Toggle: 'button', Item: 'a', Menu: 'div', Divider: 'hr', Header: 'h6' }
});
export const Fade = make('div', 'Fade', { gate: 'in' });
export const FloatingLabel = make('div', 'FloatingLabel');
export const Form = make('form', 'Form', {
  parts: {
    Control: 'input',
    Select: 'select',
    Label: 'label',
    Text: 'span',
    Check: 'div',
    Group: 'div',
    Range: 'input',
    Switch: 'input'
  }
});
// Form.Check.Input / Form.Check.Label
Form.Check = make('div', 'Form.Check', { parts: { Input: 'input', Label: 'label' } });
export const FormCheck = Form.Check;
export const FormControl = make('input', 'FormControl');
export const FormSelect = make('select', 'FormSelect');
export const InputGroup = make('div', 'InputGroup', { parts: { Text: 'span' } });
export const ListGroup = make('ul', 'ListGroup', { parts: { Item: 'li' } });
export const Modal = make('div', 'Modal', {
  gate: 'show',
  parts: { Title: 'h5' }
});
export const Nav = make('ul', 'Nav', { parts: { Item: 'li', Link: 'a' } });
export const NavItem = make('li', 'NavItem');
export const NavLink = make('a', 'NavLink');
export const Navbar = make('nav', 'Navbar', {
  parts: { Brand: 'a', Toggle: 'button' }
});
export const Offcanvas = make('div', 'Offcanvas', {
  gate: 'show',
  parts: { Title: 'h5' }
});
export const OverlayTrigger = ({ children }: AnyProps) => <>{children}</>;
export const Overlay = ({ children }: AnyProps) => <>{children}</>;
export const Pagination = make('ul', 'Pagination', {
  parts: { Item: 'li', Prev: 'li', Next: 'li', First: 'li', Last: 'li', Ellipsis: 'li' }
});
export const Popover = make('div', 'Popover');
export const ProgressBar = make('div', 'ProgressBar');
export const Row = make('div', 'Row');
export const Spinner = make('span', 'Spinner');
export const Stack = make('div', 'Stack');
export const Tab = make('div', 'Tab', { parts: { Pane: 'div' } });
export const Tabs = make('div', 'Tabs');
export const Table = make('table', 'Table');
export const Toast = make('div', 'Toast', { gate: 'show' });
export const ToastContainer = make('div', 'ToastContainer');
export const Tooltip = make('div', 'Tooltip');

export type TableProps = AnyProps;
export type NavLinkProps = AnyProps;
export type NavProps = AnyProps;
export type ColProps = AnyProps;
export type ContainerProps = AnyProps;
export type FormControlProps = AnyProps;
export type FloatingLabelProps = AnyProps;
export type FormCheckProps = AnyProps;

/** No-op stand-in for react-bootstrap's accordion hook. */
export const useAccordionButton =
  (_eventKey?: string, onClick?: (e: React.MouseEvent) => void) =>
  (e: React.MouseEvent) =>
    onClick?.(e);
