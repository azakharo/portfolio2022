import { useDetectAdBlock } from 'adblock-detect-react';

import * as analytics from 'src/utils/ga4';
import { SendEventParams } from 'src/utils/ga4';

interface ReturnValue {
  init: () => void;
  sendEvent: (params: SendEventParams) => void;
}

export const useAnalytics = (): ReturnValue => {
  const adBlockDetected = useDetectAdBlock();

  const init = () => {
    if (!adBlockDetected) {
      analytics.init();
    }
  };

  const sendEvent = (params: SendEventParams) => {
    if (!adBlockDetected) {
      analytics.sendEvent(params);
    }
  };

  return {
    init,
    sendEvent,
  };
};
