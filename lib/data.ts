export interface ProductSpec {
  label: string;
  value: string;
  numericValue?: number;
  unit?: string;
  higherIsBetter?: boolean;
}

export interface Product {
  id: string;
  name: string;
  brand: "SOFTGAN" | "Prometálicos";
  category: string;
  image?: string;
  specs: ProductSpec[];
}

export const CATEGORIES = [
  "Básculas de Piso",
  "Básculas de Mesa",
  "Básculas Industriales",
  "Básculas de Precisión",
  "Básculas de Plataforma",
];

export const PRODUCTS: Product[] = [
  {
    id: "sg-1",
    name: "SGP-500",
    brand: "SOFTGAN",
    category: "Básculas de Piso",
    specs: [
      { label: "Capacidad", value: "500 kg", numericValue: 500, unit: "kg", higherIsBetter: true },
      { label: "Precisión", value: "0.1 kg", numericValue: 0.1, unit: "kg", higherIsBetter: false },
      { label: "Plataforma", value: "60x80 cm", numericValue: 4800, unit: "cm²", higherIsBetter: true },
      { label: "Material", value: "Acero Inoxidable" },
      { label: "Display", value: "LCD Retroiluminado" },
      { label: "Alimentación", value: "AC/DC / Batería" },
      { label: "Conectividad", value: "RS232 / USB / WiFi" },
      { label: "Garantía", value: "3 años", numericValue: 3, unit: "años", higherIsBetter: true },
      { label: "Precio", value: "$12,500 MXN", numericValue: 12500, unit: "MXN", higherIsBetter: false },
    ],
  },
  {
    id: "sg-2",
    name: "SGM-30",
    brand: "SOFTGAN",
    category: "Básculas de Mesa",
    specs: [
      { label: "Capacidad", value: "30 kg", numericValue: 30, unit: "kg", higherIsBetter: true },
      { label: "Precisión", value: "1 g", numericValue: 1, unit: "g", higherIsBetter: false },
      { label: "Plataforma", value: "30x40 cm", numericValue: 1200, unit: "cm²", higherIsBetter: true },
      { label: "Material", value: "Acero Inoxidable" },
      { label: "Display", value: "LCD con Backlight" },
      { label: "Alimentación", value: "AC / Batería Recargable" },
      { label: "Conectividad", value: "RS232 / USB" },
      { label: "Garantía", value: "2 años", numericValue: 2, unit: "años", higherIsBetter: true },
      { label: "Precio", value: "$4,800 MXN", numericValue: 4800, unit: "MXN", higherIsBetter: false },
    ],
  },
  {
    id: "sg-3",
    name: "SGI-2000",
    brand: "SOFTGAN",
    category: "Básculas Industriales",
    specs: [
      { label: "Capacidad", value: "2,000 kg", numericValue: 2000, unit: "kg", higherIsBetter: true },
      { label: "Precisión", value: "0.5 kg", numericValue: 0.5, unit: "kg", higherIsBetter: false },
      { label: "Plataforma", value: "120x120 cm", numericValue: 14400, unit: "cm²", higherIsBetter: true },
      { label: "Material", value: "Acero al Carbón" },
      { label: "Display", value: "Indicador Industrial LED" },
      { label: "Alimentación", value: "AC 110/220V" },
      { label: "Conectividad", value: "RS232 / RS485 / Ethernet" },
      { label: "Garantía", value: "3 años", numericValue: 3, unit: "años", higherIsBetter: true },
      { label: "Precio", value: "$28,900 MXN", numericValue: 28900, unit: "MXN", higherIsBetter: false },
    ],
  },
  {
    id: "sg-4",
    name: "SGP-100",
    brand: "SOFTGAN",
    category: "Básculas de Precisión",
    specs: [
      { label: "Capacidad", value: "100 g", numericValue: 100, unit: "g", higherIsBetter: true },
      { label: "Precisión", value: "0.001 g", numericValue: 0.001, unit: "g", higherIsBetter: false },
      { label: "Plataforma", value: "Ø 8 cm", numericValue: 50, unit: "cm²", higherIsBetter: true },
      { label: "Material", value: "Aluminio / Vidrio" },
      { label: "Display", value: "LCD Alta Resolución" },
      { label: "Alimentación", value: "AC Adaptador" },
      { label: "Conectividad", value: "USB / RS232" },
      { label: "Garantía", value: "2 años", numericValue: 2, unit: "años", higherIsBetter: true },
      { label: "Precio", value: "$8,200 MXN", numericValue: 8200, unit: "MXN", higherIsBetter: false },
    ],
  },
  {
    id: "sg-5",
    name: "SGPL-300",
    brand: "SOFTGAN",
    category: "Básculas de Plataforma",
    specs: [
      { label: "Capacidad", value: "300 kg", numericValue: 300, unit: "kg", higherIsBetter: true },
      { label: "Precisión", value: "0.05 kg", numericValue: 0.05, unit: "kg", higherIsBetter: false },
      { label: "Plataforma", value: "45x60 cm", numericValue: 2700, unit: "cm²", higherIsBetter: true },
      { label: "Material", value: "Acero Inoxidable" },
      { label: "Display", value: "LCD con Backlight" },
      { label: "Alimentación", value: "AC/DC / Batería" },
      { label: "Conectividad", value: "RS232 / WiFi" },
      { label: "Garantía", value: "3 años", numericValue: 3, unit: "años", higherIsBetter: true },
      { label: "Precio", value: "$9,500 MXN", numericValue: 9500, unit: "MXN", higherIsBetter: false },
    ],
  },
  {
    id: "pm-1",
    name: "PM-F600",
    brand: "Prometálicos",
    category: "Básculas de Piso",
    specs: [
      { label: "Capacidad", value: "600 kg", numericValue: 600, unit: "kg", higherIsBetter: true },
      { label: "Precisión", value: "0.2 kg", numericValue: 0.2, unit: "kg", higherIsBetter: false },
      { label: "Plataforma", value: "60x80 cm", numericValue: 4800, unit: "cm²", higherIsBetter: true },
      { label: "Material", value: "Acero al Carbón Pintado" },
      { label: "Display", value: "LCD Básico" },
      { label: "Alimentación", value: "AC / Batería" },
      { label: "Conectividad", value: "RS232" },
      { label: "Garantía", value: "1 año", numericValue: 1, unit: "años", higherIsBetter: true },
      { label: "Precio", value: "$9,800 MXN", numericValue: 9800, unit: "MXN", higherIsBetter: false },
    ],
  },
  {
    id: "pm-2",
    name: "PM-M25",
    brand: "Prometálicos",
    category: "Básculas de Mesa",
    specs: [
      { label: "Capacidad", value: "25 kg", numericValue: 25, unit: "kg", higherIsBetter: true },
      { label: "Precisión", value: "2 g", numericValue: 2, unit: "g", higherIsBetter: false },
      { label: "Plataforma", value: "25x35 cm", numericValue: 875, unit: "cm²", higherIsBetter: true },
      { label: "Material", value: "Acero Inoxidable" },
      { label: "Display", value: "LCD" },
      { label: "Alimentación", value: "AC / Batería" },
      { label: "Conectividad", value: "RS232" },
      { label: "Garantía", value: "1 año", numericValue: 1, unit: "años", higherIsBetter: true },
      { label: "Precio", value: "$3,500 MXN", numericValue: 3500, unit: "MXN", higherIsBetter: false },
    ],
  },
  {
    id: "pm-3",
    name: "PM-I1500",
    brand: "Prometálicos",
    category: "Básculas Industriales",
    specs: [
      { label: "Capacidad", value: "1,500 kg", numericValue: 1500, unit: "kg", higherIsBetter: true },
      { label: "Precisión", value: "1 kg", numericValue: 1, unit: "kg", higherIsBetter: false },
      { label: "Plataforma", value: "100x100 cm", numericValue: 10000, unit: "cm²", higherIsBetter: true },
      { label: "Material", value: "Acero al Carbón" },
      { label: "Display", value: "Indicador LED" },
      { label: "Alimentación", value: "AC 110V" },
      { label: "Conectividad", value: "RS232 / RS485" },
      { label: "Garantía", value: "2 años", numericValue: 2, unit: "años", higherIsBetter: true },
      { label: "Precio", value: "$22,000 MXN", numericValue: 22000, unit: "MXN", higherIsBetter: false },
    ],
  },
  {
    id: "pm-4",
    name: "PM-PR50",
    brand: "Prometálicos",
    category: "Básculas de Precisión",
    specs: [
      { label: "Capacidad", value: "50 g", numericValue: 50, unit: "g", higherIsBetter: true },
      { label: "Precisión", value: "0.01 g", numericValue: 0.01, unit: "g", higherIsBetter: false },
      { label: "Plataforma", value: "Ø 7 cm", numericValue: 38, unit: "cm²", higherIsBetter: true },
      { label: "Material", value: "Aluminio" },
      { label: "Display", value: "LCD" },
      { label: "Alimentación", value: "AC Adaptador" },
      { label: "Conectividad", value: "RS232" },
      { label: "Garantía", value: "1 año", numericValue: 1, unit: "años", higherIsBetter: true },
      { label: "Precio", value: "$6,500 MXN", numericValue: 6500, unit: "MXN", higherIsBetter: false },
    ],
  },
  {
    id: "pm-5",
    name: "PM-PL200",
    brand: "Prometálicos",
    category: "Básculas de Plataforma",
    specs: [
      { label: "Capacidad", value: "200 kg", numericValue: 200, unit: "kg", higherIsBetter: true },
      { label: "Precisión", value: "0.1 kg", numericValue: 0.1, unit: "kg", higherIsBetter: false },
      { label: "Plataforma", value: "40x50 cm", numericValue: 2000, unit: "cm²", higherIsBetter: true },
      { label: "Material", value: "Acero Pintado" },
      { label: "Display", value: "LCD" },
      { label: "Alimentación", value: "AC / Batería" },
      { label: "Conectividad", value: "RS232" },
      { label: "Garantía", value: "1 año", numericValue: 1, unit: "años", higherIsBetter: true },
      { label: "Precio", value: "$7,200 MXN", numericValue: 7200, unit: "MXN", higherIsBetter: false },
    ],
  },
];

