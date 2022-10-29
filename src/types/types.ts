export interface ITodo {
  id: string;
  title: string;
  complete: boolean;
}

export type Filter = "all" | "completed" | "active";