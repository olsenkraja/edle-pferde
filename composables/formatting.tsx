export function formatDateShort(input: string | number | Date) {
  const date = new Date(input);
  const standard = new Intl.DateTimeFormat('de-DE', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  });

  return standard.format(date);
}

export function formatDateLong(input: string | number | Date) {
  const date = new Date(input);
  const standard = new Intl.DateTimeFormat('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  });

  return standard.format(date);
}