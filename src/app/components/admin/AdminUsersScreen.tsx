import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/app/components/ui/table';
import { Input } from '@/app/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Plus, Search, Edit, Trash2, ShieldCheck, UserCheck, GraduationCap } from 'lucide-react';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'curator' | 'student';
  class?: string;
  status: 'active' | 'inactive';
  lastLogin: string;
}

const MOCK_USERS: User[] = [
  { id: 1, name: 'Смирнова Елена Владимировна', email: 'smirnova@school.edu', role: 'admin', status: 'active', lastLogin: '19.01.2026 10:30' },
  { id: 2, name: 'Петров Андрей Николаевич', email: 'petrov@school.edu', role: 'curator', status: 'active', lastLogin: '19.01.2026 09:15' },
  { id: 3, name: 'Иванова Мария Сергеевна', email: 'ivanova@school.edu', role: 'curator', status: 'active', lastLogin: '18.01.2026 16:45' },
  { id: 4, name: 'Иванов Иван Иванович', email: 'ivanov.student@school.edu', role: 'student', class: '10-1', status: 'active', lastLogin: '19.01.2026 08:20' },
  { id: 5, name: 'Петрова Мария Сергеевна', email: 'petrova.student@school.edu', role: 'student', class: '10-1', status: 'active', lastLogin: '18.01.2026 14:30' },
  { id: 6, name: 'Сидоров Алексей Петрович', email: 'sidorov@school.edu', role: 'student', class: '10-2', status: 'active', lastLogin: '17.01.2026 11:00' },
  { id: 7, name: 'Козлова Елена Викторовна', email: 'kozlova@school.edu', role: 'student', class: '11-1', status: 'active', lastLogin: '19.01.2026 07:45' },
  { id: 8, name: 'Новиков Дмитрий Александрович', email: 'novikov@school.edu', role: 'student', class: '9-3', status: 'inactive', lastLogin: '10.01.2026 15:20' },
];

const getRoleIcon = (role: string) => {
  if (role === 'admin') return <ShieldCheck className="w-4 h-4 text-red-600" />;
  if (role === 'curator') return <UserCheck className="w-4 h-4 text-blue-600" />;
  return <GraduationCap className="w-4 h-4 text-green-600" />;
};

const getRoleBadge = (role: string) => {
  if (role === 'admin') return <Badge className="bg-red-600">Администратор</Badge>;
  if (role === 'curator') return <Badge className="bg-blue-600">Куратор</Badge>;
  return <Badge className="bg-green-600">Ученик</Badge>;
};

const getStatusBadge = (status: string) => {
  if (status === 'active') return <Badge variant="outline" className="border-green-600 text-green-700">Активен</Badge>;
  return <Badge variant="outline" className="border-gray-400 text-gray-600">Неактивен</Badge>;
};

export function AdminUsersScreen() {
  const [users] = useState<User[]>(MOCK_USERS);
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('all');

  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const stats = {
    total: users.length,
    admins: users.filter((u) => u.role === 'admin').length,
    curators: users.filter((u) => u.role === 'curator').length,
    students: users.filter((u) => u.role === 'student').length,
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl text-gray-900 mb-2">Управление пользователями</h2>
          <p className="text-gray-600">Добавление, редактирование и удаление пользователей</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 gap-2">
          <Plus className="w-4 h-4" />
          Добавить пользователя
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card><CardContent className="p-4"><p className="text-sm text-gray-600">Всего пользователей</p><p className="text-2xl font-semibold text-gray-900">{stats.total}</p></CardContent></Card>
        <Card><CardContent className="p-4"><div className="flex items-center gap-3"><div className="p-2 bg-red-50 rounded-md"><ShieldCheck className="w-5 h-5 text-red-600" /></div><div><p className="text-sm text-gray-600">Администраторы</p><p className="text-2xl font-semibold text-gray-900">{stats.admins}</p></div></div></CardContent></Card>
        <Card><CardContent className="p-4"><div className="flex items-center gap-3"><div className="p-2 bg-blue-50 rounded-md"><UserCheck className="w-5 h-5 text-blue-600" /></div><div><p className="text-sm text-gray-600">Кураторы</p><p className="text-2xl font-semibold text-gray-900">{stats.curators}</p></div></div></CardContent></Card>
        <Card><CardContent className="p-4"><div className="flex items-center gap-3"><div className="p-2 bg-green-50 rounded-md"><GraduationCap className="w-5 h-5 text-green-600" /></div><div><p className="text-sm text-gray-600">Ученики</p><p className="text-2xl font-semibold text-gray-900">{stats.students}</p></div></div></CardContent></Card>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex gap-4">
            <div className="flex-1 relative"><Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" /><Input placeholder="Поиск по имени или email..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10 bg-white" /></div>
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="w-48 bg-white"><SelectValue /></SelectTrigger>
              <SelectContent><SelectItem value="all">Все роли</SelectItem><SelectItem value="admin">Администраторы</SelectItem><SelectItem value="curator">Кураторы</SelectItem><SelectItem value="student">Ученики</SelectItem></SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Список пользователей ({filteredUsers.length})</CardTitle></CardHeader>
        <CardContent>
          <div className="border rounded-md"><Table><TableHeader><TableRow className="bg-gray-50"><TableHead className="w-12">№</TableHead><TableHead>Пользователь</TableHead><TableHead>Email</TableHead><TableHead>Роль</TableHead><TableHead>Класс</TableHead><TableHead>Статус</TableHead><TableHead>Последний вход</TableHead><TableHead className="w-32">Действия</TableHead></TableRow></TableHeader><TableBody>{filteredUsers.map((user, index) => <TableRow key={user.id}><TableCell>{index + 1}</TableCell><TableCell><div className="flex items-center gap-2">{getRoleIcon(user.role)}<span className="font-medium text-gray-900">{user.name}</span></div></TableCell><TableCell className="text-sm text-gray-600">{user.email}</TableCell><TableCell>{getRoleBadge(user.role)}</TableCell><TableCell className="text-sm text-gray-600">{user.class || '-'}</TableCell><TableCell>{getStatusBadge(user.status)}</TableCell><TableCell className="text-sm text-gray-600">{user.lastLogin}</TableCell><TableCell><div className="flex gap-1"><Button variant="ghost" size="sm"><Edit className="w-4 h-4" /></Button><Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700"><Trash2 className="w-4 h-4" /></Button></div></TableCell></TableRow>)}</TableBody></Table></div>
        </CardContent>
      </Card>
    </div>
  );
}
