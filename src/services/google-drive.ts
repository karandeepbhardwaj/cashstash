const DRIVE_API = 'https://www.googleapis.com/drive/v3';
const FILE_NAME = 'cashstash-backup.json';

export async function uploadBackup(token: string, data: string): Promise<void> {
  const existing = await findBackupFile(token);
  if (existing) {
    await fetch(`https://www.googleapis.com/upload/drive/v3/files/${existing}?uploadType=media`, {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: data,
    });
  } else {
    const metadata = { name: FILE_NAME, parents: ['appDataFolder'] };
    const form = new FormData();
    form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
    form.append('file', new Blob([data], { type: 'application/json' }));
    await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
      method: 'POST', headers: { Authorization: `Bearer ${token}` }, body: form,
    });
  }
}

export async function downloadBackup(token: string): Promise<string | null> {
  const fileId = await findBackupFile(token);
  if (!fileId) return null;
  const res = await fetch(`${DRIVE_API}/files/${fileId}?alt=media`, { headers: { Authorization: `Bearer ${token}` } });
  return res.text();
}

async function findBackupFile(token: string): Promise<string | null> {
  const res = await fetch(`${DRIVE_API}/files?spaces=appDataFolder&q=name='${FILE_NAME}'&fields=files(id)`, { headers: { Authorization: `Bearer ${token}` } });
  const data = await res.json();
  return data.files?.[0]?.id ?? null;
}
