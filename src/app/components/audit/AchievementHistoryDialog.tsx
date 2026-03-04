import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/app/components/ui/dialog';

interface AchievementHistoryDialogProps {
  achievementName: string;
}

const MOCK_HISTORY = [
  { id: 1, date: '21.01.2026 10:25', actor: 'Куратор Петров А.Н.', action: 'Одобрено', note: 'Подтверждено дипломом', type: 'approved' },
  { id: 2, date: '20.01.2026 17:40', actor: 'Ученик Иванов И.И.', action: 'Отправлено на проверку', note: 'Добавлено достижение и файл', type: 'submitted' },
  { id: 3, date: '20.01.2026 17:35', actor: 'Система', action: 'Создано', note: 'Заявка зарегистрирована', type: 'system' },
];

const getTypeBadge = (type: string) => {
  if (type === 'approved') return <Badge className="bg-green-600">Одобрено</Badge>;
  if (type === 'submitted') return <Badge className="bg-blue-600">На проверке</Badge>;
  return <Badge variant="outline">Системное</Badge>;
};

export function AchievementHistoryDialog({ achievementName }: AchievementHistoryDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">История</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>История изменения достижения</DialogTitle>
          <DialogDescription>{achievementName}</DialogDescription>
        </DialogHeader>

        <div className="space-y-3 max-h-[360px] overflow-y-auto py-2">
          {MOCK_HISTORY.map((item) => (
            <div key={item.id} className="border rounded-lg p-3 space-y-2">
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-medium text-gray-900">{item.action}</p>
                {getTypeBadge(item.type)}
              </div>
              <p className="text-sm text-gray-600">{item.note}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{item.actor}</span>
                <span>{item.date}</span>
              </div>
            </div>
          ))}
        </div>

        <DialogFooter>
          <Button variant="outline">Закрыть</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
