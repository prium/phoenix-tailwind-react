import { useEffect, useRef } from 'react';
import { create, type API, type Options } from 'nouislider';
import { cn } from '@hummingbirdui/react';

export interface PhoenixSliderProps {
  /** noUiSlider options, deep-merged over the theme defaults. */
  options?: Partial<Options>;
  /**
   * Discrete values to step through, the equivalent of the gold's
   * `data-nouislider-values`. Replaces `range`/`format` with an index-based
   * scale that reports the label rather than the number.
   */
  values?: (string | number)[];
  onChange?: (values: (string | number)[]) => void;
  onUpdate?: (values: (string | number)[]) => void;
  className?: string;
}

/**
 * noUiSlider, rendered with the phoenix `.noUi-*` skin in
 * `assets/css/plugins/nouislider.css`.
 *
 * The skin is the only slider styling this project ships: hb-react's `Slider`
 * emits `.slider` / `.slider-track` / `.slider-range` / `.slider-thumb`, none
 * of which has CSS in hummingbird, in the copied phoenix CSS, or in hb-react's
 * own stylesheet — so it would render unstyled. Put the colour and size on the
 * wrapper with the gold's classes: `noUi-primary`, `noUi-success`, `noUi-info`,
 * `noUi-warning`, `noUi-danger`, `noUi-primary-lighter`, `noUi-target-primary`,
 * `noUi-handle-primary`, `noUi-slider-slim|medium|large`, `noUi-handle-circle`.
 *
 * Defaults mirror `phoenix-tailwind/src/js/theme/nouislider.js`.
 */
const PhoenixSlider = ({
  options,
  values,
  onChange,
  onUpdate,
  className
}: PhoenixSliderProps) => {
  const ref = useRef<HTMLDivElement>(null);
  // The slider is uncontrolled once created, exactly as the gold's
  // `noUiSlider.create` from a data attribute is. Handlers and options live in
  // refs so a parent re-render — including the one caused by this slider's own
  // onChange — cannot tear it down and rebuild it mid-drag.
  const handlers = useRef({ onChange, onUpdate });
  handlers.current = { onChange, onUpdate };
  const initial = useRef({ options, values });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const { options, values } = initial.current;
    const defaults: Options =
      values && values.length
        ? {
            start: [0],
            connect: true,
            step: 1,
            range: { min: 0, max: values.length - 1 },
            tooltips: true,
            format: {
              to: value => values[Math.round(value)],
              from: value => values.indexOf(value as string | number)
            }
          }
        : {
            start: [10],
            connect: [true, false],
            step: 1,
            range: { min: 0, max: 100 },
            tooltips: true
          };

    // `_.merge(defaults, userOptions)` in the gold: `range` is the only nested
    // object either side sets, so a one-level merge of it is enough
    const merged = {
      ...defaults,
      ...options,
      range: { ...defaults.range, ...options?.range }
    } as Options;

    const slider = create(el, merged);
    const emit = (key: 'onChange' | 'onUpdate') => (v: (string | number)[]) =>
      handlers.current[key]?.(v);
    slider.on('change', emit('onChange'));
    slider.on('update', emit('onUpdate'));

    return () => {
      (el as HTMLDivElement & { noUiSlider?: API }).noUiSlider?.destroy();
    };
  }, []);

  return <div ref={ref} className={cn(className)} />;
};

export default PhoenixSlider;
