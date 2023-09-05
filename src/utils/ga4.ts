import ga4 from 'react-ga4';

const measurementId = process.env.REACT_APP_GA4_MEASUREMENT_ID || '';
const isProduction = process.env.NODE_ENV === 'production';

export const init = (): void =>
  ga4.initialize(measurementId, {
    testMode: !isProduction,
  });

// TODO Probably do not need it
export const sendPageView = (path: string): void =>
  ga4.send({
    hitType: 'pageview',
    page: path,
  });

export interface SendEventParams {
  action: string;
  category: string;
  label?: string;
}

export const sendEvent = ({ action, category, label }: SendEventParams): void =>
  ga4.event({
    action,
    category,
    label,
  });
