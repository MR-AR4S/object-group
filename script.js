const items = [
  { name: "Monitor", type: "tech", price: 20_000 },
  { name: "T-shirt", type: "clothe", price: 400 },
  { name: "RAM", type: "tech", price: 1_000 },
  { name: "Graphic", type: "tech", price: 25_000 },
];

const result = Object.groupBy(items, (item) => item.type);

console.log(result);
// access types
console.log(result.clothe);
// { name: "T-shirt", type: "clothe", price: 400 }
