import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = "Arya's Kitchen";

  readonly whatsappNumber = '8882484178';
  readonly whatsappLink = `https://wa.me/91${this.whatsappNumber}?text=${encodeURIComponent('Hi Arya\'s Kitchen, I want to place an order.')}`;
  readonly googleMapsLink = 'https://www.google.com/maps/search/?api=1&query=Arya%27s%20Kitchen%20Aimnabad%20Bisrakh';
  readonly rating = 5.0;
  readonly reviewCount = 10;

  readonly orderTimeSlots = ['Within 30 min', '30-60 min', '1-2 hours', 'Tomorrow'];
  readonly weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  readonly menuSizes = ['Mini Tiffin', 'Regular Tiffin', 'Deluxe Tiffin'];

  orderForm = {
    name: '',
    flatNo: '',
    mobile: '',
    dish: '',
    day: 'Monday',
    menuType: 'Mini Tiffin',
    timeSlot: 'Within 30 min',
    addOns: [] as Array<{ name: string; quantity: number; price: number }>
  };

  get isFormComplete(): boolean {
    return !!(
      this.orderForm.name.trim() &&
      this.orderForm.flatNo.trim() &&
      this.orderForm.mobile.trim() &&
      this.orderForm.dish.trim()
    );
  }

  getAddonQuantity(itemName: string): number {
    return this.orderForm.addOns.find((entry) => entry.name === itemName)?.quantity ?? 0;
  }

  changeAddOnQuantity(itemName: string, delta: number): void {
    const current = [...this.orderForm.addOns];
    const existing = current.find((entry) => entry.name === itemName);
    const item = this.addOns.find((entry) => entry.name === itemName);

    if (!item) {
      return;
    }

    if (existing) {
      const nextQty = existing.quantity + delta;
      if (nextQty <= 0) {
        this.orderForm.addOns = current.filter((entry) => entry.name !== itemName);
      } else {
        this.orderForm.addOns = current.map((entry) =>
          entry.name === itemName ? { ...entry, quantity: nextQty } : entry
        );
      }
      return;
    }

    if (delta > 0) {
      this.orderForm.addOns = [...current, { name: item.name, quantity: 1, price: item.price }];
    }
  }

  isAddonSelected(itemName: string): boolean {
    return this.getAddonQuantity(itemName) > 0;
  }

  onOrderSubmit(): void {
    if (!this.isFormComplete) {
      return;
    }

    const selectedAddOns = this.orderForm.addOns.length
      ? this.orderForm.addOns
          .filter((entry) => entry.quantity > 0)
          .map((entry) => `${entry.name} x${entry.quantity} (+₹${entry.price * entry.quantity})`)
          .join(', ')
      : 'None';

    const message = [
      'Hello Arya\'s Kitchen,',
      'I would like to place an order.',
      `Name: ${this.orderForm.name || 'Not provided'}`,
      `Flat / House No: ${this.orderForm.flatNo || 'Not provided'}`,
      `Mobile Number: ${this.orderForm.mobile || 'Not provided'}`,
      `Order Day: ${this.orderForm.day || 'Not selected'}`,
      `Menu Type: ${this.orderForm.menuType || 'Not selected'}`,
      `Dish / Item: ${this.orderForm.dish || 'Not provided'}`,
      `Add-ons: ${selectedAddOns}`,
      `Preferred Time: ${this.orderForm.timeSlot || 'Not provided'}`,
      'Please confirm the order and delivery timing.'
    ].join('\n');

    const url = `https://wa.me/91${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  readonly tiffinOptions = [
    { name: 'Mini Tiffin', price: '₹99', items: ['3 Roti', '1 Sabji', 'Dal', 'Chutney'] },
    { name: 'Regular Tiffin', price: '₹149', items: ['4 Roti', 'Dal', '1 Sabji', 'Rice', 'Salad & Chutney'] },
    { name: 'Deluxe Tiffin', price: '₹199', items: ['4 Roti', 'Dal', 'Matar Paneer', 'Jeera Rice', 'Raita', 'Salad & Chutney', 'Sweet'] }
  ];

  readonly weeklyMenu = [
    { day: 'Monday', price: '₹149', menu: '4 Roti • Dal • Jeera Rice • Salad & Chutney' },
    { day: 'Tuesday', price: '₹149', menu: '4 Roti • Chole • Bhindi Masala • Rice • Salad & Chutney' },
    { day: 'Wednesday', price: '₹159', menu: '4 Roti • Chana Dal Tadka • Seasonal Sabji • Rice • Salad & Chutney' },
    { day: 'Thursday', price: '₹149', menu: '4 Roti • Soyabean Aloo • Dal Plain • Rice • Salad & Chutney' },
    { day: 'Friday', price: '₹149', menu: '4 Roti • Kadhi Pakora • Aloo Jeera • Rice • Salad & Chutney' },
    { day: 'Saturday', price: '₹179', menu: '4 Roti • Matar Paneer • Dry Sabji • Jeera Rice • Raita & Chutney' },
    { day: 'Sunday Special', price: '₹199', menu: '2 Paratha / 4 Roti • Mushroom / Matar Paneer • Jeera Rice • Raita • Salad & Chutney • Sweet' }
  ];

  readonly monthlyPackages = [
    { label: 'Mini Tiffin', price: '₹2,400', detail: '/ Month • 30 Meals' },
    { label: 'Regular Tiffin', price: '₹3,500', detail: '/ Month • 30 Meals' },
    { label: 'Deluxe Tiffin', price: '₹4,700', detail: '/ Month • 30 Meals' }
  ];

  readonly addOns = [
    { name: 'Extra Roti', price: 10 },
    { name: 'Extra Paratha', price: 25 },
    { name: 'Extra Rice', price: 30 },
    { name: 'Extra Dal', price: 40 },
    { name: 'Extra Sabji', price: 50 },
    { name: 'Extra Paneer Sabji', price: 80 },
    { name: 'Raita', price: 30 },
    { name: 'Salad', price: 20 },
    { name: 'Sweet of the Day', price: 30 }
  ];

  readonly nonVegGroups = [
    {
      title: 'Fish Items',
      accent: 'fish',
      icon: '🐟',
      items: [
        { name: 'Fish Curry (4 pcs)', price: '₹299' },
        { name: 'Fish Fry', price: '₹499' }
      ]
    },
    {
      title: 'Chicken Items',
      accent: 'chicken',
      icon: '🍗',
      items: [
        { name: 'Chicken Curry + 4 Roti', price: '₹249' },
        { name: 'Chicken Curry + Rice', price: '₹229' },
        { name: 'Home Style Chicken Curry (900 gm)', price: '₹699' },
        { name: 'Chicken Fry (500 gm)', price: '₹599' },
        { name: 'Bhuna Chicken (500 gm)', price: '₹299' }
      ]
    },
    {
      title: 'Egg Items',
      accent: 'egg',
      icon: '🥚',
      items: [
        { name: 'Egg Curry + Rice', price: '₹159' },
        { name: 'Egg Curry', price: '₹129' },
        { name: 'Dhaba Style Egg Curry', price: '₹139' },
        { name: 'Egg Masala', price: '₹139' },
        { name: 'Anda Bhurji', price: '₹99' },
        { name: 'Omelette', price: '₹60' }
      ]
    },
    {
      title: 'Mutton Items',
      accent: 'mutton',
      icon: '🐑',
      items: [
        { name: 'Mutton Gravy (900gm)', price: '₹1599' },
        { name: 'Bhuna Mutton Dry (500gm)', price: '₹899' }
      ]
    }
  ];

  readonly breakfastMenu = [
    [
      { name: 'Chana Dal Chilla + Chutney', price: '₹99' },
      { name: 'Upma', price: '₹69' },
      { name: 'Bread Omelette', price: '₹79' },
      { name: 'Bread Sandwich (Aloo)', price: '₹69' },
      { name: 'Bread Sandwich (Vegetable)', price: '₹79' },
      { name: 'Vegetable Maggie', price: '₹99' }
    ],
    [
      { name: '2 Aloo Paratha + Pickle', price: '₹69' },
      { name: '2 Paneer Paratha + Pickle', price: '₹159' },
      { name: '2 Anda Paratha', price: '₹99' },
      { name: '2 Sattu Paratha', price: '₹79' },
      { name: '4 Puri + Sabji', price: '₹79' },
      { name: '4 Paratha', price: '₹39' }
    ]
  ];

  readonly coffeeOptions = [
    { name: 'Cold Coffee + Ice Cream', price: '₹145' },
    { name: 'Cold Coffee (Without Ice Cream)', price: '₹125' }
  ];
}
