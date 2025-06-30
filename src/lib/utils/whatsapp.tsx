const WHATSAPP_NUMBER = '5562992373284';

/**
 * Gera link do WhatsApp com mensagem simples para um produto
 * @param {Object} produto - Objeto do produto
 * @param {string} produto.nome - Nome do produto
 * @returns {string} URL do WhatsApp com mensagem pré-formatada
 */
export function generateWhatsAppLink(produto) {
  const message = `Olá, tenho interesse no produto ${produto.nome}`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
