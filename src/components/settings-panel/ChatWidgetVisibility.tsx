import { useAppContext } from 'providers/AppProvider';
import { ChangeEvent } from 'react';

const ChatWidgetVisibility = () => {
  const {
    config: { isChatWidgetVisible },
    setConfig
  } = useAppContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfig({ isChatWidgetVisible: e.target.checked });
  };

  return (
    <div className="border border-subtle rounded-lg p-6! setting-panel-item bg-soft!">
      <div className="flex justify-between items-center">
        <h5 className="setting-panel-item-title mb-1">Support Chat</h5>
        <div className="form-check form-switch mb-0">
          <input
            type="checkbox"
            role="switch"
            id="support-chat-switch"
            className="form-check-input ms-auto"
            onChange={handleChange}
            checked={isChatWidgetVisible}
          />
        </div>
      </div>
      <p className="mb-0 text-subtle">Toggle support chat</p>
    </div>
  );
};

export default ChatWidgetVisibility;
