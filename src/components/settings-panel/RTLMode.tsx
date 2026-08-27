import { useAppContext } from 'providers/AppProvider';
import { ChangeEvent } from 'react';

const RTLMode = () => {
  const {
    config: { isRTL },
    setConfig
  } = useAppContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfig({ isRTL: e.target.checked });
  };

  return (
    <div className="border border-light rounded-lg p-6! setting-panel-item bg-soft!">
      <div className="flex justify-between items-center">
        <h5 className="setting-panel-item-title mb-1">RTL </h5>
        <div className="form-check form-switch mb-0">
          <input
            type="checkbox"
            role="switch"
            id="rtl-switch"
            className="form-check-input ms-auto"
            onChange={handleChange}
            checked={isRTL}
          />
        </div>
      </div>
      <p className="mb-0 text-subtle">Change text direction</p>
    </div>
  );
};

export default RTLMode;
