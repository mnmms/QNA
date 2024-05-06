export interface QNA {
  id: number;
  question: string;
  answer: string;
}

export type QNAForm = Omit<QNA, "id">;
