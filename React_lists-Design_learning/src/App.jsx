import RegularList from "./RegularList";
import LargePersonListItem from "./people/LargePersonListItem";
import { SmallPersonListItem } from "./people/SmallPersonListItem";

let peoples = [
  {
    name: "Alice",
    age: 28,
    hobbies: ["reading", "painting", "hiking"],
    hairColor: "brown",
  },
  {
    name: "Bob",
    age: 35,
    hobbies: ["gardening", "cooking", "photography"],
    hairColor: "black",
  },
  {
    name: "Charlie",
    age: 22,
    hobbies: ["traveling", "biking", "music"],
    hairColor: "blonde",
  },
  {
    name: "David",
    age: 40,
    hobbies: ["writing", "running", "movies"],
    hairColor: "red",
  },
  {
    name: "Eva",
    age: 31,
    hobbies: ["yoga", "dancing", "drawing"],
    hairColor: "brown",
  },
  {
    name: "Frank",
    age: 25,
    hobbies: ["gaming", "swimming", "coding"],
    hairColor: "black",
  },
  {
    name: "Grace",
    age: 33,
    hobbies: ["cooking", "reading", "traveling"],
    hairColor: "blonde",
  },
  {
    name: "Harry",
    age: 29,
    hobbies: ["playing guitar", "hiking", "photography"],
    hairColor: "brown",
  },
  {
    name: "Ivy",
    age: 26,
    hobbies: ["baking", "painting", "gardening"],
    hairColor: "red",
  },
  {
    name: "Jack",
    age: 30,
    hobbies: ["writing", "surfing", "movies"],
    hairColor: "black",
  },
];

let products = [
  {
    productName: "Smartphone X",
    description: "High-performance smartphone with cutting-edge features.",
    price: 699.99,
    rating: 4.5,
  },
  {
    productName: "Laptop Pro",
    description:
      "Powerful laptop for work and entertainment with a sleek design.",
    price: 1299.99,
    rating: 4.7,
  },
  {
    productName: "Wireless Headphones",
    description:
      "Comfortable over-ear headphones with noise-canceling technology.",
    price: 149.99,
    rating: 4.3,
  },
  {
    productName: "Smart Watch",
    description:
      "Feature-rich smartwatch with fitness tracking and health monitoring.",
    price: 199.99,
    rating: 4.6,
  },
  {
    productName: "Digital Camera",
    description:
      "High-resolution camera with advanced shooting modes and image stabilization.",
    price: 799.99,
    rating: 4.8,
  },
  {
    productName: "Gaming Console",
    description:
      "Next-gen gaming console with immersive graphics and multiplayer capabilities.",
    price: 499.99,
    rating: 4.9,
  },
  {
    productName: "Bluetooth Speaker",
    description: "Portable speaker with clear sound and long battery life.",
    price: 79.99,
    rating: 4.2,
  },
  {
    productName: "4K Smart TV",
    description:
      "Ultra-high-definition smart TV with a wide range of streaming apps.",
    price: 999.99,
    rating: 4.7,
  },
  {
    productName: "Fitness Tracker",
    description:
      "Wearable fitness tracker with heart rate monitoring and sleep analysis.",
    price: 59.99,
    rating: 4.4,
  },
  {
    productName: "Coffee Maker",
    description:
      "Automatic coffee maker with programmable features for the perfect brew.",
    price: 129.99,
    rating: 4.6,
  },
];

function App() {
  return (
    <>
      <h1>Your code goes here</h1>
      <RegularList items={peoples} ComponentName={LargePersonListItem} />
      <RegularList items={peoples} ComponentName={SmallPersonListItem} />
    </>
  );
}

export default App;
