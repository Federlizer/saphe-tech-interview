// used to format currency figures consistently
export const currencyFormat = Intl.NumberFormat('dk-DK', {
  style: 'currency',
  currency: 'DKK',
});

export default currencyFormat;
