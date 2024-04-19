export type TaskModel = {
  id: number;
  title: string;
  body: string;
  state?: 'all' | 'inwork' | 'done';
};
