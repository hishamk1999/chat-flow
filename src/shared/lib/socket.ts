export type SocketEventHandler = (payload: unknown) => void;

export type SocketClient = {
  on: (event: string, handler: SocketEventHandler) => () => void;
  emit: (event: string, payload?: unknown) => void;
};

/**
 * Shared WebSocket factory. Feature code must not construct raw `WebSocket` elsewhere;
 * chat wiring lives under `features/chat/socket/`.
 */
export function createSocketClient(): SocketClient {
  const listeners = new Map<string, Set<SocketEventHandler>>();

  return {
    on(event, handler) {
      let set = listeners.get(event);
      if (!set) {
        set = new Set();
        listeners.set(event, set);
      }
      set.add(handler);
      return () => {
        set?.delete(handler);
      };
    },
    emit(event, payload) {
      const set = listeners.get(event);
      if (!set) return;
      for (const handler of set) {
        handler(payload);
      }
    },
  };
}
