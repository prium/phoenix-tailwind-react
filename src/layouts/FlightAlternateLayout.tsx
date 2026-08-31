import { Outlet } from 'react-router';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';
import ChatWidget from 'components/common/chat-widget/ChatWidget';
import NavbarMain from 'components/navbars/travel-agency/NavbarMain';

const FlightAlternateLayout = () => {
  useSettingsMountEffect({
    disableNavigationType: true,
    disableHorizontalNavbarAppearance: true,
    disableVerticalNavbarAppearance: true,
    disableHorizontalNavbarShape: true
  });
  return (
    <>
      <NavbarMain />
      <Outlet />
      {/* gold passes `attrsSupportChat = { class: 'support-chat-bottom-lg' }` so
          the chat button clears the fixed .flight-bottom-bar */}
      <div className="support-chat-bottom-lg">
        <ChatWidget />
      </div>
    </>
  );
};

export default FlightAlternateLayout;
