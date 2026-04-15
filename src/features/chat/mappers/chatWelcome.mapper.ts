import type { ChatWelcomeDto } from '@/entities/chat/chatWelcome.types';

export type ChatWelcomeVM = {
  title: string;
  subtitle: string;
};

export function mapChatWelcomeToViewModel(dto: ChatWelcomeDto): ChatWelcomeVM {
  return {
    title: dto.headline,
    subtitle: dto.body,
  };
}
