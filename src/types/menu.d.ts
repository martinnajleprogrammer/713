export type Item = {
  name: string;
  description?: string; // Make descripcion optional to match the data structure
  image?: string;
  disabled?: boolean;
  price?: number | { [key: string]: number; };
  unit?: string; // Add unidad property to match the data structure
};
type Subcategory = {
  name: string;
  price?: number | { [key: string]: number; };
  items: Item[];
};
export type Category = {
  category: string;
  disabled?: boolean;
  subcategories?: Subcategory[];
  items?: Item[]; // Make items optional to match the data structure
  description?: string; // Add descripcion property to match the data structure
};
