import { ChatWelcome } from '@/features/chat/components/ChatWelcome';
import { useChatWelcome } from '@/features/chat/hooks/useChatWelcome';

export function ChatWelcomeSection() {
  const { vm, isLoading, error } = useChatWelcome();

  if (isLoading) {
    return <p className="text-center text-slate-500 dark:text-slate-400">Loading…</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">{error}</p>;
  }

  if (!vm) {
    return null;
  }

  return <ChatWelcome vm={vm} />;
}
