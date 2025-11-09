import { useEffect, useState } from 'react';

const MOBILE_BREAKPOINT = 1200;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    mql.addEventListener('change', onChange);

    queueMicrotask(() => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT));
    // setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return !!isMobile;
}

// import { useEffect, useState } from 'react';
//
// const MOBILE_BREAKPOINT = 1200;
//
// export function useIsMobile() {
//   const [isMobile, setIsMobile] = useState(false);
//
//   useEffect(() => {
//     if (typeof window === 'undefined') return;
//
//     const checkScreen = () => {
//       setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
//     };
//
//     checkScreen();
//     window.addEventListener('resize', checkScreen);
//
//     return () => {
//       window.removeEventListener('resize', checkScreen);
//     };
//   }, []);
//
//   return isMobile;
// }
