import logo from 'assets/img/icons/logo.png';
import { cn } from '@hummingbirdui/react';

const PhoenixLoader = ({ fullPage }: { fullPage?: boolean }) => {
  return (
    <div
      className={cn(
        'phoenix-loader flex justify-center items-center h-full w-full',
        {
          'h-screen': fullPage
        }
      )}
    >
      {/* the ripple logos are absolute; this box anchors and sizes them
          (original phoenix-react .loading-container, 100px) */}
      <div className="relative size-25">
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
