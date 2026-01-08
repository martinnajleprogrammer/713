export type Item = {
  name: string;
  description?: string; // Make descripcion optional to match the data structure
  image?: string;
  disabled?: boolean;
  price?: number | { [key: string]: number; };
  unit?: string; // Add unidad property to match the data structure
};
type Price = { type: string, value: number };

type Subcategory = {
  name: string;
  price?: number | { [key: string]: number; };
  items: Item[];
  prices?: Price[];
};
export type Category = {
  isHH?: boolean;
  category: string;
  disabled?: boolean;
  subcategories?: Subcategory[];
  items?: Item[]; // Make items optional to match the data structure
  description?: string; // Add descripcion property to match the data structure
};
