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
  },
  {
    id: 2,
    name: "AVM Delta",
    category: "Электровелосипеды",
    price: 2290,
    image: "https://cdn.poehali.dev/files/efc17ce3-6562-4239-8829-e8d44e0b018e.jpg",
    images: [
      "https://cdn.poehali.dev/files/efc17ce3-6562-4239-8829-e8d44e0b018e.jpg",
      "https://cdn.poehali.dev/files/efc17ce3-6562-4239-8829-e8d44e0b018e.jpg",
    ],
    maxSpeed: 25,
    range: 40,
    weight: 59,
    power: 250,
    brand: "AVM",
    deliveryDays: 7,
    inStock: true,
    description: "Электровелосипед AVM Delta — компактный городской электровелосипед с сертификатом СПМ. LED дисплей, три режима езды: ассистент, педали и электротяга. Права не нужны — максимальная скорость 25 км/ч. Запас хода до 35–40 км. Грузоподъёмность 150 кг. Передняя и задняя подвеска для комфортной езды. Кредит 4%, рассрочка от магазина. Доступные цвета: красный, белый, синий, чёрный.",
    specs: [
      { label: "Бренд", value: "AVM" },
      { label: "Назначение", value: "Женский, Универсальный" },
      { label: "Класс", value: "Городской/дорожный" },
      { label: "Режимы езды", value: "Ассистент, Педали, Электротяга" },
      { label: "Макс. скорость", value: "25 км/ч" },
      { label: "Запас хода", value: "35–40 км" },
      { label: "Грузоподъёмность", value: "150 кг" },
      { label: "Цвет", value: "Красный" },
      { label: "Вес", value: "59 кг" },
      { label: "Габариты в упаковке", value: "156×35×100 см" },
      { label: "Вес в упаковке", value: "62 кг" },
      { label: "Тип аккумулятора", value: "Свинцово-кислотный" },
      { label: "Время зарядки", value: "6–8 ч" },
      { label: "Напряжение", value: "48 В" },
      { label: "Быстросъёмный аккумулятор", value: "Нет" },
      { label: "Ёмкость аккумулятора", value: "20 Ач" },
      { label: "Тип двигателя", value: "Бесщёточный" },
      { label: "Мощность двигателя", value: "250 Вт" },
      { label: "Диаметр колёс", value: "14 дюймов" },
      { label: "Передний тормоз", value: "Барабанный" },
      { label: "Задний тормоз", value: "Барабанный" },
      { label: "Передняя подвеска", value: "Есть" },
      { label: "Задняя подвеска", value: "Есть" },
      { label: "Страна производства", value: "Китай" },
      { label: "Производитель", value: "Linyi Paige International Trade Co., Limited" },
      { label: "Гарантия", value: "12 месяцев" },
      { label: "Сервисный центр", value: "ООО «ТехноАгро», г. Гомель" },
      { label: "Импортёр", value: "ООО «ТехноАгро», г. Гомель" },
    ],
    youtubeUrl: undefined
  }
];