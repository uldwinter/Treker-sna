import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Users, Award, FileText, TrendingUp } from 'lucide-react';

export function MainScreen() {
  const stats = [
    { label: 'Всего учащихся', value: '486', icon: Users, color: 'bg-blue-50 text-blue-600' },
    { label: 'Зарегистрировано достижений', value: '1,247', icon: Award, color: 'bg-green-50 text-green-600' },
    { label: 'Сформировано отчетов', value: '34', icon: FileText, color: 'bg-purple-50 text-purple-600' },
    { label: 'Активных классов', value: '18', icon: TrendingUp, color: 'bg-orange-50 text-orange-600' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl text-gray-900 mb-2">Добро пожаловать</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm text-gray-600">{stat.label}</CardTitle>
                <div className={`p-2 rounded-md ${stat.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl text-gray-900">{stat.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
