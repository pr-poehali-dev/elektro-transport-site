import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface Product {
  id?: number;
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

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [products, setProducts] = useState<Product[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState<Product>({
    name: '',
    category: 'Электровелосипеды',
    price: 0,
    image: '',
    images: [],
    maxSpeed: 25,
    range: 50,
    weight: 30,
    power: 500,
    brand: '',
    deliveryDays: 7,
    inStock: true,
    description: '',
    specs: []
  });
  const [newSpec, setNewSpec] = useState({ label: '', value: '' });
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const response = await fetch('https://functions.poehali.dev/1f044027-fd62-4bec-9641-d80cece6f0a7');
    const data = await response.json();
    setProducts(data);
  };

  const uploadImage = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async () => {
        const base64 = (reader.result as string).split(',')[1];
        
        try {
          const response = await fetch('https://functions.poehali.dev/60990861-1456-480f-bece-1960827b241a', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              image: base64,
              filename: file.name
            })
          });
          
          const data = await response.json();
          resolve(data.url);
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, isMain: boolean) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const url = await uploadImage(file);
      
      if (isMain) {
        setFormData({ ...formData, image: url });
      } else {
        setFormData({ ...formData, images: [...formData.images, url] });
      }
    } catch (error) {
      alert('Ошибка загрузки изображения');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const getSpecValue = (label: string, defaultValue: number): number => {
      const spec = formData.specs.find(s => s.label === label);
      return spec ? parseFloat(spec.value) || defaultValue : defaultValue;
    };

    const body = {
      ...formData,
      maxSpeed: getSpecValue('Макс. скорость, км/ч', formData.maxSpeed),
      range: getSpecValue('Запас хода, км', formData.range),
      weight: getSpecValue('Грузоподъемность, кг', formData.weight),
      power: formData.power
    };

    if (editingProduct) {
      body.id = editingProduct.id;
    }

    const method = editingProduct ? 'PUT' : 'POST';

    await fetch('https://functions.poehali.dev/1f044027-fd62-4bec-9641-d80cece6f0a7', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    loadProducts();
    resetForm();
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Удалить товар?')) return;
    
    await fetch(`https://functions.poehali.dev/1f044027-fd62-4bec-9641-d80cece6f0a7?id=${id}`, {
      method: 'DELETE'
    });
    
    loadProducts();
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData(product);
    setIsFormOpen(true);
  };

  const resetForm = () => {
    setIsFormOpen(false);
    setEditingProduct(null);
    setFormData({
      name: '',
      category: 'Электровелосипеды',
      price: 0,
      image: '',
      images: [],
      maxSpeed: 25,
      range: 50,
      weight: 30,
      power: 500,
      brand: '',
      deliveryDays: 7,
      inStock: true,
      description: '',
      specs: []
    });
  };

  const addSpec = () => {
    if (newSpec.label && newSpec.value) {
      setFormData({
        ...formData,
        specs: [...formData.specs, newSpec]
      });
      setNewSpec({ label: '', value: '' });
    }
  };

  const removeSpec = (index: number) => {
    setFormData({
      ...formData,
      specs: formData.specs.filter((_, i) => i !== index)
    });
  };

  const addImage = (url: string) => {
    if (url && !formData.images.includes(url)) {
      setFormData({
        ...formData,
        images: [...formData.images, url]
      });
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.username === 'electroby' && loginData.password === 'electroby123') {
      setIsAuthenticated(true);
    } else {
      alert('Неверный логин или пароль');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="bg-gradient-to-br from-[#2c3038] to-[#1a1d23] p-8 rounded-lg shadow-lg border border-white/10 w-full max-w-md">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">Вход в админку</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-white">Логин</label>
              <Input
                value={loginData.username}
                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                required
                className="bg-white/10 border-[#4a4a4a] text-white placeholder:text-[#a0a0a0]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-white">Пароль</label>
              <Input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                required
                className="bg-white/10 border-[#4a4a4a] text-white placeholder:text-[#a0a0a0]"
              />
            </div>
            <Button type="submit" className="w-full bg-white text-black hover:bg-[#e5e5e5]">
              Войти
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Управление товарами</h1>
        <div className="flex gap-2">
          <Button onClick={() => setIsAuthenticated(false)} variant="outline">
            <Icon name="LogOut" className="mr-2" size={20} />
            Выйти
          </Button>
          <Button onClick={() => setIsFormOpen(true)}>
            <Icon name="Plus" className="mr-2" size={20} />
            Добавить товар
          </Button>
        </div>
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">
              {editingProduct ? 'Редактировать товар' : 'Новый товар'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Название *</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Бренд *</label>
                  <select
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full border rounded-md px-3 py-2"
                    required
                  >
                    <option value="">Выберите бренд</option>
                    <option>AVM</option>
                    <option>BNP</option>
                    <option>SmartBalance</option>
                    <option>MyWay</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Категория *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full border rounded-md px-3 py-2"
                    required
                  >
                    <option value="">Выберите категорию</option>
                    <option>Электровелосипеды</option>
                    <option>Электросамокаты</option>
                    <option>Электроскутеры</option>
                    <option>Электротрициклы</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Цена (BYN) *</label>
                  <Input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Старая цена (BYN)</label>
                  <Input
                    type="number"
                    value={formData.oldPrice || ''}
                    onChange={(e) => setFormData({ ...formData, oldPrice: e.target.value ? Number(e.target.value) : undefined })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Срок доставки (дней) *</label>
                  <Input
                    type="number"
                    value={formData.deliveryDays}
                    onChange={(e) => setFormData({ ...formData, deliveryDays: Number(e.target.value) })}
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.inStock}
                      onChange={(e) => setFormData({ ...formData, inStock: e.target.checked })}
                      className="w-4 h-4"
                    />
                    <span className="text-sm font-medium">В наличии</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Главное фото *</label>
                <div className="flex gap-2 mb-2">
                  <Input
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="URL или загрузите файл"
                    required
                  />
                  <Button
                    type="button"
                    disabled={uploading}
                    onClick={() => document.getElementById('main-image-upload')?.click()}
                  >
                    {uploading ? 'Загрузка...' : 'Загрузить'}
                  </Button>
                  <input
                    id="main-image-upload"
                    type="file"
                    accept="image/*,.webp"
                    className="hidden"
                    onChange={(e) => handleImageUpload(e, true)}
                  />
                </div>
                {formData.image && (
                  <img src={formData.image} alt="Preview" className="w-32 h-32 object-cover rounded" />
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Дополнительные фото</label>
                <div className="flex gap-2 mb-2">
                  <Input
                    placeholder="URL изображения"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addImage(e.currentTarget.value);
                        e.currentTarget.value = '';
                      }
                    }}
                  />
                  <Button
                    type="button"
                    onClick={(e) => {
                      const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                      addImage(input.value);
                      input.value = '';
                    }}
                  >
                    URL
                  </Button>
                  <Button
                    type="button"
                    disabled={uploading}
                    onClick={() => document.getElementById('additional-image-upload')?.click()}
                  >
                    {uploading ? 'Загрузка...' : 'Загрузить'}
                  </Button>
                  <input
                    id="additional-image-upload"
                    type="file"
                    accept="image/*,.webp"
                    className="hidden"
                    onChange={(e) => handleImageUpload(e, false)}
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {formData.images.map((img, i) => (
                    <div key={i} className="relative">
                      <img src={img} alt="" className="w-20 h-20 object-cover rounded" />
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, images: formData.images.filter((_, idx) => idx !== i) })}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Описание *</label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">YouTube URL</label>
                <Input
                  value={formData.youtubeUrl || ''}
                  onChange={(e) => setFormData({ ...formData, youtubeUrl: e.target.value })}
                  placeholder="https://www.youtube.com/watch?v=..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Базовые характеристики</label>
                <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Назначение</label>
                    <Input
                      placeholder="Например: Городской, Внедорожный"
                      value={formData.specs.find(s => s.label === 'Назначение')?.value || ''}
                      onChange={(e) => {
                        const newSpecs = formData.specs.filter(s => s.label !== 'Назначение');
                        if (e.target.value) newSpecs.push({ label: 'Назначение', value: e.target.value });
                        setFormData({ ...formData, specs: newSpecs });
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Макс. скорость, км/ч</label>
                    <Input
                      type="number"
                      placeholder="25"
                      value={formData.specs.find(s => s.label === 'Макс. скорость, км/ч')?.value || ''}
                      onChange={(e) => {
                        const newSpecs = formData.specs.filter(s => s.label !== 'Макс. скорость, км/ч');
                        if (e.target.value) newSpecs.push({ label: 'Макс. скорость, км/ч', value: e.target.value });
                        setFormData({ ...formData, specs: newSpecs });
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Запас хода, км</label>
                    <Input
                      type="number"
                      placeholder="50"
                      value={formData.specs.find(s => s.label === 'Запас хода, км')?.value || ''}
                      onChange={(e) => {
                        const newSpecs = formData.specs.filter(s => s.label !== 'Запас хода, км');
                        if (e.target.value) newSpecs.push({ label: 'Запас хода, км', value: e.target.value });
                        setFormData({ ...formData, specs: newSpecs });
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Мощность, Вт</label>
                    <Input
                      type="number"
                      placeholder="500"
                      value={formData.power || ''}
                      onChange={(e) => setFormData({ ...formData, power: Number(e.target.value) })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Цвет</label>
                    <Input
                      placeholder="Например: Черный, Серый"
                      value={formData.specs.find(s => s.label === 'Цвет')?.value || ''}
                      onChange={(e) => {
                        const newSpecs = formData.specs.filter(s => s.label !== 'Цвет');
                        if (e.target.value) newSpecs.push({ label: 'Цвет', value: e.target.value });
                        setFormData({ ...formData, specs: newSpecs });
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Грузоподъемность, кг</label>
                    <Input
                      type="number"
                      placeholder="120"
                      value={formData.specs.find(s => s.label === 'Грузоподъемность, кг')?.value || ''}
                      onChange={(e) => {
                        const newSpecs = formData.specs.filter(s => s.label !== 'Грузоподъемность, кг');
                        if (e.target.value) newSpecs.push({ label: 'Грузоподъемность, кг', value: e.target.value });
                        setFormData({ ...formData, specs: newSpecs });
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Класс электровелосипеда</label>
                    <Input
                      placeholder="Например: L1e-B"
                      value={formData.specs.find(s => s.label === 'Класс электровелосипеда')?.value || ''}
                      onChange={(e) => {
                        const newSpecs = formData.specs.filter(s => s.label !== 'Класс электровелосипеда');
                        if (e.target.value) newSpecs.push({ label: 'Класс электровелосипеда', value: e.target.value });
                        setFormData({ ...formData, specs: newSpecs });
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Режимы езды</label>
                    <Input
                      placeholder="Например: Эко, Нормал, Спорт"
                      value={formData.specs.find(s => s.label === 'Режимы езды')?.value || ''}
                      onChange={(e) => {
                        const newSpecs = formData.specs.filter(s => s.label !== 'Режимы езды');
                        if (e.target.value) newSpecs.push({ label: 'Режимы езды', value: e.target.value });
                        setFormData({ ...formData, specs: newSpecs });
                      }}
                    />
                  </div>
                </div>

                <label className="block text-sm font-medium mb-2">Дополнительные характеристики</label>
                <div className="flex gap-2 mb-2">
                  <Input
                    placeholder="Название"
                    value={newSpec.label}
                    onChange={(e) => setNewSpec({ ...newSpec, label: e.target.value })}
                  />
                  <Input
                    placeholder="Значение"
                    value={newSpec.value}
                    onChange={(e) => setNewSpec({ ...newSpec, value: e.target.value })}
                  />
                  <Button type="button" onClick={addSpec}>
                    Добавить
                  </Button>
                </div>
                <div className="space-y-1">
                  {formData.specs.filter(s => !['Назначение', 'Макс. скорость, км/ч', 'Запас хода, км', 'Цвет', 'Грузоподъемность, кг', 'Класс электровелосипеда', 'Режимы езды'].includes(s.label)).map((spec, i) => (
                    <div key={i} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                      <span className="text-sm">
                        <strong>{spec.label}:</strong> {spec.value}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeSpec(formData.specs.indexOf(spec))}
                        className="text-red-500"
                      >
                        <Icon name="Trash2" size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 justify-end pt-4">
                <Button type="button" variant="outline" onClick={resetForm}>
                  Отмена
                </Button>
                <Button type="submit">
                  {editingProduct ? 'Сохранить' : 'Создать'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 flex gap-4">
            <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded" />
            <div className="flex-1">
              <h3 className="font-bold text-lg">{product.name}</h3>
              <p className="text-gray-600">{product.brand} • {product.category}</p>
              <p className="text-lg font-semibold mt-2">{product.price} BYN</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => handleEdit(product)}>
                <Icon name="Pencil" size={16} />
              </Button>
              <Button variant="outline" onClick={() => handleDelete(product.id!)}>
                <Icon name="Trash2" size={16} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}