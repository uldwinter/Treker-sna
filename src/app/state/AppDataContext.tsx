import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { mockApi } from '@/app/services/mockApi';
import type { AchievementRequest, AuditEvent, NotificationItem, PortfolioAchievement, RatingRow, RegistrationRequest } from '@/app/types/domain';

interface AppDataContextType {
  loading: boolean;
  achievementRequests: AchievementRequest[];
  registrations: RegistrationRequest[];
  auditEvents: AuditEvent[];
  ratingRows: RatingRow[];
  portfolioAchievements: PortfolioAchievement[];
  notifications: NotificationItem[];
  updateAchievementRequestStatus: (id: number, status: 'approved' | 'rejected') => Promise<void>;
  updateRegistrationStatus: (id: number, status: 'approved' | 'rejected') => Promise<void>;
  markAllNotificationsRead: () => Promise<void>;
}

const AppDataContext = createContext<AppDataContextType | undefined>(undefined);

export function AppDataProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [achievementRequests, setAchievementRequests] = useState<AchievementRequest[]>([]);
  const [registrations, setRegistrations] = useState<RegistrationRequest[]>([]);
  const [auditEvents, setAuditEvents] = useState<AuditEvent[]>([]);
  const [ratingRows, setRatingRows] = useState<RatingRow[]>([]);
  const [portfolioAchievements, setPortfolioAchievements] = useState<PortfolioAchievement[]>([]);
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const [requests, regs, audit, rating, portfolio, notificationsData] = await Promise.all([
        mockApi.getAchievementRequests(),
        mockApi.getRegistrations(),
        mockApi.getAuditEvents(),
        mockApi.getRatingRows(),
        mockApi.getPortfolioAchievements(),
        mockApi.getNotifications(),
      ]);
      setAchievementRequests(requests);
      setRegistrations(regs);
      setAuditEvents(audit);
      setRatingRows(rating);
      setPortfolioAchievements(portfolio);
      setNotifications(notificationsData);
      setLoading(false);
    };

    void loadData();
  }, []);

  const value = useMemo<AppDataContextType>(
    () => ({
      loading,
      achievementRequests,
      registrations,
      auditEvents,
      ratingRows,
      portfolioAchievements,
      notifications,
      updateAchievementRequestStatus: async (id, status) => {
        const next = await mockApi.updateAchievementRequestStatus(id, status);
        setAchievementRequests(next);
      },
      updateRegistrationStatus: async (id, status) => {
        const next = await mockApi.updateRegistrationStatus(id, status);
        setRegistrations(next);
      },
      markAllNotificationsRead: async () => {
        const next = await mockApi.markAllNotificationsRead();
        setNotifications(next);
      },
    }),
    [loading, achievementRequests, registrations, auditEvents, ratingRows, portfolioAchievements, notifications],
  );

  return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>;
}

export function useAppData() {
  const context = useContext(AppDataContext);
  if (!context) throw new Error('useAppData must be used inside AppDataProvider');
  return context;
}
