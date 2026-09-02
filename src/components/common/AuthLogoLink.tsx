import Logo from 'components/common/Logo';
import { Link } from 'react-router';

/**
 * The logo link every authentication page renders above its heading:
 * `a.flex.flex-center.no-underline.mb-6 > .flex.items-center.font-black.inline-block`
 * (pug: layouts/Layout{Simple,Split}Auth.pug + pages/authentication/card/*.pug).
 *
 * The simple/split layouts render it themselves; the card layout's gold markup
 * puts it inside the form's heading block, so the forms render it there.
 */
const AuthLogoLink = () => (
  <Link to="/" className="flex flex-center no-underline mb-6">
    <Logo text={false} width={58} className="font-black inline-block" />
  </Link>
);

export default AuthLogoLink;
