import { Product, Category } from './types';

export const categories: Category[] = [
  { id: 'c1', name: 'Arduino Boards', image: 'https://images.unsplash.com/photo-1608564697071-ddf911d81370?auto=format&fit=crop&w=500&q=80' },
  { id: 'c2', name: 'ESP32 Boards', image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=500&q=80' },
  { id: 'c3', name: 'Raspberry Pi', image: '/images/raspberry-pi.png' },
  { id: 'c4', name: 'Sensors', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=500&q=80' },
  { id: 'c5', name: 'Robotics Kits', image: 'https://images.unsplash.com/photo-1535378273068-9bb67d5beacd?auto=format&fit=crop&w=500&q=80' },
  { id: 'c6', name: 'Drone Parts', image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=500&q=80' },
  { id: 'c7', name: 'Motors', image: 'https://images.unsplash.com/photo-1537498425277-c283d32ef9db?auto=format&fit=crop&w=500&q=80' },
  { id: 'c8', name: 'Displays', image: 'https://images.unsplash.com/photo-1529078155058-5d716f45d604?auto=format&fit=crop&w=500&q=80' },
  { id: 'c9', name: 'Power Supplies', image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=500&q=80' },
  { id: 'c10', name: 'Components', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80' },
];

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Arduino Uno R3',
    description: 'The standard microcontroller board based on the ATmega328P. Perfect for beginners.',
    price: 999,
    oldPrice: 1299,
    badge: 'Best Seller',
    rating: 4.8,
    category: 'Arduino Boards',
    image: 'https://images.unsplash.com/photo-1608564697071-ddf911d81370?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'p2',
    name: 'ESP32 Development Board',
    description: 'Powerful Wi-Fi + Bluetooth IoT board with low power consumption.',
    price: 499,
    oldPrice: 799,
    badge: '38% OFF',
    rating: 4.9,
    category: 'ESP32 Boards',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'p3',
    name: 'Raspberry Pi 5 (8GB)',
    description: 'The latest generation mini PC with incredible processing power.',
    price: 7999,
    badge: 'New',
    rating: 5.0,
    category: 'Raspberry Pi',
    image: '/images/raspberry-pi.png'
  },
  {
    id: 'p4',
    name: 'Ultrasonic Sensor HC-SR04',
    description: 'Accurate distance measuring sensor for robotics obstacle avoidance.',
    price: 150,
    oldPrice: 200,
    rating: 4.6,
    category: 'Sensors',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'p5',
    name: 'Advanced Robotics Kit',
    description: 'Complete kit including chassis, motors, sensors, and controller.',
    price: 2499,
    oldPrice: 3500,
    badge: 'Sale',
    rating: 4.7,
    category: 'Robotics Kits',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'p6',
    name: 'MG996R Servo Motor',
    description: 'High torque metal gear servo motor for precise robotic movements.',
    price: 350,
    rating: 4.5,
    category: 'Motors',
    image: 'https://images.unsplash.com/photo-1537498425277-c283d32ef9db?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'p7',
    name: 'Lithium Battery 3.7V 3000mAh',
    description: 'Rechargeable Li-ion battery pack for IoT and portable projects.',
    price: 450,
    oldPrice: 600,
    rating: 4.8,
    category: 'Power Supplies',
    image: '/images/lithium-battery.png'
  },
  {
    id: 'p8',
    name: '0.96" OLED Display Module',
    description: 'Crisp I2C display for showing sensor data and UI.',
    price: 350,
    rating: 4.7,
    category: 'Displays',
    image: 'https://images.unsplash.com/photo-1529078155058-5d716f45d604?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'p9',
    name: 'L298N Motor Driver',
    description: 'Dual H-Bridge motor driver for controlling DC and stepper motors.',
    price: 199,
    oldPrice: 250,
    badge: 'Popular',
    rating: 4.6,
    category: 'Motors',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'p10',
    name: 'Li-Po Battery 11.1V 2200mAh',
    description: 'High capacity lithium polymer battery for drones and RC cars.',
    price: 1450,
    rating: 4.8,
    category: 'Power Supplies',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'p11',
    name: 'Breadboard & Jumper Wires Kit',
    description: 'Essential prototyping kit with 830 tie-point breadboard and 65 jumper wires.',
    price: 299,
    rating: 4.9,
    category: 'Components',
    image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'p12',
    name: 'NodeMCU ESP8266',
    description: 'Popular open-source IoT platform built around the ESP8266 Wi-Fi chip.',
    price: 249,
    badge: 'New',
    rating: 4.7,
    category: 'ESP32 Boards',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'p13',
    name: 'Arduino Mega 2560',
    description: 'ATmega2560 based microcontroller with 54 digital I/O pins for larger projects.',
    price: 1499,
    oldPrice: 1800,
    rating: 4.8,
    category: 'Arduino Boards',
    image: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'p14',
    name: 'SG90 Micro Servo',
    description: 'Lightweight, high-quality micro servo for small robotics projects.',
    price: 120,
    oldPrice: 150,
    badge: 'Sale',
    rating: 4.6,
    category: 'Motors',
    image: 'https://images.unsplash.com/photo-1537498425277-c283d32ef9db?auto=format&fit=crop&w=500&q=80'
  }
];

export const offers = [
  "🔥 50% OFF on Robotics Kits",
  "⚡ Buy 2 Sensors Get 1 Free",
  "🎁 Free Shipping Above ₹999",
  "🤖 New Arduino Boards Available",
  "💥 Mega Sale on Battery Packs"
];

export const features = [
  { title: "Fast Delivery", description: "Across the country", icon: "Truck" },
  { title: "Premium Quality", description: "Tested components", icon: "Award" },
  { title: "100% Genuine", description: "Original parts only", icon: "ShieldCheck" },
  { title: "Easy Returns", description: "7-day return policy", icon: "RefreshCw" },
  { title: "24x7 Support", description: "Technical assistance", icon: "Headphones" },
  { title: "Secure Payments", description: "Encrypted gateways", icon: "Lock" }
];

export const testimonials = [
  { name: "Rahul Sharma", role: "Robotics Enthusiast", comment: "HariChandra has the best collection of ESP32 modules. Fast delivery and genuine products!", rating: 5 },
  { name: "Priya Desai", role: "Engineering Student", comment: "The robotics kits are perfectly packaged with excellent tutorials. My go-to store for projects.", rating: 5 },
  { name: "Amit Kumar", role: "IoT Developer", comment: "Exceptional quality sensors and very competitive pricing. The free shipping on bulk orders is a lifesaver.", rating: 4 }
];
