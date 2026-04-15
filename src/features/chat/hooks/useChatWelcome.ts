import { useEffect, useState } from 'react';
import { fetchChatWelcome } from '@/features/chat/api/chatWelcome.api';
import {
  mapChatWelcomeToViewModel,
  type ChatWelcomeVM,
} from '@/features/chat/mappers/chatWelcome.mapper';
import { registerChatSocketHandlers } from '@/features/chat/socket/chatSocket.handlers';

export function useChatWelcome() {
  const [vm, setVm] = useState<ChatWelcomeVM | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unregisterSocket = registerChatSocketHandlers();
    let cancelled = false;

    void (async () => {
      try {
        const dto = await fetchChatWelcome();
        if (!cancelled) {
          setVm(mapChatWelcomeToViewModel(dto));
        }
      } catch {
        if (!cancelled) {
          setError('Failed to load welcome.');
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    })();

    return () => {
      cancelled = true;
      unregisterSocket();
    };
  }, []);

  return { vm, isLoading, error };
}
