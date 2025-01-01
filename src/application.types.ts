export type Category  = {
  id: number;
  name: string;
}
export type Transaction = {
  description: string;
  amount: number;
  category : Category;
};

