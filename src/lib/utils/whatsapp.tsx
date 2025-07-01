const WHATSAPP_NUMBER = '5562992973765';

type Produto = {
  nome: string;
  // você pode adicionar mais propriedades aqui se quiser (ex: id, preco, imagem, etc.)
};

/**
 * Gera link do WhatsApp com mensagem simples para um produto
 * @param produto - Objeto do produto com no mínimo a propriedade nome
 * @returns URL do WhatsApp com mensagem pré-formatada
 */
export function generateWhatsAppLink(produto: Produto): string {
  const message = `Olá, tenho interesse no produto ${produto.nome}`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
