import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const uncontrolledCode = `
<Tabs defaultValue="home">
  <Tabs.List variant="underline" className="text-md">
    <Tabs.Trigger value="home">Home</Tabs.Trigger>
    <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
    <Tabs.Trigger value="contact">Contact</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="home" className="mt-4">
    Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt
    tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor,
    williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
    dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex
    squid. Aliquip placeat salvia cillum iphone.
  </Tabs.Content>
  <Tabs.Content value="profile" className="mt-4">
    Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin
    coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next
    level wes anderson artisan four loko farm-to-table craft beer twee. Qui
    photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts
    ullamco ad vinyl cillum PBR. Homo nostrud organic.
  </Tabs.Content>
  <Tabs.Content value="contact" className="mt-4">
    Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out
    mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade.
    Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard
    locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy
    irony. Leggings gentrify squid 8-bit cred pitchfork.
  </Tabs.Content>
</Tabs>
`;

const controlledCode = `
function ControlledTabs() {
  const [value, setValue] = useState('home');

  return (
    <Tabs value={value} onValueChange={setValue}>
      <Tabs.List variant="underline" className="text-md">
        <Tabs.Trigger value="home">Home</Tabs.Trigger>
        <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
        <Tabs.Trigger value="contact" disabled>
          Contact
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="home" className="mt-4">
        Raw denim you probably haven't heard of them jean shorts Austin.
        Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
        cliche tempor, williamsburg carles vegan helvetica.
      </Tabs.Content>
      <Tabs.Content value="profile" className="mt-4">
        Food truck fixie locavore, accusamus mcsweeney's marfa nulla
        single-origin coffee squid. Exercitation +1 labore velit, blog sartorial
        PBR leggings next level wes anderson artisan four loko farm-to-table
        craft beer twee.
      </Tabs.Content>
      <Tabs.Content value="contact" className="mt-4">
        Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out
        mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade.
      </Tabs.Content>
      <div className="mt-4 flex items-center gap-2">
        <span className="text-muted">Active panel: {value}</span>
        <Button size="sm" variant="outline" color="secondary" onClick={() => setValue('home')}>
          Back to Home
        </Button>
      </div>
    </Tabs>
  );
}
`;

const TabsExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Tabs"
        description="A set of layered panels whose triggers switch which panel is shown."
        link={{
          text: 'Tabs on Hummingbird',
          url: 'https://react.hbui.dev/docs/components/tabs'
        }}
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Basic Example">
            <p className="mb-0">
              <code>Tabs.List</code> holds the <code>Tabs.Trigger</code>s and{' '}
              each <code>Tabs.Content</code> is matched to one by its{' '}
              <code>value</code>. <code>Tabs.List</code> uses the bordered tab
              bar by default; pass <code>variant="underline"</code> for the
              underlined style or <code>variant="default"</code> for a plain
              list. Set <code>defaultValue</code> to pick the panel shown first.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={uncontrolledCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Controlled Example">
            <p className="mb-0">
              Pass <code>value</code> with <code>onValueChange</code> to own the
              selected panel from React state — that also lets anything outside{' '}
              <code>Tabs.List</code> switch panels. Add <code>disabled</code> to
              a <code>Tabs.Trigger</code> to keep its panel out of reach.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={controlledCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default TabsExample;
