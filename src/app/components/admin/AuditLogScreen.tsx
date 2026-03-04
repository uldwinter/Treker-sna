import { useMemo, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Badge } from '@/app/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/app/components/ui/table';
import { useAppData } from '@/app/state/AppDataContext';

const getResultBadge = (result: string) => {
  if (result === 'success') return <Badge className="bg-green-600">Успешно</Badge>;
  if (result === 'warning') return <Badge className="bg-yellow-500">Предупреждение</Badge>;
  return <Badge className="bg-red-600">Ошибка</Badge>;
};

export function AuditLogScreen() {
  const [query, setQuery] = useState('');
  const [resultFilter, setResultFilter] = useState('all');
  const { auditEvents } = useAppData();

  const rows = useMemo(
    () =>
      auditEvents.filter((item) => {
        const byQuery = `${item.user} ${item.action} ${item.target}`.toLowerCase().includes(query.toLowerCase());
        const byResult = resultFilter === 'all' || item.result === resultFilter;
        return byQuery && byResult;
      }),
    [auditEvents, query, resultFilter],
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl text-gray-900 mb-2">Журнал аудита</h2>
        <p className="text-gray-600">Контроль изменений и действий пользователей в системе.</p>
      </div>

      <Card>
        <CardContent className="p-4 flex gap-3">
          <Input placeholder="Поиск по пользователю, действию или объекту..." value={query} onChange={(e) => setQuery(e.target.value)} className="bg-white" />
          <Select value={resultFilter} onValueChange={setResultFilter}>
            <SelectTrigger className="w-56 bg-white"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все статусы</SelectItem>
              <SelectItem value="success">Успешно</SelectItem>
              <SelectItem value="warning">Предупреждения</SelectItem>
              <SelectItem value="danger">Ошибки</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>События ({rows.length})</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Дата</TableHead>
                <TableHead>Пользователь</TableHead>
                <TableHead>Действие</TableHead>
                <TableHead>Объект</TableHead>
                <TableHead>Результат</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.user}</TableCell>
                  <TableCell>{item.action}</TableCell>
                  <TableCell>{item.target}</TableCell>
                  <TableCell>{getResultBadge(item.result)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
