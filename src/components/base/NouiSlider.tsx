import { useEffect, useRef } from 'react';
import noUiSlider, { API, Options } from 'nouislider';

export interface NouiSliderProps {
  /** Classes on the slider root — gold puts the phoenix variant classes here
   *  (`noUi-primary-lighter noUi-handle-primary noUi-slider-slim noUi-handle-circle` …). */
  className?: string;
  /** Same shape the gold passes via `data-nouislider`. */
  options?: Partial<Options>;
  /** Same as the gold `data-nouislider-values` label array — enables the
   *  stepped label mode (`45m` … `55m`). */
  values?: string[];
  /** Shorthand for `options.range` / `options.start` */
  min?: number;
  max?: number;
  defaultValues?: number[];
  onChange?: (values: (number | string)[]) => void;
}

/**
 * Wraps the real noUiSlider plugin the gold pages initialise from
 * `[data-nouislider]` (src/js/theme/nouislider.js), with the same defaults, so
 * DOM and skin (`assets/css/plugins/nouislider.css`) match 1:1.
 */
const NouiSlider = ({
  className,
  options,
  values,
  min,
  max,
  defaultValues,
  onChange
}: NouiSliderProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<API | null>(null);

  useEffect(() => {
    if (!ref.current) return undefined;

    const defaultOptions: Options =
      values && values.length
        ? {
            start: [values[0]],
            connect: true,
            step: 1,
            range: { min: 0, max: values.length - 1 },
            tooltips: true,
            format: {
              to: (value: number) => values[Math.round(value)],
              from: (value: string) => values.indexOf(value)
            }
          }
        : {
            start: [10],
            connect: [true, false],
            step: 1,
            range: { min: 0, max: 100 },
            tooltips: true
          };

    const shorthand: Partial<Options> = {};
    if (min !== undefined || max !== undefined) {
      shorthand.range = { min: min ?? 0, max: max ?? 100 };
    }
    if (defaultValues) shorthand.start = defaultValues;

    const slider = noUiSlider.create(ref.current, {
      ...defaultOptions,
      ...shorthand,
      ...options
    } as Options);
    if (onChange) {
      slider.on('update', vals => onChange(vals as (number | string)[]));
    }
    sliderRef.current = slider;

    return () => {
      slider.destroy();
      sliderRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className={className} ref={ref} />;
};

export default NouiSlider;
