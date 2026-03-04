import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/app/components/ui/table';
import { useAppData } from '@/app/state/AppDataContext';

export function EnhancedRatingScreen() {
  const { ratingRows } = useAppData();
  const averagePoints = ratingRows.length ? Math.round(ratingRows.reduce((sum, row) => sum + row.points, 0) / ratingRows.length) : 0;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl text-gray-900 mb-2">Рейтинг учащихся</h2>
        <p className="text-gray-600">Сводка баллов по достижениям, активности и участию в мероприятиях.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card><CardContent className="p-4"><p className="text-sm text-gray-600">Участников в рейтинге</p><p className="text-2xl font-semibold">{ratingRows.length}</p></CardContent></Card>
        <Card><CardContent className="p-4"><p className="text-sm text-gray-600">Средний балл</p><p className="text-2xl font-semibold">{averagePoints}</p></CardContent></Card>
        <Card><CardContent className="p-4"><p className="text-sm text-gray-600">Лидер месяца</p><p className="text-2xl font-semibold">{ratingRows[0]?.student ?? '—'}</p></CardContent></Card>
      </div>

      <Card>
        <CardHeader><CardTitle>Топ учеников</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Место</TableHead>
                <TableHead>Ученик</TableHead>
                <TableHead>Класс</TableHead>
                <TableHead>Баллы</TableHead>
                <TableHead>Динамика</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ratingRows.map((row) => (
                <TableRow key={row.position}>
                  <TableCell className="font-semibold">#{row.position}</TableCell>
                  <TableCell>{row.student}</TableCell>
                  <TableCell>{row.className}</TableCell>
                  <TableCell>{row.points}</TableCell>
                  <TableCell><Badge className="bg-green-600">{row.trend}</Badge></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
