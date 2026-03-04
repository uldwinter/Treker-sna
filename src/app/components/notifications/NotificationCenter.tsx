import { Bell } from 'lucide-react';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/app/components/ui/dialog';
import { useAppData } from '@/app/state/AppDataContext';

export function NotificationCenter() {
  const { notifications, markAllNotificationsRead } = useAppData();
  const unreadCount = notifications.filter((item) => item.unread).length;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-xs text-white">{unreadCount}</span>}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Уведомления</DialogTitle>
          <DialogDescription>Актуальные события системы</DialogDescription>
        </DialogHeader>

        <div className="space-y-3 max-h-[360px] overflow-y-auto">
          {notifications.map((item) => (
            <div key={item.id} className="rounded-md border p-3">
              <div className="mb-1 flex items-center justify-between gap-2">
                <p className="text-sm font-medium">{item.title}</p>
                {item.unread && <Badge className="bg-blue-600">Новое</Badge>}
              </div>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="mt-1 text-xs text-gray-500">{item.time}</p>
            </div>
          ))}
        </div>

        <Button variant="outline" onClick={() => void markAllNotificationsRead()}>Отметить все как прочитанные</Button>
      </DialogContent>
    </Dialog>
  );
}
