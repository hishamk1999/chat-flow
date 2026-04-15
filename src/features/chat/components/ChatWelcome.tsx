import type { ChatWelcomeVM } from '@/features/chat/mappers/chatWelcome.mapper';
import { Button } from '@/shared/ui/Button';

type ChatWelcomeProps = {
  vm: ChatWelcomeVM;
};

export function ChatWelcome({ vm }: ChatWelcomeProps) {
  return (
    <section className="mx-auto max-w-lg rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-dark-border dark:bg-dark-card">
      <h1 className="text-2xl font-semibold text-primary-700 dark:text-primary-400">{vm.title}</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">{vm.subtitle}</p>
      <Button type="button" className="mt-6">
        Get started
      </Button>
    </section>
  );
}
