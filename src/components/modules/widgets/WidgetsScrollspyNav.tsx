import ScrollSpy from 'components/base/ScrollSpy';

const NAV_LINK_CLASS = 'text-subtle font-bold py-4 leading-none text-nowrap';

const links = [
  { href: '#scrollspyStats', label: 'Number Stats and Charts' },
  { href: '#scrollspyTables', label: 'Tables, Files, and Lists' },
  { href: '#scrollspyEcommerce', label: 'E-commerce' },
  { href: '#scrollspyUsers', label: 'Users & Feed' },
  { href: '#scrollspyForms', label: 'Forms' },
  { href: '#scrollspyOthers', label: 'Others' }
];

/**
 * `+WidgetNavbar` in mixins/widgets/WidgetNavbar.pug — the sticky section nav.
 * `.widgets-scrollspy-nav` (components/mixed.css) keys off this structure, and
 * the gold scrolls the strip with plain `scrollbar-overlay` overflow, not
 * simplebar, so keep the markup verbatim.
 */
const WidgetsScrollspyNav = () => {
  return (
    <div className="widgets-scrollspy-nav -mt-8 bg-soft z-5 -mx-6 lg:-mx-10 border-b">
      <nav
        className="simplebar-scrollspy navbar py-0 scrollbar-overlay"
        id="widgets-scrollspy"
      >
        <ul className="nav flex-nowrap">
          {links.map(link => (
            <li className="nav-item" key={link.href}>
              <ScrollSpy.NavLink className={NAV_LINK_CLASS} href={link.href}>
                {link.label}
              </ScrollSpy.NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default WidgetsScrollspyNav;
