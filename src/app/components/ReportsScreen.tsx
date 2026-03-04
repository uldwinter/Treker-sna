import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Label } from '@/app/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { FileText, Download } from 'lucide-react';

export function ReportsScreen() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl text-gray-900 mb-2">Отчеты</h2>
        <p className="text-gray-600">Формирование отчетов по учащимся и классам</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Отчет по классу */}
        <Card>
          <CardHeader>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-50 rounded-md">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <CardTitle>Отчет по классу</CardTitle>
                <CardDescription>
                  Сводный отчет об индивидуальных достижениях учащихся класса
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="class-select">Выберите класс</Label>
              <Select>
                <SelectTrigger id="class-select" className="bg-white">
                  <SelectValue placeholder="Выберите класс" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9-1">9-1 класс</SelectItem>
                  <SelectItem value="9-2">9-2 класс</SelectItem>
                  <SelectItem value="9-3">9-3 класс</SelectItem>
                  <SelectItem value="10-1">10-1 класс</SelectItem>
                  <SelectItem value="10-2">10-2 класс</SelectItem>
                  <SelectItem value="10-3">10-3 класс</SelectItem>
                  <SelectItem value="11-1">11-1 класс</SelectItem>
                  <SelectItem value="11-2">11-2 класс</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="period-class">Период</Label>
              <Select>
                <SelectTrigger id="period-class" className="bg-white">
                  <SelectValue placeholder="Выберите период" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="current">Текущий учебный год</SelectItem>
                  <SelectItem value="q1">1 четверть</SelectItem>
                  <SelectItem value="q2">2 четверть</SelectItem>
                  <SelectItem value="q3">3 четверть</SelectItem>
                  <SelectItem value="q4">4 четверть</SelectItem>
                  <SelectItem value="all">За все время</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 gap-2">
              <Download className="w-4 h-4" />
              Сформировать отчет
            </Button>
          </CardContent>
        </Card>

        {/* Отчет по ученику */}
        <Card>
          <CardHeader>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-green-50 rounded-md">
                <FileText className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <CardTitle>Отчет по ученику</CardTitle>
                <CardDescription>
                  Индивидуальный отчет о достижениях учащегося
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="student-class">Класс учащегося</Label>
              <Select>
                <SelectTrigger id="student-class" className="bg-white">
                  <SelectValue placeholder="Выберите класс" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9-1">9-1 класс</SelectItem>
                  <SelectItem value="9-2">9-2 класс</SelectItem>
                  <SelectItem value="9-3">9-3 класс</SelectItem>
                  <SelectItem value="10-1">10-1 класс</SelectItem>
                  <SelectItem value="10-2">10-2 класс</SelectItem>
                  <SelectItem value="10-3">10-3 класс</SelectItem>
                  <SelectItem value="11-1">11-1 класс</SelectItem>
                  <SelectItem value="11-2">11-2 класс</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="student-name">Фамилия учащегося</Label>
              <Select>
                <SelectTrigger id="student-name" className="bg-white">
                  <SelectValue placeholder="Выберите учащегося" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Иванов Иван Иванович</SelectItem>
                  <SelectItem value="2">Петрова Мария Сергеевна</SelectItem>
                  <SelectItem value="3">Сидоров Алексей Петрович</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="period-student">Период</Label>
              <Select>
                <SelectTrigger id="period-student" className="bg-white">
                  <SelectValue placeholder="Выберите период" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="current">Текущий учебный год</SelectItem>
                  <SelectItem value="q1">1 четверть</SelectItem>
                  <SelectItem value="q2">2 четверть</SelectItem>
                  <SelectItem value="q3">3 четверть</SelectItem>
                  <SelectItem value="q4">4 четверть</SelectItem>
                  <SelectItem value="all">За все время</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 gap-2">
              <Download className="w-4 h-4" />
              Сформировать отчет
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Дополнительная информация */}
      <Card>
        <CardHeader>
          <CardTitle>Доступные форматы отчетов</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-200 rounded-md">
              <p className="text-sm text-gray-900 mb-1">PDF документ</p>
              <p className="text-xs text-gray-600">Для печати и архивирования</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-md">
              <p className="text-sm text-gray-900 mb-1">Excel таблица</p>
              <p className="text-xs text-gray-600">Для анализа и обработки данных</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-md">
              <p className="text-sm text-gray-900 mb-1">Word документ</p>
              <p className="text-xs text-gray-600">Для редактирования текста</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