export function getProductsByBrand(brand: "SOFTGAN" | "Prometálicos"): Product[] {
  return PRODUCTS.filter((p) => p.brand === brand);
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export interface ComparisonResult {
  specLabel: string;
  valueA: string;
  valueB: string;
  winner: "A" | "B" | "tie" | "none";
}

export function compareProducts(productA: Product, productB: Product): ComparisonResult[] {
  const results: ComparisonResult[] = [];

  for (const specA of productA.specs) {
    const specB = productB.specs.find((s) => s.label === specA.label);
    if (!specB) continue;

    let winner: "A" | "B" | "tie" | "none" = "none";

    if (specA.numericValue !== undefined && specB.numericValue !== undefined) {
      if (specA.higherIsBetter) {
        if (specA.numericValue > specB.numericValue) winner = "A";
        else if (specB.numericValue > specA.numericValue) winner = "B";
        else winner = "tie";
      } else {
        if (specA.numericValue < specB.numericValue) winner = "A";
        else if (specB.numericValue < specA.numericValue) winner = "B";
        else winner = "tie";
      }
    }

    results.push({
      specLabel: specA.label,
      valueA: specA.value,
      valueB: specB.value,
      winner,
    });
  }

  return results;
}

export interface SavedComparison {
  id: string;
  productAId: string;
  productBId: string;
  date: string;
}
