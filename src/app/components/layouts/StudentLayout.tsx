import { ReactNode } from 'react';
import { Award, Calendar, FileUser, Home, Newspaper, Trophy, Users } from 'lucide-react';
import { DashboardLayout, MenuItem } from '@/app/components/DashboardLayout';

interface StudentLayoutProps {
  children: ReactNode;
  currentScreen: string;
  onNavigate: (screen: string) => void;
  onLogout: () => void;
}

const STUDENT_MENU: MenuItem[] = [
  { id: 'main', label: 'Главная', icon: Home },
  { id: 'sections', label: 'Секции', icon: Users },
  { id: 'my-achievements', label: 'Мои достижения', icon: Award },
  { id: 'rating', label: 'Рейтинг', icon: Trophy },
  { id: 'portfolio', label: 'Портфолио', icon: FileUser },
  { id: 'calendar', label: 'Календарь', icon: Calendar },
  { id: 'news', label: 'Новости', icon: Newspaper },
];

export function StudentLayout({ children, currentScreen, onNavigate, onLogout }: StudentLayoutProps) {
  return (
    <DashboardLayout currentScreen={currentScreen} onNavigate={onNavigate} menuItems={STUDENT_MENU} onLogout={onLogout}>
      {children}
    </DashboardLayout>
  );
}
