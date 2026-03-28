export interface AnalyticsEvent {
  id: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: string;
}

const STORAGE_KEY = 'gulfwebco_analytics';

export const trackEvent = (category: string, action: string, label?: string, value?: number) => {
  try {
    const existingData = localStorage.getItem(STORAGE_KEY);
    const events: AnalyticsEvent[] = existingData ? JSON.parse(existingData) : [];
    
    const newEvent: AnalyticsEvent = {
      id: crypto.randomUUID(),
      category,
      action,
      label,
      value,
      timestamp: new Date().toISOString()
    };
    
    events.push(newEvent);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
    
    // Also log to console for development visibility
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics] ${category} - ${action}`, label ? `- ${label}` : '');
    }
  } catch (error) {
    console.error('Failed to log analytics event:', error);
  }
};

export const getAnalyticsData = (): AnalyticsEvent[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Failed to retrieve analytics data:', error);
    return [];
  }
};

export const clearAnalyticsData = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear analytics data:', error);
  }
};
