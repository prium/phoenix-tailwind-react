import { cn } from '@hummingbirdui/react';
import ChatWidget from 'components/common/chat-widget/ChatWidget';
import Footer from 'components/footers/Footer';
import NavbarDual from 'components/navbars/navbar-dual/NavbarDual';
import NavbarTopHorizontal from 'components/navbars/navbar-horizontal/NavbarTopHorizontal';
import NavbarTopDefault from 'components/navbars/navbar-top/NavbarTopDefault';
import NavbarVertical from 'components/navbars/navbar-vertical/NavbarVertical';
import { useAppContext } from 'providers/AppProvider';
import { useMainLayoutContext } from 'providers/MainLayoutProvider';
import { Outlet } from 'react-router';

/**
 * Mirrors phoenix-tailwind `mixins/layouts/LayoutContent.pug`.
 * The vertical navbar, top navbar and `.content` must stay direct siblings:
 * navbar-vertical.css positions `.content` with `~ .navbar-top ~ .content`.
 */
const MainLayout = () => {
  const {
    config: { navbarPosition }
  } = useAppContext();

  const { contentClass, footerClass } = useMainLayoutContext();

  return (
    <>
      {(navbarPosition === 'vertical' || navbarPosition === 'combo') && (
        <NavbarVertical />
      )}
      {navbarPosition === 'vertical' && <NavbarTopDefault />}
      {(navbarPosition === 'horizontal' || navbarPosition === 'combo') && (
        <NavbarTopHorizontal />
      )}
      {navbarPosition === 'dual' && <NavbarDual />}

      <div className={cn(contentClass, 'content')}>
        <Outlet />
        <Footer className={cn(footerClass, 'absolute')} />
        <ChatWidget />
      </div>
    </>
  );
};

export default MainLayout;
