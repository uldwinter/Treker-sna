import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { useAppData } from '@/app/state/AppDataContext';

export function StudentPortfolioScreen() {
  const { portfolioAchievements } = useAppData();
  const totalPoints = portfolioAchievements.reduce((sum, item) => sum + (item.status === 'Подтверждено' ? 20 : 5), 0);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl text-gray-900 mb-2">Моё портфолио</h2>
        <p className="text-gray-600">Индивидуальная карточка достижений ученика для отчетности и отбора.</p>
      </div>

      <Card>
        <CardHeader><CardTitle>Профиль</CardTitle></CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
          <p><span className="text-gray-500">ФИО:</span> Иванов Иван Иванович</p>
          <p><span className="text-gray-500">Класс:</span> 10-1</p>
          <p><span className="text-gray-500">Суммарный балл:</span> {totalPoints}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Достижения</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          {portfolioAchievements.map((item) => (
            <div key={item.id} className="border rounded-lg p-3">
              <div className="flex items-center justify-between">
                <p className="font-medium text-gray-900">{item.title}</p>
                <Badge className={item.status === 'Подтверждено' ? 'bg-green-600' : 'bg-blue-600'}>{item.status}</Badge>
              </div>
              <p className="text-sm text-gray-600 mt-1">Уровень: {item.level} · Год: {item.year}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
