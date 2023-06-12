const recommended = [
  {
    id: 0,
    name: 'Burger Large',
    description: 'Freshly grilled chicken and chilled lorem ipsum',
    price: 2500,
    image: require('./assets/images/burger.png'),
    restaurant:'Burger King',
    productImages: [
      {
        id: 0,
        image: require('./assets/images/burger.png'),
      },
      {
        id: 1,
        image: require('./assets/images/burger.png'),
      },
    ],
  },
  {
    id: 1,
    name: 'Pizza Large',
    description: 'Freshly grilled chicken and chilled lorem ipsum',
    price: 2500,
    image: require('./assets/images/pizza.png'),
    restaurant:'Burger King',
    productImages: [
      {
        id: 0,
        image: require('./assets/images/pizza.png'),
      },
      {
        id: 1,
        image: require('./assets/images/pizza.png'),
      },
    ],
  },
  {
    id: 3,
    name: 'Mama Silver',
    description: 'Freshly grilled chicken and chilled lorem ipsum',
    price: 2500,
    image: require('./assets/images/fish.png'),
    restaurant:'Burger King',
    productImages: [
      {
        id: 0,
        image: require('./assets/images/fish.png'),
      },
      {
        id: 1,
        image: require('./assets/images/fish.png'),
      },
    ],
  },  
];

const categories = [
  {
    id: 0,
    label: 'Food',
    icon: require('./assets/images/dummy/food.png'),
    restaurants: 228,
  },
  {
    id: 1,
    label: 'Drinks',
    icon: require('./assets/images/dummy/drink.png'),
    restaurants: 228,
  },
  {
    id: 2,
    label: 'Pizza',
    icon: require('./assets/images/dummy/pizza.png'),
    restaurants: 228,
  },
  {
    id: 3,
    label: 'Chicken',
    icon: require('./assets/images/dummy/pizza.png'),
    restaurants: 228,
  },
  {
    id: 4,
    label: 'Fast-food',
    icon: require('./assets/images/dummy/pizza.png'),
    restaurants: 228,
  },
];
const aroundYou = [
  {
      id: 0,
      name: "Starbucks",
      image: require('./assets/images/restaurant.png'),
      specialty:'Fast-food Reastaurant',
      rating: 4.7,
      distance: "123km",
      duration: "27 Min",
      openingHours: "8am",
      closingHours:'9pm',
  },
  {
      id: 1,
      name: "McDonald",
      image: require('./assets/images/restaurant.png'),
      specialty:'Fast-food Reastaurant',
      rating: 4.7,
      distance: "123km",
      duration: "27 Min",
      openingHours: "8am",
      closingHours:'9pm',
  },
  {
      id: 2,
      name: "KFC",
      image: require('./assets/images/restaurant.png'),
      specialty:'Fast-food Reastaurant',
      rating: 4.7,
      distance: "123km",
      duration: "27 Min",
      openingHours: "8am",
      closingHours:'9pm',
  },
  {
      id: 3,
      name: "Burger King",
      image: require('./assets/images/meal.png'),
      specialty:'Fast-food Reastaurant',
      rating: 4.7,
      distance: "123km",
      duration: "27 Min",
      openingHours: "8am",
      closingHours:'9pm',
  }

]
const mealOfTheDay = {
    id: 0,
    image: require('./assets/images/meal.png'),
    name:"Grilled Chicken",
    price:2500,
    restaurant:"Mc Donald",
    description: 'Enjoy 40% off your first grocery order',
    backgroundColor: '#fc682b',
}

