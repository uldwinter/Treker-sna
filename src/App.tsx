import { useState } from 'react';
import { LoginScreen } from '@/app/components/LoginScreen';
import { RoleSelectionScreen } from '@/app/components/RoleSelectionScreen';

import { AdminLayout } from '@/app/components/layouts/AdminLayout';
import { AdminMainScreen } from '@/app/components/admin/AdminMainScreen';
import { AdminUsersScreen } from '@/app/components/admin/AdminUsersScreen';
import { AuditLogScreen } from '@/app/components/admin/AuditLogScreen';

import { CuratorLayout } from '@/app/components/layouts/CuratorLayout';
import { CuratorMainScreen } from '@/app/components/curator/CuratorMainScreen';
import { CuratorRequestsScreen } from '@/app/components/curator/CuratorRequestsScreen';
import { PendingRegistrationsScreen } from '@/app/components/curator/PendingRegistrationsScreen';

import { StudentLayout } from '@/app/components/layouts/StudentLayout';
import { StudentMainScreen } from '@/app/components/student/StudentMainScreen';
import { StudentAchievementsManagement } from '@/app/components/student/StudentAchievementsManagement';

import { StudentsScreen } from '@/app/components/StudentsScreen';
import { StudentAchievementsScreen } from '@/app/components/StudentAchievementsScreen';
import { ReportsScreen } from '@/app/components/ReportsScreen';
import { SettingsScreen } from '@/app/components/SettingsScreen';
import { EnhancedRatingScreen } from '@/app/components/rating/EnhancedRatingScreen';
import { AnalyticsScreen } from '@/app/components/analytics/AnalyticsScreen';
import { StudentPortfolioScreen } from '@/app/components/portfolio/StudentPortfolioScreen';
import { EventsCalendarScreen } from '@/app/components/calendar/EventsCalendarScreen';
import { VisualCalendarScreen } from '@/app/components/calendar/VisualCalendarScreen';
import { NewsAndAnnouncementsScreen } from '@/app/components/news/NewsAndAnnouncementsScreen';

import { SectionsProvider } from '@/app/components/sections/SectionsContext';
import { StudentSectionsScreen } from '@/app/components/sections/StudentSectionsScreen';
import { CuratorSectionsScreen } from '@/app/components/sections/CuratorSectionsScreen';
import { Sonner } from '@/app/components/ui/sonner';
import { AppDataProvider } from '@/app/state/AppDataContext';

type AppState = 'login' | 'role-selection' | 'app';
type UserRole = 'admin' | 'curator' | 'student' | null;

function AppContent() {
  const [appState, setAppState] = useState<AppState>('login');
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [currentScreen, setCurrentScreen] = useState('main');
  const [selectedStudentId, setSelectedStudentId] = useState<number | null>(null);

  const handleLogin = () => setAppState('role-selection');

  const handleSelectRole = (role: 'admin' | 'curator' | 'student') => {
    setUserRole(role);
    setCurrentScreen('main');
    setAppState('app');
  };

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen);
    setSelectedStudentId(null);
  };

  const handleViewStudent = (studentId: number) => {
    setSelectedStudentId(studentId);
    setCurrentScreen('student-achievements');
  };

  const handleBackToStudents = () => {
    setCurrentScreen('students');
    setSelectedStudentId(null);
  };

  const handleLogout = () => {
    setAppState('login');
    setUserRole(null);
    setCurrentScreen('main');
    setSelectedStudentId(null);
  };

  if (appState === 'login') return <LoginScreen onLogin={handleLogin} />;
  if (appState === 'role-selection') return <RoleSelectionScreen onSelectRole={handleSelectRole} />;

  if (userRole === 'admin') {
    return (
      <AdminLayout currentScreen={currentScreen} onNavigate={handleNavigate} onLogout={handleLogout}>
        {currentScreen === 'main' && <AdminMainScreen />}
        {currentScreen === 'users' && <AdminUsersScreen />}
        {currentScreen === 'students' && <StudentsScreen onViewStudent={handleViewStudent} />}
        {currentScreen === 'student-achievements' && selectedStudentId && (
          <StudentAchievementsScreen studentId={selectedStudentId} onBack={handleBackToStudents} />
        )}
        {currentScreen === 'rating' && <EnhancedRatingScreen />}
        {currentScreen === 'analytics' && <AnalyticsScreen />}
        {currentScreen === 'calendar' && <VisualCalendarScreen userRole="admin" />}
        {currentScreen === 'news' && <NewsAndAnnouncementsScreen canEdit={true} />}
        {currentScreen === 'reports' && <ReportsScreen />}
        {currentScreen === 'settings' && <SettingsScreen />}
        {currentScreen === 'audit-log' && <AuditLogScreen />}
      </AdminLayout>
    );
  }

  if (userRole === 'curator') {
    return (
      <CuratorLayout currentScreen={currentScreen} onNavigate={handleNavigate} onLogout={handleLogout}>
        {currentScreen === 'main' && <CuratorMainScreen />}
        {currentScreen === 'sections' && <CuratorSectionsScreen />}
        {currentScreen === 'requests' && <CuratorRequestsScreen />}
        {currentScreen === 'registrations' && <PendingRegistrationsScreen />}
        {currentScreen === 'students' && <StudentsScreen onViewStudent={handleViewStudent} />}
        {currentScreen === 'student-achievements' && selectedStudentId && (
          <StudentAchievementsScreen studentId={selectedStudentId} onBack={handleBackToStudents} />
        )}
        {currentScreen === 'rating' && <EnhancedRatingScreen />}
        {currentScreen === 'analytics' && <AnalyticsScreen />}
        {currentScreen === 'calendar' && <VisualCalendarScreen userRole="curator" />}
        {currentScreen === 'news' && <NewsAndAnnouncementsScreen canEdit={true} />}
        {currentScreen === 'reports' && <ReportsScreen />}
      </CuratorLayout>
    );
  }

  if (userRole === 'student') {
    return (
      <StudentLayout currentScreen={currentScreen} onNavigate={handleNavigate} onLogout={handleLogout}>
        {currentScreen === 'main' && <StudentMainScreen />}
        {currentScreen === 'sections' && <StudentSectionsScreen />}
        {currentScreen === 'my-achievements' && <StudentAchievementsManagement />}
        {currentScreen === 'rating' && <EnhancedRatingScreen />}
        {currentScreen === 'portfolio' && <StudentPortfolioScreen />}
        {currentScreen === 'calendar' && <EventsCalendarScreen />}
        {currentScreen === 'news' && <NewsAndAnnouncementsScreen canEdit={false} />}
      </StudentLayout>
    );
  }

  return null;
}

export default function App() {
  return (
    <SectionsProvider>
      <AppDataProvider>
        <AppContent />
        <Sonner />
      </AppDataProvider>
    </SectionsProvider>
  );
}
