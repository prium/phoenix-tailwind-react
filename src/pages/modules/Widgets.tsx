import ScrollSpy from 'components/base/ScrollSpy';
import WidgetECommerce from 'components/modules/widgets/WidgetECommerce';
import WidgetForms from 'components/modules/widgets/WidgetForms';
import WidgetOthers from 'components/modules/widgets/WidgetOthers';
import WidgetStats from 'components/modules/widgets/WidgetStats';
import WidgetTables from 'components/modules/widgets/WidgetTables';
import WidgetUserAndFeed from 'components/modules/widgets/WidgetUserAndFeed';
import WidgetsScrollspyNav from 'components/modules/widgets/WidgetsScrollspyNav';

/** `widgets.pug` — the aggregate of every widget in the theme. */
const Widgets = () => {
  return (
    <ScrollSpy>
      <WidgetsScrollspyNav />
      <div className="mb-16">
        <ScrollSpy.Content id="scrollspyStats">
          <WidgetStats />
        </ScrollSpy.Content>

        <ScrollSpy.Content id="scrollspyTables">
          <WidgetTables />
        </ScrollSpy.Content>

        <ScrollSpy.Content id="scrollspyEcommerce">
          <WidgetECommerce />
        </ScrollSpy.Content>

        <ScrollSpy.Content id="scrollspyUsers">
          <WidgetUserAndFeed />
        </ScrollSpy.Content>

        <ScrollSpy.Content id="scrollspyForms">
          <WidgetForms />
        </ScrollSpy.Content>

        <ScrollSpy.Content id="scrollspyOthers">
          <WidgetOthers />
        </ScrollSpy.Content>
      </div>
    </ScrollSpy>
  );
};

export default Widgets;
