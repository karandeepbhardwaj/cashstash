import { useState, useCallback } from 'react';

export function useAuth() {
  const [auth, setAuth] = useState({ isAuthenticated: false, accessToken: null as string | null });
  const signIn = useCallback(async () => { console.log('Google Sign-In flow would start here'); }, []);
  const signOut = useCallback(() => { setAuth({ isAuthenticated: false, accessToken: null }); }, []);
  return { ...auth, signIn, signOut };
}
