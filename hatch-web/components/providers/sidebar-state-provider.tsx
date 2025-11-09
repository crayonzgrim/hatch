'use client';

import {
  type ReactNode,
  createContext,
  useContext,
  useSyncExternalStore
} from 'react';

import Cookies from 'js-cookie';

interface SidebarStateContextType {
  defaultOpen: boolean;
}

const SidebarStateContext = createContext<SidebarStateContextType>({
  defaultOpen: true
});

// 쿠키 스토어 구독 (실제로는 구독 불필요)
const subscribe = () => {
  return () => {}; // noop - 쿠키는 외부에서 변경되지 않음
};

// 클라이언트에서 쿠키 값 읽기
const getSnapshot = () => {
  const saved = Cookies.get('sidebar_state');
  return saved === 'false' ? false : true;
};

// 서버에서는 항상 true 반환
const getServerSnapshot = () => {
  return true;
};

export function SidebarStateProvider({ children }: { children: ReactNode }) {
  // useSyncExternalStore로 쿠키 동기화
  const defaultOpen = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  return (
    <SidebarStateContext.Provider value={{ defaultOpen }}>
      {children}
    </SidebarStateContext.Provider>
  );
}

export function useSidebarState() {
  return useContext(SidebarStateContext);
}