const featured= [
  {
    id: 0,
    name: 'Ocean Basket',
    image:require('./assets/images/rest.png'),
    rating: 4,
    specialty:'Indian Restaurant',
    distance: "123km",
    duration: "27 Min",
    openingHours: "8am",
    closingHours:'9pm',
  },
  {
    id: 1,
    name: 'Cilantro',
    rating: 3,
    image:require('./assets/images/rest.png'),
    specialty:'Western Cuisine',
    distance: "123km",
    duration: "27 Min",
    openingHours: "8am",
    closingHours:'9pm',
  },
  {
    id: 2,
    name: 'Kokodome',
    image:require('./assets/images/rest.png'),
    rating: 2.5,
    specialty:'Western Cuisine',
    distance: "123km",
    duration: "27 Min",
    openingHours: "8am",
    closingHours:'9pm',
  },
  {
    id: 3,
    name: 'Jevanic Restaurant',
    image:require('./assets/images/rest.png'),
    rating: 5,
    specialty:'Western Cuisine',
    distance: "123km",
    duration: "27 Min",
    openingHours: "8am",
    closingHours:'9pm',
  },
];
const topDeals = [
  {
    id: 0,
    restaurant: 'Pizza Hut',
    offerType: 'Black Friday',
    description: 'Valid until January 2023',
    gift: "Gift Voucher",
    image: require('./assets/images/deal1.png'),
  },
  {
    id: 1,
    restaurant: 'Mc Donald',
    offerType: '2% on all meals',
    description: 'Valid until January 2023',
    gift: "Big Discount",
    image: require('./assets/images/deal1.png'),
  },
  {
    id: 3,
    restaurant: 'Cilantro',
    offerType: 'Black Friday',
    description: 'Valid until January 2023',
    gift: "Gift Voucher",
    image: require('./assets/images/deal1.png'),
  },
];
const orderHistories = [
  {
      title: "19 Sep 2021",
      data: [
          {
              id: 18888,
              name: "Pizza Hut",
              image: require('./assets/images/deal1.png'),
              price: 35.30,
              status: "D",
              status_desc: "Delivered",
              itemCount: 3,
              deliveredTime: "19 Sep, 14:30"
          },
          {
              id: 18889,
              name: "Pizza Hut",
              image: require('./assets/images/deal1.png'),
              price: 35.30,
              status: "P",
              status_desc: "Pending",
              itemCount: 3,
              deliveredTime: "19 Sep, 14:30"
          },
          {
              id: 28888,
              name: "KFC",
              image: require('./assets/images/deal1.png'),
              price: 55.00,
              status: "D",
              status_desc: "Delivered",
              itemCount: 4,
              deliveredTime: "19 Sep, 12:30"
          },
          {
              id: 38888,
              name: "Domino's Pizza",
              image: require('./assets/images/deal1.png'),
              price: 15.50,
              status: "C",
              status_desc: "Canceled",
              itemCount: 1,
              deliveredTime: "19 Sep, 10:30"
          },
      ]
  },
  {
      title: "15 Sep 2021",
      data: [
          {
              id: 48888,
              name: "Starbucks",
              image: require('./assets/images/deal1.png'),
              price: 40.00,
              status: "D",
              status_desc: "Delivered",
              itemCount: 4,
              deliveredTime: "15 Sep, 10:00"
          }
      ]
  }
]

// const cartItems = [
//   {
//     id: 0,
//     name: 'Ginger',
//     description: 'a crate of this',
//     qty: 1,
//     price: 399,
//     image: require('./assets/images/ginger.png'),
//   },
//   {
//     id: 1,
//     name: 'Tomato',
//     description: 'a crate of this',
//     qty: 1,
//     price: 900,
//     image: require('./assets/images/tomato.png'),
//   },
//   {
//     id: 2,
//     name: 'Spaghetti',
//     description: 'a crate of this',
//     qty: 1,
//     price: 250,
//     image: require('./assets/images/spaghetti.png'),
//   },
// ];



