import { createSocketClient, type SocketClient } from '@/shared/lib/socket';

export const CHAT_SOCKET_EVENTS = {
  messageNew: 'message:new',
  messageSend: 'message:send',
  typingStart: 'typing:start',
  typingStop: 'typing:stop',
} as const;

/**
 * Register chat-specific socket listeners. Stub until a real server exists.
 */
export function registerChatSocketHandlers(
  client: SocketClient = createSocketClient(),
): () => void {
  const offNew = client.on(CHAT_SOCKET_EVENTS.messageNew, () => undefined);
  const offSend = client.on(CHAT_SOCKET_EVENTS.messageSend, () => undefined);
  const offTypingStart = client.on(CHAT_SOCKET_EVENTS.typingStart, () => undefined);
  const offTypingStop = client.on(CHAT_SOCKET_EVENTS.typingStop, () => undefined);

  return () => {
    offNew();
    offSend();
    offTypingStart();
    offTypingStop();
  };
}
