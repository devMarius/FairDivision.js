# FairDivision.js
Class FairDivision is responsible for fair allocation of items among players based on bids made by each player.

```javascript

// Example usage

const items = ['Item A', 'Item B', 'Item C', 'Item D'];
const players = [
  { name: 'Bob', bids: [10000, 2000, 500, 800] },
  { name: 'Carol', bids: [4000, 1000, 1500, 2000] },
  { name: 'Ted', bids: [7000, 4000, 2000, 1000] },
];

const fairDivision = new FairDivision(items, players);
fairDivision.adjustedWinner();
fairDivision.printFinalAllocation();

```
