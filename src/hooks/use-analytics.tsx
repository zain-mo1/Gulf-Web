import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackEvent } from '@/lib/analytics';

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    trackEvent('Page', 'View', location.pathname);
  }, [location.pathname]);
};

export const useTrackClick = (category: string, label: string) => {
  return () => {
    trackEvent(category, 'Click', label);
  };
};

export const useSectionView = (sectionName: string, ref: React.RefObject<Element>) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackEvent('Section', 'View', sectionName);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [sectionName, ref]);
};
