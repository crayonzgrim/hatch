'use client';

import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';

import { useCookie } from '@/hooks/use-cookie';

const SIDEBAR_COOKIE_NAME = 'sidebar_state';

interface SidebarStateContextType {
  defaultOpen: boolean;
}

const SidebarStateContext = createContext<SidebarStateContextType>({
  defaultOpen: true
});

export function SidebarStateProvider({ children }: { children: ReactNode }) {
  const cookie = useCookie();
  // Hydration mismatch 방지: 서버와 클라이언트 모두 처음에는 true 사용
  const [defaultOpen, setDefaultOpen] = useState(true);

  useEffect(() => {
    // 클라이언트에서 마운트 후 쿠키 읽기
    const saved = cookie.get(SIDEBAR_COOKIE_NAME);
    if (saved !== null) {
      setDefaultOpen(saved === 'true');
    }
  }, [cookie]);

  return (
    <SidebarStateContext.Provider value={{ defaultOpen }}>
      {children}
    </SidebarStateContext.Provider>
  );
}

export function useSidebarState() {
  return useContext(SidebarStateContext);
}
