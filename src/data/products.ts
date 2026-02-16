export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  images: string[];
  maxSpeed: number;
  range: number;
  weight: number;
  power: number;
  brand: string;
  deliveryDays: number;
  inStock: boolean;
  description: string;
  specs: { label: string; value: string }[];
  youtubeUrl?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "AVM BullDog",
    category: "Электровелосипеды",
    price: 6490,
    image: "https://cdn.poehali.dev/files/5c07fd61-e71c-46f1-8dc8-54f1a04e558a.png",
    images: [
      "https://cdn.poehali.dev/files/5c07fd61-e71c-46f1-8dc8-54f1a04e558a.png",
      "https://cdn.poehali.dev/files/5c07fd61-e71c-46f1-8dc8-54f1a04e558a.png",
    ],
    maxSpeed: 25,
    range: 100,
    weight: 200,
    power: 1500,
    brand: "AVM",
    deliveryDays: 14,
    inStock: true,
    description: "Электровелосипед AVM BullDog — универсальный городской/дорожный электровелосипед с мощным двигателем 1500 Вт. Литиевый аккумулятор 48В / 60Ач обеспечивает запас хода до 100 км. Три режима езды: ассистент, педали и электротяга. Грузоподъёмность до 200 кг. Дисковые тормоза спереди и сзади. Права не нужны — максимальная скорость 25 км/ч.",
    specs: [
      { label: "Бренд", value: "AVM" },
      { label: "Назначение", value: "Универсальный" },
      { label: "Класс", value: "Городской/дорожный" },
      { label: "Режимы езды", value: "Ассистент, Педали, Электротяга" },
      { label: "Тип аккумулятора", value: "Литиевый" },
      { label: "Напряжение", value: "48 В" },
      { label: "Ёмкость аккумулятора", value: "60 Ач" },
      { label: "Передний тормоз", value: "Дисковый" },
      { label: "Задний тормоз", value: "Дисковый" },
      { label: "Мощность двигателя", value: "1500 Вт" },
      { label: "Диаметр колёс", value: "20 дюймов" },
      { label: "Грузоподъёмность", value: "200 кг" },
      { label: "Страна производства", value: "Китай" },
      { label: "Производитель", value: "Yantai Feiwo International Trade Co., LTD" },
      { label: "Гарантия", value: "12 месяцев" },
      { label: "Импортёр", value: "ООО «ТехноАгро», г. Гомель" },
    ],
    youtubeUrl: undefined
  }
];
