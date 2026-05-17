export const fbq = (...args: unknown[]) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq(...args);
  }
};

export const trackLead = () => fbq('track', 'Lead');
export const trackCompleteRegistration = () => fbq('track', 'CompleteRegistration', {}, {eventID: 'cr_' + Date.now()});
