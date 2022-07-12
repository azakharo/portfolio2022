export const openInNewTab = (url: string, isSafeUrl = false): void => {
  const win = window.open(
    url,
    '_blank',
    isSafeUrl ? undefined : 'noopener,noreferrer',
  );

  if (win) {
    win.focus();
  }
};

// This is async function!
export const copy2clipboard = (text: string): Promise<void> =>
  navigator.clipboard.writeText(text);
