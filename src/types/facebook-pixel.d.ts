declare global {
  interface Window {
    fbq: {
      (action: 'track', eventName: string, parameters?: Record<string, any>): void;
      (action: 'init', pixelId: string): void;
      (action: 'trackCustom', eventName: string, parameters?: Record<string, any>): void;
      callMethod?: boolean;
      queue?: any[];
      push?: (args: any[]) => void;
      loaded?: boolean;
      version?: string;
    };
    _fbq?: any;
  }
}

// Facebook Pixel standard events
export type StandardEvent = 
  | 'AddPaymentInfo'
  | 'AddToCart' 
  | 'AddToWishlist'
  | 'CompleteRegistration'
  | 'Contact'
  | 'CustomizeProduct'
  | 'Donate'
  | 'FindLocation'
  | 'InitiateCheckout'
  | 'Lead'
  | 'PageView'
  | 'Purchase'
  | 'Schedule'
  | 'Search'
  | 'StartTrial'
  | 'SubmitApplication'
  | 'Subscribe'
  | 'ViewContent';

// Custom events for apartment listing
export type CustomEvent = 
  | 'InitiateContact'
  | 'ViewPropertyDetails'
  | 'ContactFormStart';

export interface FacebookPixelParams {
  content_category?: string;
  content_name?: string;
  currency?: string;
  value?: number;
  contact_method?: 'phone' | 'email' | 'form';
  property?: string;
  property_type?: string;
  location?: string;
}

export {};