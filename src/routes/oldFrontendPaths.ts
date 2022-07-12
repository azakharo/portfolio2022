export const OLD_PATH__LIBRARY = '/library';
export const OLD_PATH__CLASSES = '/classes';
export const OLD_PATH__ACHIEVEMENTS = '/program';
export const OLD_PATH__BONUSES = '/referrals';
export const OLD_PATH__ACCOUNT = '/account';

export const getStudentLkUrl = (parentId: number, studentId: number): string =>
  `/kid-phaser?userId=${parentId}&studentId=${studentId}&rp=${Math.random()
    .toString(36)
    .slice(-8)}`;

export const getTeacherScheduleUrl = (
  studentId: number,
  teacherId: number,
): string =>
  `/user-schedule#bookingModal?studentId=${studentId}&teacher_id=${teacherId}`;
