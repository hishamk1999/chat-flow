import { AppProviders } from '@/app/providers/AppProviders';
import { ChatPage } from '@/pages/ChatPage';

export function App() {
  return (
    <AppProviders>
      <div className="flex min-h-screen flex-col items-center justify-center p-6">
        <ChatPage />
      </div>
    </AppProviders>
  );
}
