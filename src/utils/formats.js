export const currency = (number, decimal = 0) => {
  if (!number || number instanceof Number) return ''
  return (number).toFixed(decimal).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$&,');
}

export const textToSentences = (text) => {
  if (!text || text instanceof String) return ''
  return text.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
}