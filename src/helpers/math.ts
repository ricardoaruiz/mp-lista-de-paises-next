const numberFormatter = new Intl.NumberFormat('en', {
  notation: 'compact',
  maximumFractionDigits: 1
});

export const formatNumber = (value: number) => {
  return numberFormatter.format(value);
};
