const SCOPES = 'https://www.googleapis.com/auth/drive.appdata';

export function initGoogleAuth(clientId: string): Promise<string> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') { reject(new Error('Not in browser')); return; }
    console.log('Google Auth init with client:', clientId, 'scope:', SCOPES);
    reject(new Error('Google Identity Services not loaded'));
  });
}
