export const WHATSAPP_NUMBER = '5521968197138';

export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const whatsappLink = (message: string) =>
  `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
