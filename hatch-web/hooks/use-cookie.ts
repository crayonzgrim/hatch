'use client';

import { useCallback, useMemo } from 'react';

import Cookies from 'js-cookie';

export interface CookieOptions {
  expires?: number | Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'strict' | 'Strict' | 'lax' | 'Lax' | 'none' | 'None';
}

const DEFAULT_OPTIONS: CookieOptions = {
  path: '/',
  sameSite: 'lax'
};

export function useCookie() {
  const set = useCallback(
    (key: string, value: string, options?: CookieOptions) => {
      if (typeof window === 'undefined') return;

      try {
        const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
        Cookies.set(key, value, mergedOptions);
      } catch (error) {
        console.error(`Error setting cookie "${key}":`, error);
      }
    },
    []
  );

  const get = useCallback((key: string): string | null => {
    if (typeof window === 'undefined') return null;

    try {
      return Cookies.get(key) ?? null;
    } catch (error) {
      console.error(`Error reading cookie "${key}":`, error);
      return null;
    }
  }, []);

  const remove = useCallback((key: string, options?: CookieOptions) => {
    if (typeof window === 'undefined') return;

    try {
      const removeOptions = options?.path
        ? { path: options.path }
        : { path: '/' };
      Cookies.remove(key, removeOptions);
    } catch (error) {
      console.error(`Error removing cookie "${key}":`, error);
    }
  }, []);

  return useMemo(() => ({ set, get, remove }), [set, get, remove]);
}
