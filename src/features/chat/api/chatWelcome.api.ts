import type { ChatWelcomeDto } from '@/entities/chat/chatWelcome.types';

export async function fetchChatWelcome(): Promise<ChatWelcomeDto> {
  await Promise.resolve();
  return {
    headline: 'Chat Flow',
    body: 'Feature-based architecture is active.',
  };
}
