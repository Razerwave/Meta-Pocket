export const currency = (number, decimal = 0) => {
  if (!number || number instanceof Number) return ''
  return (number).toFixed(decimal).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$&,');
}