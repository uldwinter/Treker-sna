export type Role = 'admin' | 'curator' | 'student';

export interface AchievementRequest {
  id: number;
  student: string;
  className: string;
  achievement: string;
  category: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface RegistrationRequest {
  id: number;
  fullName: string;
  className: string;
  email: string;
  date: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface AuditEvent {
  id: number;
  date: string;
  user: string;
  action: string;
  target: string;
  result: 'success' | 'warning' | 'danger';
}

export interface RatingRow {
  position: number;
  student: string;
  className: string;
  points: number;
  trend: string;
}

export interface PortfolioAchievement {
  id: number;
  title: string;
  level: string;
  year: string;
  status: 'Подтверждено' | 'На проверке';
}

export interface NotificationItem {
  id: number;
  title: string;
  description: string;
  time: string;
  unread: boolean;
}