// const upcomingOrders = [
//   {
//     title: 'Latest Orders',
//     data: [
//       {
//         id: 88888,
//         name: 'Starbucks',
//         image: require('./assets/images/res3.png'),
//         price: 15000.0,
//         status: 'O',
//         status_desc: 'On the way',
//         itemCount: 4,
//         deliveredTime: '27 Sep, 10:00',
//       },
//       {
//         id: 98888,
//         name: 'McDonald',
//         image: require('./assets/images/res2.png'),
//         price: 25000.0,
//         status: 'O',
//         status_desc: 'On the way',
//         itemCount: 4,
//         deliveredTime: '27 Sep, 10:00',
//       },
//     ],
//   },
//   {
//     title: '12 May, 2022',
//     data: [
//       {
//         id: 68888,
//         name: 'Starbucks',
//         image: require('./assets/images/vendor1.png'),
//         price: 12400.0,
//         status: 'D',
//         status_desc: 'Delivered',
//         itemCount: 4,
//         deliveredTime: '27 Sep, 10:00',
//       },
//       {
//         id: 78888,
//         name: 'Burger King',
//         image: require('./assets/images/res4.png'),
//         price: 6000.0,
//         status: 'D',
//         status_desc: 'Delivered',
//         itemCount: 4,
//         deliveredTime: '27 Sep, 8:00',
//       },
//     ],
//   },
// ];

// const orderDetailsImage = [
//   {
//     id: 1,
//     name: 'Spaghetti',
//     qty: 1,
//     bunch: 1,
//     price: 250,
//     image: require('./assets/images/spaghetti.png'),
//   },
//   {
//     id: 2,
//     name: 'Tomato',
//     qty: 1,
//     bunch: 1,
//     price: 900,
//     image: require('./assets/images/tomato.png'),
//   },
// ];

// const orderDetails = [
//   {
//     id: 68888,
//     name: 'Starbucks',
//     items: [
//       {
//         id: 1,
//         name: 'Spaghetti',
//         qty: 1,
//         bunch: 1,
//         price: 250,
//         image: require('./assets/images/spaghetti.png'),
//       },
//       {
//         id: 2,
//         name: 'Tomato',
//         qty: 1,
//         bunch: 1,
//         price: 900,
//         image: require('./assets/images/tomato.png'),
//       },
//     ],
//     status: 'O',
//     status_desc: 'On the way',
//     address: 'Kado Bimko Estate, Gwarimpa',
//     phoneNumber: '+234083446432',
//     customerName: 'Denis Mendie',
//     itemCount: 4,
//     deliveredTime: '27 Sep, 10:00',
//   },
// ];

// const fromLocs = [
//   {
//     latitude: 4.9422993,
//     longitude: 8.3360834,
//   },
//   {
//     latitude: 4.9358017,
//     longitude: 8.3323579,
//   },
// ];

// const deliveryMan = {
//   name: 'Sammy James',
//   rating: 4.2,
//   likes: 200,
//   phoneNumber: '+234083446432',
//   registrationNumber: 'AX12JS',
//   vehicleType: 'Toyota Camry',
//   vehicleColor: 'Grey',
//   avatar: require('./assets/images/profile.png'),
// };

// const myProfile = {
//   id: '1',
//   username: 'user1',
//   firstName: 'Joan',
//   lastName: 'Smith',
//   profile_image: require('./assets/images/profile1.png'),
//   email: 'joanasmith007@gmail.com',
//   address: '17 Essien Epe Street',
//   phone: '07001234567',
//   password: 'cnw0oc202jc2j2',
// };

// const notifications = [
//   {
//     title: 'Today',
//     data: [
//       {
//         id: 1,
//         image: require('./assets/images/res1.png'),
//         title: "Domino's - Buy 1 get 1 free",
//         description: 'Buy 1 get 1 free for small sizes until Nov 30, 2021',
//         duration: 'a few seconds ago',
//       },
//       {
//         id: 2,
//         image: require('./assets/images/vendor1.png'),
//         title: 'Veg Biryani - 35% sale today',
//         description: 'Buy 1 get 1 free for small sizes until Nov 30, 2021',
//         duration: '5 mins ago',
//       },
//     ],
//   },
//   {
//     title: 'Yesterday',
//     data: [
//       {
//         id: 3,
//         image: require('./assets/images/res2.png'),
//         title: "Domino's - Buy 1 get 1 free",
//         description: 'Buy 1 get 1 free for small sizes until Nov 30, 2021',
//         duration: '1 day ago',
//       },
//       {
//         id: 4,
//         image: require('./assets/images/res3.png'),
//         title: 'Veg Biryani - 35% sale today',
//         description: 'Buy 1 get 1 free for small sizes until Nov 30, 2021',
//         duration: '1 day ago',
//       },
//     ],
//   },
// ];


