import {
  Children,
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactElement,
  type ReactNode
} from 'react';

interface Position {
  x: number;
  y: number;
}

interface LayoutState {
  positions: Position[];
  height: number;
}

/** `.row` is a 12 column grid; every gallery item spans a whole number of them. */
const COLUMNS = 12;

/**
 * packery's "first fit, top-left" placement over a 12 column skyline:
 * for every item pick the left-most slot whose highest occupied edge is the
 * lowest, place the item there and raise the skyline underneath it.
 * `boxes[i].h` must include the item's `margin-top` (the `.row` gutter),
 * exactly like packery measures outer size.
 */
const packLayout = (
  boxes: { w: number; h: number }[],
  containerWidth: number
): LayoutState => {
  const unit = containerWidth / COLUMNS;
  const skyline = new Array<number>(COLUMNS).fill(0);
  const positions = boxes.map(box => {
    const span = Math.min(COLUMNS, Math.max(1, Math.round(box.w / unit) || 1));
    let bestSlot = 0;
    let bestY = Infinity;
    for (let slot = 0; slot + span <= COLUMNS; slot += 1) {
      let y = 0;
      for (let k = slot; k < slot + span; k += 1) y = Math.max(y, skyline[k]);
      // strict `<` keeps the left-most slot on ties, like packery's rect sort
      if (y < bestY - 0.001) {
        bestY = y;
        bestSlot = slot;
      }
    }
    for (let k = bestSlot; k < bestSlot + span; k += 1) {
      skyline[k] = bestY + box.h;
    }
    return { x: bestSlot * unit, y: bestY };
  });
  return { positions, height: Math.max(0, ...skyline) };
};

export interface PackeryGridProps {
  /** gold container classes, e.g. `row g-4` */
  className: string;
  id?: string;
  /** rendered after the positioned items (gold column separators) */
  after?: ReactNode;
  children: ReactNode;
}

/**
 * Static React port of the gold's isotope + packery grid
 * (`[data-sl-isotope]`, see phoenix-tailwind `src/js/theme/isotope.js`).
 * The children keep the gold `.row > .col-*` markup verbatim; this component
 * only measures them and applies packery's absolute placement, so the gallery
 * pages pack exactly like the static theme.
 */
const PackeryGrid = ({ className, id, after, children }: PackeryGridProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const [layout, setLayout] = useState<LayoutState | null>(null);

  const items = Children.toArray(children).filter(isValidElement);
  const count = items.length;

  const measure = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const elements = itemRefs.current.slice(0, count);
    if (elements.some(el => !el)) return;
    const boxes = (elements as HTMLElement[]).map(el => {
      const rect = el.getBoundingClientRect();
      const marginTop = parseFloat(getComputedStyle(el).marginTop) || 0;
      return { w: rect.width, h: rect.height + marginTop };
    });
    const next = packLayout(boxes, container.clientWidth);
    setLayout(prev =>
      prev &&
      prev.height === next.height &&
      prev.positions.length === next.positions.length &&
      prev.positions.every(
        (p, i) => p.x === next.positions[i].x && p.y === next.positions[i].y
      )
        ? prev
        : next
    );
  }, [count]);

  useLayoutEffect(() => {
    measure();
  }, [measure]);

  // images decode after the first paint and the columns are fluid: keep the
  // skyline in sync with whatever the browser ends up rendering.
  useEffect(() => {
    const container = containerRef.current;
    const observer = new ResizeObserver(() => measure());
    itemRefs.current.slice(0, count).forEach(el => el && observer.observe(el));
    if (container) {
      observer.observe(container);
      // `load` does not bubble — listen on the capture phase
      container.addEventListener('load', measure, true);
    }
    return () => {
      observer.disconnect();
      container?.removeEventListener('load', measure, true);
    };
  }, [measure, count]);

  return (
    <div
      ref={containerRef}
      id={id}
      className={className}
      style={
        layout
          ? { position: 'relative', height: layout.height }
          : // first pass measures the items in flow — `stretch` would report the
            // flex line height instead of each item's own height
            { alignItems: 'flex-start' }
      }
    >
      {items.map((item, index) => {
        const position = layout?.positions[index];
        const element = item as ReactElement<{
          style?: CSSProperties;
          ref?: (node: HTMLElement | null) => void;
        }>;
        return cloneElement(element, {
          ref: (node: HTMLElement | null) => {
            itemRefs.current[index] = node;
          },
          style: {
            ...element.props.style,
            ...(position
              ? {
                  position: 'absolute' as const,
                  left: 0,
                  top: 0,
                  transform: `translate(${position.x}px, ${position.y}px)`
                }
              : null)
          }
        });
      })}
      {after}
    </div>
  );
};

export default PackeryGrid;
