import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly whatsappLink = 'https://wa.me/918882484178?text=Hi%20Arya%27s%20Kitchen%2C%20I%20want%20to%20place%20an%20order.';
  readonly googleMapsLink = 'https://www.google.com/maps/search/?api=1&query=Arya%27s%20Kitchen%20AIMNAABAD%20BISRAKH';
  readonly reviewCount = 1842;
  readonly rating = 4.8;

  readonly tiffinOptions = [
    { name: 'Mini Tiffin', price: '?99', items: ['3 Roti', '1 Sabji', 'Dal', 'Chutney'] },
    { name: 'Regular Tiffin', price: '?149', items: ['4 Roti', 'Dal', '1 Sabji', 'Rice', 'Salad & Chutney'] },
    { name: 'Deluxe Tiffin', price: '?199', items: ['4 Roti', 'Dal', 'Matar Paneer', 'Jeera Rice', 'Raita', 'Salad & Chutney', 'Sweet'] }
  ];

  readonly weeklyMenu = [
    { day: 'Monday', price: '?149', menu: '4 Roti � Dal � Jeera Rice � Salad & Chutney' },
    { day: 'Tuesday', price: '?149', menu: '4 Roti � Chole � Bhindi Masala � Rice � Salad & Chutney' },
    { day: 'Wednesday', price: '?159', menu: '4 Roti � Chana Dal Tadka � Seasonable Sabji � Rice � Salad & Chutney' },
    { day: 'Thursday', price: '?149', menu: '4 Roti � Soyabean Aloo � Dal Plain � Rice � Salad & Chutney' },
    { day: 'Friday', price: '?149', menu: '4 Roti � Kadhi Pakora � Aloo Jeera � Rice � Salad & Chutney' },
    { day: 'Saturday', price: '?179', menu: '4 Roti � Matar Paneer � Dry Sabji � Jeera Rice � Raita & Chutney' },
    { day: 'Sunday Special', price: '?199', menu: '2 Paratha / 4 Roti � Mushroom / Matar Paneer � Jeera Rice � Raita � Salad & Chutney � Sweet' }
  ];

  readonly nonVegGroups = [
    { title: 'Fish Items', accent: 'fish', items: [{ name: 'Fish Curry (4 pcs)', price: '?299' }, { name: 'Fish Fry', price: '?499' }] },
    { title: 'Chicken Items', accent: 'chicken', items: [{ name: 'Chicken Curry + 4 Roti', price: '?249' }, { name: 'Chicken Curry + Rice', price: '?229' }, { name: 'Home Style Chicken Curry (900 gm)', price: '?699' }, { name: 'Chicken Fry (500 gm)', price: '?599' }, { name: 'Bhuna Chicken (500 gm)', price: '?299' }] },
    { title: 'Egg Items', accent: 'egg', items: [{ name: 'Egg Curry + Rice', price: '?159' }, { name: 'Egg Curry', price: '?129' }, { name: 'Dhaba Style Egg Curry', price: '?139' }, { name: 'Egg Masala', price: '?139' }, { name: 'Anda Bhurji', price: '?99' }, { name: 'Omelette', price: '?60' }] },
    { title: 'Mutton Items', accent: 'mutton', items: [{ name: 'Mutton Gravy (900gm)', price: '?1599' }, { name: 'Bhuna Mutton Dry (500gm)', price: '?899' }] }
  ];

  readonly breakfastMenu = [
    [
      { name: 'Chana Dal Chilla + Chutney', price: '?99' },
      { name: 'Upma', price: '?69' },
      { name: 'Bread Omelette', price: '?79' },
      { name: 'Bread Sandwich (Aloo)', price: '?69' },
      { name: 'Bread Sandwich (Vegetable)', price: '?79' },
      { name: 'Vegetable Maggie', price: '?99' }
    ],
    [
      { name: '2 Aloo Paratha + Pickle', price: '?69' },
      { name: '2 Paneer Paratha + Pickle', price: '?159' },
      { name: '2 Anda Paratha', price: '?99' },
      { name: '2 Sattu Paratha', price: '?79' },
      { name: '4 Puri + Sabji', price: '?79' },
      { name: '4 Paratha', price: '?39' }
    ]
  ];

  readonly coffeeOptions = [{ name: 'Cold Coffee + Ice Cream', price: '?145' }, { name: 'Cold Coffee (Without Ice Cream)', price: '?125' }];

  readonly monthlyPackages = [
    { label: 'Mini Tiffin', price: '?2,400', detail: '/ Month � 30 Meals' },
    { label: 'Regular Tiffin', price: '?3,500', detail: '/ Month � 30 Meals' },
    { label: 'Deluxe Tiffin', price: '?4,700', detail: '/ Month � 30 Meals' }
  ];

  readonly addOns = [
    { name: 'Extra Roti', price: '?10' },
    { name: 'Extra Paratha', price: '?25' },
    { name: 'Extra Rice', price: '?30' },
    { name: 'Extra Dal', price: '?40' },
    { name: 'Extra Sabji', price: '?50' },
    { name: 'Extra Paneer Sabji', price: '?80' },
    { name: 'Raita', price: '?30' },
    { name: 'Salad', price: '?20' },
    { name: 'Sweet of the Day', price: '?30' }
  ];
}
