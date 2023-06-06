const Foods = [
  {
    id: 0,
    name: 'Tomato',
    description: 'a crate of this',
    price: 900,
    qty: 18,
    image: require('../assets/images/tomato.png'),
    productImages: [
      {
        id: 0,
        image: require('../assets/images/broccoli.png'),
      },
      {
        id: 1,
        image: require('../assets/images/apple.png'),
      },
    ],
  },
  {
    id: 1,
    name: 'Banana',
    description: 'a crate of this',
    price: 2300,
    qty: 9,
    image: require('../assets/images/banana.png'),
    productImages: [
      {
        id: 0,
        image: require('../assets/images/banaans2.png'),
      },
      {
        id: 2,
        image: require('../assets/images/beer.png'),
      },
    ],
  },
  {
    id: 2,
    name: 'Apple',
    description: 'a crate of this',
    price: 300,
    qty: 31,
    image: require('../assets/images/apple.png'),
    productImages: [
      {
        id: 0,
        image: require('../assets/images/apple.png'),
      },
      {
        id: 1,
        image: require('../assets/images/fruits.png'),
      },
    ],
  },
  {
    id: 3,
    name: 'Mama Silver',
    description: 'a crate of this',
    price: 18000,
    qty: 10,
    image: require('../assets/images/rice.png'),
    productImages: [
      {
        id: 0,
        image: require('../assets/images/banaans2.png'),
      },
      {
        id: 1,
        image: require('../assets/images/beer.png'),
      },
    ],
  },
  {
    id: 4,
    name: 'Spaghetti',
    description: 'a crate of this',
    price: 250,
    qty: 29,
    image: require('../assets/images/spaghetti.png'),
    productImages: [
      {
        id: 0,
        image: require('../assets/images/whine.png'),
      },
      {
        id: 2,
        image: require('../assets/images/veg_biryani.png'),
      },
    ],
  },
  {
    id: 5,
    name: 'Beans',
    description: 'a crate of this',
    price: 250,
    qty: 23,
    image: require('../assets/images/wolinbean.png'),
    productImages: [
      {
        id: 0,
        image: require('../assets/images/wolinbean.png'),
      },
      {
        id: 1,
        image: require('../assets/images/hot_tacos.png'),
      },
    ],
  },
  {
    id: 6,
    name: 'Flour',
    description: 'a crate of this',
    price: 250,
    qty: 20,
    image: require('../assets/images/greaneflour.png'),
    productImages: [
      {
        id: 0,
        image: require('../assets/images/greaneflour.png'),
      },
    ],
  },
  {
    id: 7,
    name: 'Whisky',
    description: 'a crate of this',
    price: 1900,
    qty: 5,
    image: require('../assets/images/whisky.png'),
    productImages: [
      {
        id: 0,
        image: require('../assets/images/whine.png'),
      },
      {
        id: 1,
        image: require('../assets/images/7Alive.png'),
      },
    ],
  },
  {
    id: 8,
    name: 'Soda',
    description: 'a crate of this',
    price: 150,
    qty: 8,
    image: require('../assets/images/soda.png'),
    productImages: [
      {
        id: 0,
        image: require('../assets/images/drinks.png'),
      },
      {
        id: 1,
        image: require('../assets/images/juiceMain.png'),
      },
    ],
  },
  {
    id: 9,
    name: 'Beer',
    description: 'a crate of this',
    price: 600,
    qty: 13,
    image: require('../assets/images/beer.png'),
    productImages: [
      {
        id: 0,
        image: require('../assets/images/beer.png'),
      },
    ],
  },
  {
    id: 10,
    name: 'Vodka',
    description: 'a crate of this',
    price: 1500,
    qty: 14,
    image: require('../assets/images/vodka.png'),
    productImages: [
      {
        id: 0,
        image: require('../assets/images/vodka.png'),
      },
      {
        id: 2,
        image: require('../assets/images/beer.png'),
      },
    ],
  },
  {
    id: 11,
    name: 'Seven Alive',
    description: 'a crate of this',
    price: 900,
    qty: 6,
    image: require('../assets/images/7Alive.png'),
    productImages: [
      {
        id: 2,
        image: require('../assets/images/beer.png'),
      },
    ],
  },

  {
    id: 12,
    name: 'Meat',
    description: 'a crate of this',
    price: 8000,
    qty: 12,
    image: require('../assets/images/meat.png'),
    productImages: [
      {
        id: 0,
        image: require('../assets/images/meat.png'),
      },
    ],
  },
  {
    id: 13,
    name: 'Hamburger',
    description: 'a crate of this',
    price: 1000,
    qty: 11,
    image: require('../assets/images/hamburger.png'),
    productImages: [
      {
        id: 1,
        image: require('../assets/images/veg_biryani.png'),
      },
      {
        id: 2,
        image: require('../assets/images/hamburger.png'),
      },
    ],
  },
  {
    id: 14,
    name: 'Ginger',
    description: 'a crate of this',
    price: 399,
    qty: 4,
    image: require('../assets/images/ginger.png'),
    productImages: [
      {
        id: 0,
        image: require('../assets/images/banaans2.png'),
      },
    ],
  },
  {
    id: 15,
    name: 'Brocoli',
    description: 'a crate of this',
    price: 100,
    qty: 20,
    image: require('../assets/images/broccoli.png'),
    productImages: [
      {
        id: 0,
        image: require('../assets/images/vegetables.png'),
      },
      {
        id: 1,
        image: require('../assets/images/hot_tacos.png'),
      },
      {
        id: 2,
        image: require('../assets/images/cabbage.png'),
      },
    ],
  },
];

