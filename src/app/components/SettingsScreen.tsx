import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/app/components/ui/card';
import { Label } from '@/app/components/ui/label';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';
import { Switch } from '@/app/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';

export function SettingsScreen() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl text-gray-900 mb-2">Настройки</h2>
        <p className="text-gray-600">Настройки профиля и отображения данных</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Профиль пользователя */}
        <Card>
          <CardHeader>
            <CardTitle>Настройки профиля пользователя</CardTitle>
            <CardDescription>Основная информация о пользователе</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="user-name">Фамилия Имя Отчество</Label>
              <Input
                id="user-name"
                type="text"
                defaultValue="Смирнова Елена Владимировна"
                className="bg-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="user-role">Должность</Label>
              <Input
                id="user-role"
                type="text"
                defaultValue="Заместитель директора"
                className="bg-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="user-email">Email</Label>
              <Input
                id="user-email"
                type="email"
                defaultValue="smirnova@school.edu"
                className="bg-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="user-phone">Телефон</Label>
              <Input
                id="user-phone"
                type="tel"
                defaultValue="+7 (495) 123-45-67"
                className="bg-white"
              />
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Сохранить изменения
            </Button>
          </CardContent>
        </Card>

        {/* Настройки отображения */}
        <Card>
          <CardHeader>
            <CardTitle>Настройки отображения данных</CardTitle>
            <CardDescription>Параметры интерфейса и таблиц</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="rows-per-page">Записей на странице</Label>
              <Select defaultValue="10">
                <SelectTrigger id="rows-per-page" className="bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10 записей</SelectItem>
                  <SelectItem value="25">25 записей</SelectItem>
                  <SelectItem value="50">50 записей</SelectItem>
                  <SelectItem value="100">100 записей</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date-format">Формат даты</Label>
              <Select defaultValue="dd.mm.yyyy">
                <SelectTrigger id="date-format" className="bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dd.mm.yyyy">ДД.ММ.ГГГГ</SelectItem>
                  <SelectItem value="mm/dd/yyyy">ММ/ДД/ГГГГ</SelectItem>
                  <SelectItem value="yyyy-mm-dd">ГГГГ-ММ-ДД</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Показывать подсказки</Label>
                <p className="text-xs text-gray-500">Отображать всплывающие подсказки</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Автосохранение фильтров</Label>
                <p className="text-xs text-gray-500">Сохранять настройки фильтров таблиц</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Уведомления</Label>
                <p className="text-xs text-gray-500">Получать уведомления о новых достижениях</p>
              </div>
              <Switch />
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Применить настройки
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Безопасность */}
      <Card>
        <CardHeader>
          <CardTitle>Безопасность</CardTitle>
          <CardDescription>Смена пароля и настройки безопасности</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 max-w-md">
          <div className="space-y-2">
            <Label htmlFor="current-password">Текущий пароль</Label>
            <Input
              id="current-password"
              type="password"
              placeholder="Введите текущий пароль"
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="new-password">Новый пароль</Label>
            <Input
              id="new-password"
              type="password"
              placeholder="Введите новый пароль"
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm-password">Подтвердите пароль</Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="Повторите новый пароль"
              className="bg-white"
            />
          </div>

          <Button className="bg-blue-600 hover:bg-blue-700">
            Изменить пароль
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
