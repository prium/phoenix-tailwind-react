import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import generic5 from 'assets/img/generic/5.jpg';
import generic6 from 'assets/img/generic/6.jpg';
import generic7 from 'assets/img/generic/7.jpg';
import generic8 from 'assets/img/generic/8.jpg';
import generic9 from 'assets/img/generic/9.jpg';
import generic28 from 'assets/img/generic/28.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const exampleCode = `
<Carousel className="rounded-md overflow-hidden" opts={{ loop: true }}>
  <Carousel.Content style={{ '--carousel-item-spacing': '0px' }}>
    <Carousel.Item>
      <img className="block w-full" src={generic6} alt="First slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="block w-full" src={generic7} alt="Second slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="block w-full" src={generic8} alt="Third slide" />
    </Carousel.Item>
  </Carousel.Content>
  <Carousel.Previous />
  <Carousel.Next />
  <Carousel.Indicators />
</Carousel>
`;

const controlledCode = `
function ControlledCarousel() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    const update = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);
    };
    update();
    api.on('select', update);
    api.on('reInit', update);
    return () => {
      api.off('select', update);
      api.off('reInit', update);
    };
  }, [api]);

  return (
    <div>
      <Carousel setApi={setApi} className="rounded-md overflow-hidden">
        <Carousel.Content style={{ '--carousel-item-spacing': '0px' }}>
          <Carousel.Item>
            <img className="block w-full" src={generic6} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="block w-full" src={generic7} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="block w-full" src={generic8} alt="Third slide" />
          </Carousel.Item>
        </Carousel.Content>
      </Carousel>

      <div className="flex items-center justify-center gap-4 mt-4">
        <Button variant="outline" size="sm" onClick={() => api?.scrollPrev()}>
          Previous
        </Button>
        <span className="text-sm text-muted">
          Slide {current} of {count}
        </span>
        <Button variant="outline" size="sm" onClick={() => api?.scrollNext()}>
          Next
        </Button>
      </div>
    </div>
  );
}
`;

const customStyledCode = `
<Carousel className="theme-slider text-center rounded-md overflow-hidden" opts={{ loop: true }}>
  <Carousel.Content style={{ '--carousel-item-spacing': '0px' }}>
    <Carousel.Item>
      <img className="block w-full" src={generic6} alt="First slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="block w-full" src={generic7} alt="Second slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="block w-full" src={generic8} alt="Third slide" />
    </Carousel.Item>
  </Carousel.Content>
  <Carousel.Previous>
    <FontAwesomeIcon icon={faAngleLeft} />
    <span className="sr-only">Previous</span>
  </Carousel.Previous>
  <Carousel.Next>
    <FontAwesomeIcon icon={faAngleRight} />
    <span className="sr-only">Next</span>
  </Carousel.Next>
</Carousel>
`;

const withCaptionsCode = `
<Carousel className="rounded-md overflow-hidden" opts={{ loop: true }}>
  <Carousel.Content style={{ '--carousel-item-spacing': '0px' }}>
    <Carousel.Item>
      <img className="block w-full" src={generic5} alt="First slide" />
      <Carousel.Caption className="hidden md:block">
        <h5 className="text-white">First Slide Heading</h5>
        <p className="text-white mb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="block w-full" src={generic28} alt="Second slide" />
      <Carousel.Caption className="hidden md:block">
        <h5 className="text-white">Second Slide Heading</h5>
        <p className="text-white mb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="block w-full" src={generic9} alt="Third slide" />
      <Carousel.Caption className="hidden md:block">
        <h5 className="text-white">Third Slide Heading</h5>
        <p className="text-white mb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel.Content>
  <Carousel.Previous />
  <Carousel.Next />
  <Carousel.Indicators />
</Carousel>
`;

const multipleSlidesCode = `
<Carousel opts={{ align: 'start', loop: true }}>
  <Carousel.Content>
    {[generic5, generic6, generic7, generic8, generic9, generic28].map(
      (image, index) => (
        <Carousel.Item key={index} className="basis-1/2 md:basis-1/3">
          <img className="block w-full rounded-md" src={image} alt="" />
        </Carousel.Item>
      )
    )}
  </Carousel.Content>
  <Carousel.Previous />
  <Carousel.Next />
</Carousel>
`;

const HummingbirdCarousel = () => {
  return (
    <div>
      <DocPageHeader
        title="Carousel"
        description="A slideshow component for cycling through elements—images or slides of text—like a carousel."
        link={{
          text: 'Carousel on hb-react',
          url: 'https://react.hbui.dev/docs/components/carousel'
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Basic Example">
            <p className="mb-0">
              A <code>Carousel</code> is composed of a{' '}
              <code>Carousel.Content</code> holding one{' '}
              <code>Carousel.Item</code> per slide, plus the optional{' '}
              <code>Carousel.Previous</code>, <code>Carousel.Next</code> and{' '}
              <code>Carousel.Indicators</code> controls. Slides respond to drag,
              swipe and the arrow keys; <code>opts</code> forwards Embla options
              such as <code>loop</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={exampleCode}
            scope={{ generic6, generic7, generic8 }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Controlled">
            <p className="mb-0">
              <code>setApi</code> hands you the Embla instance for imperative
              control — <code>scrollPrev</code>, <code>scrollNext</code>,{' '}
              <code>scrollTo</code> — and for subscribing to its{' '}
              <code>select</code> and <code>reInit</code> events to track the
              active slide.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={controlledCode}
            scope={{ generic6, generic7, generic8 }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Styled Example">
            <p className="mb-0">
              Children passed to <code>Carousel.Previous</code> and{' '}
              <code>Carousel.Next</code> replace the default control icons; the
              theme&apos;s <code>.theme-slider</code> class turns them into the
              round arrows that reveal themselves on hover.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={customStyledCode}
            scope={{
              generic6,
              generic7,
              generic8,
              FontAwesomeIcon,
              faAngleRight,
              faAngleLeft
            }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="With Captions">
            <p className="mb-0">
              Add a <code>Carousel.Caption</code> inside a{' '}
              <code>Carousel.Item</code> to overlay text on the slide.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={withCaptionsCode}
            scope={{ generic5, generic28, generic9 }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Multiple Slides">
            <p className="mb-0">
              Slide widths come from basis utilities on{' '}
              <code>Carousel.Item</code>. The gutter between them is the{' '}
              <code>--carousel-item-spacing</code> variable on{' '}
              <code>Carousel.Content</code>, which defaults to <code>1rem</code>{' '}
              — the full-bleed examples above set it to <code>0</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={multipleSlidesCode}
            scope={{
              generic5,
              generic6,
              generic7,
              generic8,
              generic9,
              generic28
            }}
          />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default HummingbirdCarousel;
