import type {
  AchievementRequest,
  AuditEvent,
  NotificationItem,
  PortfolioAchievement,
  RatingRow,
  RegistrationRequest,
} from '@/app/types/domain';

const delay = (ms = 120) => new Promise((resolve) => setTimeout(resolve, ms));

let achievementRequests: AchievementRequest[] = [
  { id: 1, student: 'Иванов Иван', className: '10-1', achievement: 'Олимпиада по математике', category: 'Учебные', status: 'pending' },
  { id: 2, student: 'Петрова Мария', className: '10-1', achievement: 'Волонтерская акция', category: 'Социальные', status: 'pending' },
  { id: 3, student: 'Сидоров Алексей', className: '10-2', achievement: 'Соревнования по легкой атлетике', category: 'Спорт', status: 'approved' },
];

let registrations: RegistrationRequest[] = [
  { id: 1, fullName: 'Иванов Иван Иванович', className: '10-1', email: 'ivanov@school.edu', date: '21.01.2026', status: 'pending' },
  { id: 2, fullName: 'Петрова Мария Сергеевна', className: '10-1', email: 'petrova@school.edu', date: '21.01.2026', status: 'pending' },
  { id: 3, fullName: 'Новиков Дмитрий Александрович', className: '9-3', email: 'novikov@school.edu', date: '20.01.2026', status: 'approved' },
];

let auditEvents: AuditEvent[] = [
  { id: 1, date: '21.01.2026 12:33', user: 'Администратор', action: 'Изменение роли', target: 'Петров А.Н.', result: 'success' },
  { id: 2, date: '21.01.2026 12:01', user: 'Куратор', action: 'Одобрение достижения', target: 'Иванов И.И.', result: 'success' },
  { id: 3, date: '21.01.2026 11:48', user: 'Система', action: 'Импорт данных', target: 'Рейтинг 10-11 классов', result: 'warning' },
  { id: 4, date: '21.01.2026 10:40', user: 'Администратор', action: 'Удаление пользователя', target: 'Новиков Д.А.', result: 'danger' },
];

const ratingRows: RatingRow[] = [
  { position: 1, student: 'Козлова Елена', className: '11-1', points: 238, trend: '+12' },
  { position: 2, student: 'Иванов Иван', className: '10-1', points: 224, trend: '+8' },
  { position: 3, student: 'Петрова Мария', className: '10-1', points: 218, trend: '+5' },
  { position: 4, student: 'Сидоров Алексей', className: '10-2', points: 207, trend: '+1' },
];

const portfolioAchievements: PortfolioAchievement[] = [
  { id: 1, title: 'Олимпиада по математике', level: 'Региональный', year: '2026', status: 'Подтверждено' },
  { id: 2, title: 'Волонтерский проект "Чистый парк"', level: 'Городской', year: '2025', status: 'Подтверждено' },
  { id: 3, title: 'Школьная конференция по физике', level: 'Школьный', year: '2025', status: 'На проверке' },
];

let notifications: NotificationItem[] = [
  { id: 1, title: 'Новая заявка на достижение', description: 'Иванов И.И. отправил достижение на модерацию.', time: '5 минут назад', unread: true },
  { id: 2, title: 'Регистрация подтверждена', description: 'Петрова М.С. успешно прошла регистрацию.', time: '1 час назад', unread: true },
  { id: 3, title: 'Еженедельный отчет готов', description: 'Сформирован отчет по активности классов.', time: 'Вчера', unread: false },
];

export const mockApi = {
  async getAchievementRequests() {
    await delay();
    return [...achievementRequests];
  },
  async updateAchievementRequestStatus(id: number, status: 'approved' | 'rejected') {
    await delay();
    achievementRequests = achievementRequests.map((r) => (r.id === id ? { ...r, status } : r));
    return [...achievementRequests];
  },
  async getRegistrations() {
    await delay();
    return [...registrations];
  },
  async updateRegistrationStatus(id: number, status: 'approved' | 'rejected') {
    await delay();
    registrations = registrations.map((r) => (r.id === id ? { ...r, status } : r));
    return [...registrations];
  },
  async getAuditEvents() {
    await delay();
    return [...auditEvents];
  },
  async getRatingRows() {
    await delay();
    return [...ratingRows];
  },
  async getPortfolioAchievements() {
    await delay();
    return [...portfolioAchievements];
  },
  async getNotifications() {
    await delay();
    return [...notifications];
  },
  async markAllNotificationsRead() {
    await delay();
    notifications = notifications.map((n) => ({ ...n, unread: false }));
    return [...notifications];
  },
};
