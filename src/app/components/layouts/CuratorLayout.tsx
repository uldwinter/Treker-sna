import { ReactNode } from 'react';
import { Activity, BarChart3, Calendar, ClipboardCheck, FileText, Home, Newspaper, UserPlus, Users } from 'lucide-react';
import { DashboardLayout, MenuItem } from '@/app/components/DashboardLayout';

interface CuratorLayoutProps {
  children: ReactNode;
  currentScreen: string;
  onNavigate: (screen: string) => void;
  onLogout: () => void;
}

const CURATOR_MENU: MenuItem[] = [
  { id: 'main', label: 'Главная', icon: Home },
  { id: 'sections', label: 'Секции', icon: Users },
  { id: 'requests', label: 'Заявки', icon: ClipboardCheck },
  { id: 'registrations', label: 'Регистрации', icon: UserPlus },
  { id: 'students', label: 'Учащиеся', icon: Users },
  { id: 'rating', label: 'Рейтинг', icon: BarChart3 },
  { id: 'analytics', label: 'Аналитика', icon: Activity },
  { id: 'calendar', label: 'Календарь', icon: Calendar },
  { id: 'news', label: 'Новости', icon: Newspaper },
  { id: 'reports', label: 'Отчеты', icon: FileText },
];

export function CuratorLayout({ children, currentScreen, onNavigate, onLogout }: CuratorLayoutProps) {
  return (
    <DashboardLayout currentScreen={currentScreen} onNavigate={onNavigate} menuItems={CURATOR_MENU} onLogout={onLogout}>
      {children}
    </DashboardLayout>
  );
}
