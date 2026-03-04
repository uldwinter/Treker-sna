import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/app/components/ui/table';
import { useAppData } from '@/app/state/AppDataContext';

export function PendingRegistrationsScreen() {
  const { registrations, updateRegistrationStatus } = useAppData();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl text-gray-900 mb-2">Регистрации учеников</h2>
        <p className="text-gray-600">Подтверждение учетных записей и первичная проверка данных.</p>
      </div>

      <Card>
        <CardHeader><CardTitle>Ожидают проверки</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ФИО</TableHead>
                <TableHead>Класс</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Дата</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {registrations.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.fullName}</TableCell>
                  <TableCell>{item.className}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>
                    <Badge className={item.status === 'approved' ? 'bg-green-600' : item.status === 'rejected' ? 'bg-red-600' : 'bg-blue-600'}>
                      {item.status === 'approved' ? 'Одобрено' : item.status === 'rejected' ? 'Отклонено' : 'На проверке'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {item.status === 'pending' && (
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={() => void updateRegistrationStatus(item.id, 'approved')}>Подтвердить</Button>
                        <Button size="sm" variant="destructive" onClick={() => void updateRegistrationStatus(item.id, 'rejected')}>Отклонить</Button>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
