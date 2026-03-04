import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Award, Clock, CheckCircle, XCircle, TrendingUp } from 'lucide-react';

export function StudentMainScreen() {
  const studentInfo = { name: 'Иванов Иван Иванович', class: '10-1', totalPoints: 267, rank: 1 };

  const stats = [
    { label: 'Всего достижений', value: '12', icon: Award, color: 'bg-blue-50 text-blue-600' },
    { label: 'На проверке', value: '3', icon: Clock, color: 'bg-yellow-50 text-yellow-600' },
    { label: 'Одобрено', value: '8', icon: CheckCircle, color: 'bg-green-50 text-green-600' },
    { label: 'Отклонено', value: '1', icon: XCircle, color: 'bg-red-50 text-red-600' },
  ];

  const recentAchievements = [
    { id: 1, name: 'Всероссийская олимпиада по математике', status: 'approved', points: 40, date: '15.01.2026' },
    { id: 2, name: 'Участие в волонтёрской акции', status: 'pending', points: 25, date: '18.01.2026' },
    { id: 3, name: 'Защита проекта по информатике', status: 'pending', points: 40, date: '19.01.2026' },
  ];

  const getStatusBadge = (status: string) => {
    if (status === 'approved') return <Badge className="bg-green-600">Одобрено</Badge>;
    if (status === 'pending') return <Badge className="bg-yellow-600">На проверке</Badge>;
    if (status === 'rejected') return <Badge className="bg-red-600">Отклонено</Badge>;
    return null;
  };

  return (
    <div className="space-y-8">
      <div><h2 className="text-2xl text-gray-900 mb-2">Личный кабинет</h2><p className="text-gray-600">{studentInfo.name}, {studentInfo.class} класс</p></div>

      <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div><p className="text-blue-100 mb-1">Ваш рейтинг в классе</p><div className="flex items-center gap-3"><span className="text-4xl font-bold">{studentInfo.rank} место</span><TrendingUp className="w-8 h-8" /></div></div>
            <div className="text-right"><p className="text-blue-100 mb-1">Всего баллов</p><p className="text-4xl font-bold">{studentInfo.totalPoints}</p></div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2"><CardTitle className="text-sm text-gray-600">{stat.label}</CardTitle><div className={`p-2 rounded-md ${stat.color}`}><Icon className="w-4 h-4" /></div></CardHeader>
              <CardContent><div className="text-2xl text-gray-900">{stat.value}</div></CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader><CardTitle>Последние достижения</CardTitle></CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentAchievements.map((achievement) => (
              <div key={achievement.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-md">
                <div className="flex-1"><p className="text-sm font-medium text-gray-900">{achievement.name}</p><p className="text-xs text-gray-500 mt-1">{achievement.date}</p></div>
                <div className="flex items-center gap-4"><div className="text-right"><p className="text-sm font-semibold text-blue-700">{achievement.points} баллов</p></div>{getStatusBadge(achievement.status)}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
