import { useMemo, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { AchievementHistoryDialog } from '@/app/components/audit/AchievementHistoryDialog';
import { useAppData } from '@/app/state/AppDataContext';

export function CuratorRequestsScreen() {
  const [statusFilter, setStatusFilter] = useState('pending');
  const { achievementRequests, updateAchievementRequestStatus } = useAppData();

  const filtered = useMemo(
    () => achievementRequests.filter((item) => statusFilter === 'all' || item.status === statusFilter),
    [achievementRequests, statusFilter],
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl text-gray-900 mb-2">Заявки на достижения</h2>
          <p className="text-gray-600">Проверка и модерация достижений, отправленных учениками.</p>
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-52 bg-white"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Все заявки</SelectItem>
            <SelectItem value="pending">На проверке</SelectItem>
            <SelectItem value="approved">Одобрено</SelectItem>
            <SelectItem value="rejected">Отклонено</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4">
        {filtered.map((item) => (
          <Card key={item.id}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{item.achievement}</CardTitle>
                <Badge className={item.status === 'approved' ? 'bg-green-600' : item.status === 'rejected' ? 'bg-red-600' : 'bg-blue-600'}>
                  {item.status === 'approved' ? 'Одобрено' : item.status === 'rejected' ? 'Отклонено' : 'На проверке'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                <p><span className="text-gray-500">Ученик:</span> {item.student}</p>
                <p><span className="text-gray-500">Класс:</span> {item.className}</p>
                <p><span className="text-gray-500">Категория:</span> {item.category}</p>
              </div>
              <div className="flex gap-2">
                <AchievementHistoryDialog achievementName={item.achievement} />
                {item.status === 'pending' && (
                  <>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={() => void updateAchievementRequestStatus(item.id, 'approved')}>Одобрить</Button>
                    <Button size="sm" variant="destructive" onClick={() => void updateAchievementRequestStatus(item.id, 'rejected')}>Отклонить</Button>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