const categories = [
  {
    id: 0,
    label: 'Fruits',
    icon: require('../assets/images/vegetables.png'),
    items: Foods,
  },
  {
    id: 1,
    label: 'Drinks',
    icon: require('../assets/images/drinks.png'),
    items: Foods,
  },
  {
    id: 2,
    label: 'Protein',
    icon: require('../assets/images/protein.png'),
    items: Foods,
  },
  {
    id: 3,
    label: 'Grains',
    icon: require('../assets/images/grains.png'),
    items: Foods,
  },
  {
    id: 4,
    label: 'Snacks',
    icon: require('../assets/images/pastry.png'),
    items: Foods,
  },
];

const stores = [
  {
    id: 0,
    title: 'Green Food',
    description: 'Shoe in Miniacs Shop',
    storeStatus: 'OPEN',
    promo: 'Spend $50, get 30% off',
    rating: 4.5,
    likes: 200,
    distance: 2.5,
    discount: 5,
    address: 'Plot 4, 611 Road, Off 7th Avenue',
    address2: 'Gwarinpa, Abuja, NIigeria,  900211',
    latitude: 4.92805,
    longitude: 8.32705,
    deliveryFee: 1.4,
    minDeliveryTime: 25,
    maxDeliveryTime: 40,
    image: require('../assets/images/res4.png'),
    categories: [
      {
        id: 0,
        label: 'Fruits',
        icon: require('../assets/images/veggies.png'),
        items: [
          {
            id: 0,
            name: 'Fresh Mangoes',
            description: 'Mexican tortilla & tacos',
            price: 240,
            qty: 4,
            image: require('../assets/images/mango.png'),
            productImages: [
              {
                id: 0,
                image: require('../assets/images/broccoli.png'),
              },
              {
                id: 1,
                image: require('../assets/images/apple.png'),
              },
            ],
          },
          {
            id: 1,
            name: 'Banana',
            description: 'labore et dolore magna aliqua. Ut enim ad',
            price: 159,
            qty: 6,
            image: require('../assets/images/banana.png'),
            productImages: [
              {
                id: 0,
                image: require('../assets/images/banana.png'),
              },
              {
                id: 1,
                image: require('../assets/images/fruits.png'),
              },
            ],
          },
        ],
      },
      {
        id: 1,
        label: 'Drinks',
        icon: require('../assets/images/drinks.png'),
        items: [
          {
            id: 0,
            name: 'Solec Sparks',
            description: 'tastee and iceee',
            price: 600,
            qty: 7,
            image: require('../assets/images/juice.png'),
            productImages: [
              {
                id: 0,
                image: require('../assets/images/soda.png'),
              },
              {
                id: 2,
                image: require('../assets/images/beer.png'),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'TFC Supermarket',
    description: 'Stay tune and check your notif everyday',
    storeStatus: 'OPEN',
    rating: 4.7,
    likes: 3220,
    distance: 4,
    discount: 10,
    deliveryFee: 2,
    address: 'Block 23, South End Street',
    address2: 'Lekki Phase 2, Lagos, 903200',
    latitude: 37.771,
    longitude: -122.468,
    minDeliveryTime: 40,
    maxDeliveryTime: 60,
    image: require('../assets/images/res2.png'),
    categories: [
      {
        id: 0,
        label: 'Protein',
        icon: require('../assets/images/protein.png'),
        items: [
          {
            id: 0,
            name: 'Hot Tacos',
            description: 'Mexican tortilla & tacos',
            price: 1000,
            qty: 4,
            image: require('../assets/images/hot_tacos.png'),
            productImages: [
              {
                id: 0,
                image: require('../assets/images/hamburger.png'),
              },
              {
                id: 1,
                image: require('../assets/images/veg_biryani.png'),
              },
            ],
          },
          {
            id: 1,
            name: 'Banana',
            description: 'labore et dolore magna aliqua. Ut enim ad',
            price: 159,
            qty: 6,
            image: require('../assets/images/banana.png'),
            productImages: [
              {
                id: 0,
                image: require('../assets/images/7Alive.png'),
              },
              {
                id: 1,
                image: require('../assets/images/beer.png'),
              },
            ],
          },
        ],
      },
      {
        id: 1,
        label: 'Snacks',
        icon: require('../assets/images/dairies.png'),
        items: [
          {
            id: 0,
            name: 'Burger',
            description: 'tastee cheesy and sweet',
            price: 1000,
            qty: 7,
            image: require('../assets/images/7Alive.png'),
            productImages: [
              {
                id: 0,
                image: require('../assets/images/hamburger.png'),
              },
              {
                id: 1,
                image: require('../assets/images/hot_tacos.png'),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Calabar Supa Stores',
    description: 'we have everything you need',
    storeStatus: 'OPEN',
    promo: 'Spend $50, get 30% off',
    rating: 4.3,
    likes: 74,
    distance: 4,
    discount: 15,
    deliveryFee: 0.5,
    minDeliveryTime: 55,
    maxDeliveryTime: 35,
    address: 'No 1, Calabar Street, Calbar Rd',
    address2: 'Calabar, 23929, Nigeria ',
    latitude: 4.96805,
    longitude: 8.38705,
    image: require('../assets/images/res3.png'),
    categories: [
      {
        id: 0,
        label: 'Grains',
        icon: require('../assets/images/grains.png'),
        items: [
          {
            id: 0,
            name: 'Beans',
            description: 'Mexican tortilla & tacos',
            price: 10000,
            qty: 4,
            image: require('../assets/images/rice.png'),
            productImages: [
              {
                id: 0,
                image: require('../assets/images/rice.png'),
              },
              {
                id: 1,
                image: require('../assets/images/greaneflour.png'),
              },
            ],
          },
        ],
      },
      {
        id: 1,
        label: 'Oils',
        icon: require('../assets/images/oil.png'),
        items: [
          {
            id: 0,
            name: 'Green Cabbage',
            description: 'Grilled vegetables sandwich',
            price: 500,
            qty: 7,
            image: require('../assets/images/cabbage.png'),
            productImages: [
              {
                id: 0,
                image: require('../assets/images/banaans2.png'),
              },
              {
                id: 1,
                image: require('../assets/images/spaghetti.png'),
              },
              {
                id: 2,
                image: require('../assets/images/beer.png'),
              },
            ],
          },
        ],
      },
      {
        id: 2,
        label: 'Drinks',
        icon: require('../assets/images/drinks.png'),
        items: [
          {
            id: 0,
            name: 'Aitk Whine',
            description: 'a soothing drink to the body',
            price: 1000,
            qty: 7,
            image: require('../assets/images/soda.png'),
            productImages: [
              {
                id: 0,
                image: require('../assets/images/whine.png'),
              },
              {
                id: 1,
                image: require('../assets/images/juiceMain.png'),
              },
              {
                id: 2,
                image: require('../assets/images/beer.png'),
              },
            ],
          },
        ],
      },
    ],
  },
];

const mealOfTheDay = {
    id: 0,
    image: require('../assets/images/offerImage.png'),
    name:"Grilled Chicken",
    price:2500,
    Restaurant:"Mc Donald",
    description: 'Enjoy 40% off your first grocery order',
    backgroundColor: '#fc682b',
}

const feedBack = [
  {
    id: 0,
    name: 'Mohamed Epe',
    ratings: 4,
    feedBack:
      'orci lacinia placerat turpis mattis praesent mi id ipsum ut est dictumst orci ultricies volutpat”',
  },
  {
    id: 1,
    name: 'Aaron Wike',
    ratings: 3,
    feedBack:
      'orci lacinia placerat turpis mattis praesent mi id ipsum ut est dictumst orci ultricies volutpat”',
  },
  {
    id: 2,
    name: 'Mayo Tunde',
    ratings: 2.5,
    feedBack:
      'orci lacinia placerat turpis mattis praesent mi id ipsum ut est dictumst orci ultricies volutpat”',
  },
  {
    id: 3,
    name: 'Jigiri Ofem',
    ratings: 5,
    feedBack:
      'orci lacinia placerat turpis mattis praesent mi id ipsum ut est dictumst orci ultricies volutpat”',
  },
  {
    id: 4,
    name: 'Kanuri Chike',
    ratings: 4.5,
    feedBack:
      'orci lacinia placerat turpis mattis praesent mi id ipsum ut est dictumst orci ultricies volutpat”',
  },
];

const cartItems = [
  {
    id: 0,
    name: 'Ginger',
    description: 'a crate of this',
    qty: 1,
    price: 399,
    image: require('../assets/images/ginger.png'),
  },
  {
    id: 1,
    name: 'Tomato',
    description: 'a crate of this',
    qty: 1,
    price: 900,
    image: require('../assets/images/tomato.png'),
  },
  {
    id: 2,
    name: 'Spaghetti',
    description: 'a crate of this',
    qty: 1,
    price: 250,
    image: require('../assets/images/spaghetti.png'),
  },
];

const orderHistories = [
  {
    title: '19 Sep 2021',
    data: [
      {
        id: 18888,
        name: 'Pizza Hut',
        image: require('../assets/images/vendor1.png'),
        price: 10335.3,
        status: 'D',
        status_desc: 'Order Delivered',
        itemCount: 3,
        deliveredTime: '19 Sep, 14:30',
      },
      {
        id: 28888,
        name: 'KFC',
        image: require('../assets/images/calabsup.png'),
        price: 53025.0,
        status: 'D',
        status_desc: 'Order Delivered',
        itemCount: 4,
        deliveredTime: '19 Sep, 12:30',
      },
      {
        id: 38888,
        name: "Domino's Pizza",
        image: require('../assets/images/res2.png'),
        price: 7505.5,
        status: 'C',
        status_desc: 'Order Cancel',
        itemCount: 1,
        deliveredTime: '19 Sep, 10:30',
      },
    ],
  },
  {
    title: '15 Sep 2021',
    data: [
      {
        id: 48888,
        name: 'Starbucks',
        image: require('../assets/images/res3.png'),
        price: 4000.0,
        status: 'D',
        status_desc: 'Order Delivered',
        itemCount: 4,
        deliveredTime: '15 Sep, 10:00',
      },
    ],
  },
];

const upcomingOrders = [
  {
    title: 'Latest Orders',
    data: [
      {
        id: 88888,
        name: 'Starbucks',
        image: require('../assets/images/res3.png'),
        price: 15000.0,
        status: 'O',
        status_desc: 'On the way',
        itemCount: 4,
        deliveredTime: '27 Sep, 10:00',
      },
      {
        id: 98888,
        name: 'McDonald',
        image: require('../assets/images/res2.png'),
        price: 25000.0,
        status: 'O',
        status_desc: 'On the way',
        itemCount: 4,
        deliveredTime: '27 Sep, 10:00',
      },
    ],
  },
  {
    title: '12 May, 2022',
    data: [
      {
        id: 68888,
        name: 'Starbucks',
        image: require('../assets/images/vendor1.png'),
        price: 12400.0,
        status: 'D',
        status_desc: 'Order Delivered',
        itemCount: 4,
        deliveredTime: '27 Sep, 10:00',
      },
      {
        id: 78888,
        name: 'Burger King',
        image: require('../assets/images/res4.png'),
        price: 6000.0,
        status: 'D',
        status_desc: 'Order Delivered',
        itemCount: 4,
        deliveredTime: '27 Sep, 8:00',
      },
    ],
  },
];

const orderDetailsImage = [
  {
    id: 1,
    name: 'Spaghetti',
    qty: 1,
    bunch: 1,
    price: 250,
    image: require('../assets/images/spaghetti.png'),
  },
  {
    id: 2,
    name: 'Tomato',
    qty: 1,
    bunch: 1,
    price: 900,
    image: require('../assets/images/tomato.png'),
  },
];

const orderDetails = [
  {
    id: 68888,
    name: 'Starbucks',
    items: [
      {
        id: 1,
        name: 'Spaghetti',
        qty: 1,
        bunch: 1,
        price: 250,
        image: require('../assets/images/spaghetti.png'),
      },
      {
        id: 2,
        name: 'Tomato',
        qty: 1,
        bunch: 1,
        price: 900,
        image: require('../assets/images/tomato.png'),
      },
    ],
    status: 'O',
    status_desc: 'On the way',
    address: 'Kado Bimko Estate, Gwarimpa',
    phoneNumber: '+234083446432',
    customerName: 'Denis Mendie',
    itemCount: 4,
    deliveredTime: '27 Sep, 10:00',
  },
];

const fromLocs = [
  {
    latitude: 4.9422993,
    longitude: 8.3360834,
  },
  {
    latitude: 4.9358017,
    longitude: 8.3323579,
  },
];

const deliveryMan = {
  name: 'Sammy James',
  rating: 4.2,
  likes: 200,
  phoneNumber: '+234083446432',
  registrationNumber: 'AX12JS',
  vehicleType: 'Toyota Camry',
  vehicleColor: 'Grey',
  avatar: require('../assets/images/profile.png'),
};

const myProfile = {
  id: '1',
  username: 'user1',
  firstName: 'Joan',
  lastName: 'Smith',
  profile_image: require('../assets/images/profile1.png'),
  email: 'joanasmith007@gmail.com',
  address: '17 Essien Epe Street',
  phone: '07001234567',
  password: 'cnw0oc202jc2j2',
};

const notifications = [
  {
    title: 'Today',
    data: [
      {
        id: 1,
        image: require('../assets/images/res1.png'),
        title: "Domino's - Buy 1 get 1 free",
        description: 'Buy 1 get 1 free for small sizes until Nov 30, 2021',
        duration: 'a few seconds ago',
      },
      {
        id: 2,
        image: require('../assets/images/vendor1.png'),
        title: 'Veg Biryani - 35% sale today',
        description: 'Buy 1 get 1 free for small sizes until Nov 30, 2021',
        duration: '5 mins ago',
      },
    ],
  },
  {
    title: 'Yesterday',
    data: [
      {
        id: 3,
        image: require('../assets/images/res2.png'),
        title: "Domino's - Buy 1 get 1 free",
        description: 'Buy 1 get 1 free for small sizes until Nov 30, 2021',
        duration: '1 day ago',
      },
      {
        id: 4,
        image: require('../assets/images/res3.png'),
        title: 'Veg Biryani - 35% sale today',
        description: 'Buy 1 get 1 free for small sizes until Nov 30, 2021',
        duration: '1 day ago',
      },
    ],
  },
];

const deals = [
  {
    id: 1,
    label: 'Pizza Place',
    coupon: 'JIS3718',
    description: 'Valid until January 2023',
    offer: 8,
    image: require('../assets/images/deal1.png'),
  },
  {
    id: 3,
    label: 'Otilo Market',
    coupon: 'ES67UIH',
    description: 'Valid until December 2023',
    offer: 15,
    image: require('../assets/images/deal3.png'),
  },
  {
    id: 5,
    label: 'South End Place',
    coupon: '78HBJS6',
    description: 'Valid until March 2023',
    offer: 7,
    image: require('../assets/images/deal5.png'),
  },
  {
    id: 6,
    label: 'One Stop Shop',
    coupon: 'TY567HS',
    description: 'Valid until February 2023',
    offer: 12,
    image: require('../assets/images/deal6.png'),
  },
  {
    id: 7,
    label: 'AIK Stores',
    coupon: '67TVB45',
    description: 'Valid until December 2023',
    offer: 6,
    image: require('../assets/images/deal8.png'),
  },
];

const usedDeals = [
  {
    id: 1,
    label: 'Starbucks',
    coupon: '98UJX2',
    description: 'Valid until October 2023',
    offer: 20,
    image: require('../assets/images/starbucks.png'),
  },
  {
    id: 2,
    label: 'Piza hut',
    coupon: '01D5NN',
    description: 'Valid until November 2023',
    offer: 5,
    image: require('../assets/images/pizza_hut.png'),
  },
];

const faq = [
  {
    id: 1,
    question: 'How does warranty works?',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    id: 2,
    question: 'How long is my order delivery time?',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    id: 3,
    question: 'How to become a Vendor?',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    id: 4,
    question: "Why I don't receive OTP code?",
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    id: 5,
    question: 'How to rate products?',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    id: 6,
    question: 'How to get refund?',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    id: 7,
    question: 'How to deal with late deliveries?',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    id: 8,
    question: 'How to report seller?',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    id: 9,
    question: 'What is Fresh2Carts?',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    id: 10,
    question: 'How to contact Fresh2Carts',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    id: 11,
    question: 'How do I find what I want?',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    id: 12,
    question: 'How do I pay for my order?',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    id: 13,
    question: 'How do I track my order?',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    id: 14,
    question: 'How do I cancel my order?',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    id: 15,
    question: 'How do I return an item?',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    id: 16,
    question: 'How do I get a refund?',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    id: 17,
    question: 'How do I request an invoice?',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    id: 18,
    question: 'How do I change my delivery address?',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    id: 19,
    question: 'How do I change my password',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    id: 20,
    question: 'How do I change my phone number',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    id: 21,
    question: 'How do I change my email addres',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    id: 22,
    question: 'I want to return a product. What do I do?',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    id: 23,
    question: 'What if I want to modify my order?',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    id: 24,
    question: 'Should i tip my courier?',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    id: 25,
    question: 'How can I redeem my coupon code',
    answer:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
];

export default {
  stores,
  mealOfTheDay,
  usedDeals,
  feedBack,
  fromLocs,
  orderDetailsImage,
  deliveryMan,
  categories,
  cartItems,
  faq,
  orderHistories,
  upcomingOrders,
  myProfile,
  Foods,
  orderDetails,
  deals,
  notifications,
};
