import logo from 'assets/img/icons/logo.png';
import classNames from 'classnames';

const PhoenixLoader = ({ fullPage }: { fullPage?: boolean }) => {
  return (
    <div
      className={classNames(
        'flex justify-center items-center h-full w-full ',
        {
          'h-screen': fullPage
        }
      )}
    >
      <div>
        <img src={logo} alt="phoenix" className="logo-ripple ripple-1" />
        <img src={logo} alt="phoenix" className="logo-ripple ripple-2" />
        <img src={logo} alt="phoenix" className="logo-ripple ripple-3" />
        <img src={logo} alt="phoenix" className="logo-ripple ripple-4" />
        <img src={logo} alt="phoenix" className="logo-ripple ripple-5" />
      </div>
    </div>
  );
};

export default PhoenixLoader;