// const usedDeals = [
//   {
//     id: 1,
//     label: 'Starbucks',
//     coupon: '98UJX2',
//     description: 'Valid until October 2023',
//     offer: 20,
//     image: require('./assets/images/starbucks.png'),
//   },
//   {
//     id: 2,
//     label: 'Piza hut',
//     coupon: '01D5NN',
//     description: 'Valid until November 2023',
//     offer: 5,
//     image: require('./assets/images/pizza_hut.png'),
//   },
// ];

// const faq = [
//   {
//     id: 1,
//     question: 'How does warranty works?',
//     answer:
//       'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
//   },
//   {
//     id: 2,
//     question: 'How long is my order delivery time?',
//     answer:
//       'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
//   },
//   {
//     id: 3,
//     question: 'How to become a Vendor?',
//     answer:
//       'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
//   },
//   {
//     id: 4,
//     question: "Why I don't receive OTP code?",
//     answer:
//       'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
//   },
//   {
//     id: 5,
//     question: 'How to rate products?',
//     answer:
//       'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
//   },
//   {
//     id: 6,
//     question: 'How to get refund?',
//     answer:
//       'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
//   },
//   {
//     id: 7,
//     question: 'How to deal with late deliveries?',
//     answer:
//       'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
//   },
//   {
//     id: 8,
//     question: 'How to report seller?',
//     answer:
//       'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
//   },
//   {
//     id: 9,
//     question: 'What is Fresh2Carts?',
//     answer:
//       'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
//   },
//   {
//     id: 10,
//     question: 'How to contact Fresh2Carts',
//     answer:
//       'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
//   },
//   {
//     id: 11,
//     question: 'How do I find what I want?',
//     answer:
//       'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
//   },
//   {
//     id: 12,
//     question: 'How do I pay for my order?',
//     answer:
//       'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
//   },
//   {
//     id: 13,
//     question: 'How do I track my order?',
//     answer:
//       'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
//   },
//   {
//     id: 14,
//     question: 'How do I cancel my order?',
//     answer:
//       'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
//   },
//   {
//     id: 15,
//     question: 'How do I return an item?',
//     answer:
//       'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
//   },
//   {
//     id: 16,
//     question: 'How do I get a refund?',
//     answer:
//       'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
//   },
//   {
//     id: 17,
//     question: 'How do I request an invoice?',
//     answer:
//       'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
//   },
//   {
//     id: 18,
//     question: 'How do I change my delivery address?',
//     answer:
//       'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
//   },
//   {
//     id: 19,
//     question: 'How do I change my password',
//     answer:
//       'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
//   },
//   {
//     id: 20,
//     question: 'How do I change my phone number',
//     answer:
//       'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
//   },
//   {
//     id: 21,
//     question: 'How do I change my email addres',
//     answer:
//       'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
//   },
//   {
//     id: 22,
//     question: 'I want to return a product. What do I do?',
//     answer:
//       'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
//   },
//   {
//     id: 23,
//     question: 'What if I want to modify my order?',
//     answer:
//       'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
//   },
//   {
//     id: 24,
//     question: 'Should i tip my courier?',
//     answer:
//       'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
//   },
//   {
//     id: 25,
//     question: 'How can I redeem my coupon code',
//     answer:
//       'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
//   },
// ];

export{
  aroundYou,
  mealOfTheDay,
  recommended,
  categories,
  featured,
  topDeals,
  orderHistories
  // feedBack,
  // fromLocs,
  // orderDetailsImage,
  // deliveryMan,
  // cartItems,
  // faq,
  // orderHistories,
  // upcomingOrders,
  // myProfile,
  // Foods,
  // orderDetails,
  // deals,
  // notifications,
};
