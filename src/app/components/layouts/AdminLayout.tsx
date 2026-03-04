import { ReactNode } from 'react';
import { Activity, BarChart3, Calendar, FileText, Home, Newspaper, Settings, Shield, Users } from 'lucide-react';
import { DashboardLayout, MenuItem } from '@/app/components/DashboardLayout';

interface AdminLayoutProps {
  children: ReactNode;
  currentScreen: string;
  onNavigate: (screen: string) => void;
  onLogout: () => void;
}

const ADMIN_MENU: MenuItem[] = [
  { id: 'main', label: 'Главная', icon: Home },
  { id: 'users', label: 'Пользователи', icon: Users },
  { id: 'students', label: 'Учащиеся', icon: Users },
  { id: 'rating', label: 'Рейтинг', icon: BarChart3 },
  { id: 'analytics', label: 'Аналитика', icon: Activity },
  { id: 'calendar', label: 'Календарь', icon: Calendar },
  { id: 'news', label: 'Новости', icon: Newspaper },
  { id: 'reports', label: 'Отчеты', icon: FileText },
  { id: 'audit-log', label: 'Аудит', icon: Shield },
  { id: 'settings', label: 'Настройки', icon: Settings },
];

export function AdminLayout({ children, currentScreen, onNavigate, onLogout }: AdminLayoutProps) {
  return (
    <DashboardLayout currentScreen={currentScreen} onNavigate={onNavigate} menuItems={ADMIN_MENU} onLogout={onLogout}>
      {children}
    </DashboardLayout>
  );
}
