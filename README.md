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

"Fairness" in the context of analyzing this algorithm typically refers to the concept of "fair division", which is well-defined in economics and game theory.

The basic idea is that resources should be allocated in such a way that every participant receives a "fair share" which they subjectively perceive as equal to or better than anyone else's share.

The two main types of fair division that are implemented in this class are:

1. **Adjusted Winner Method**: This method involves allocating resources in such a way that each player receives a bundle of resources that, in total, he values at least as much as any other player. This value is calculated based on the individual bids of the player.

2. **Proportional Allocation**: In this method, resources are allocated proportionally according to player bids. Each player receives a fraction of resources in proportion to their bid compared to the total of all bids.

Both of these methods guarantee a certain level of fairness, although they may lead to different outcomes depending on circumstances. It's important to understand, however, that "fairness" is measured here subjectively, based on the individual preferences of the players.

## Other examples:

1. **Division of property after divorce**:

```javascript
// Define various high-value assets to be divided
const items = ['House', 'Car', 'Jewelry Set', 'Bank Account', 'Vacation Home', 'Boat'];
 
// Add inputs for both spouses and their lawyers
const players = [
  { name: 'Spouse 1', bids: [80000, 20000, 30000, 70000, 50000, 40000] },
  { name: 'Spouse 2', bids: [60000, 30000, 50000, 60000, 40000, 80000] },
  { name: 'Lawyer for Spouse 1', bids: [70000, 25000, 35000, 65000, 55000, 45000] },
  { name: 'Lawyer for Spouse 2', bids: [65000, 35000, 55000, 65000, 45000, 85000] }
];

// Use adjustedWinner method to fairly divide the assets
const fairDivision = new FairDivision(items, players);
fairDivision.adjustedWinner();
fairDivision.printFinalAllocation();
```

2. **Division of resources in the company**:

```javascript
// Define various high-value assets to be divided
const items = ['Office Building', 'Company Car', 'Equipment', 'Unused Funds', 'Patents', 'Brand'];
 
// Add inputs for both spouses and their lawyers
const players = [
  { name: 'Shareholder', bids: [0, 20000, 30000, 70000, 50000, 100000] },
  { name: 'Creditor', bids: [60000, 30000, 50000, 80000, 100000, 0] },
  { name: 'Employees', bids: [70000, 15000, 35000, 65000, 0, 0] }
];

// Use adjustedWinner method to fairly divide the assets
const fairDivision = new FairDivision(items, players);
fairDivision.adjustedWinner();
fairDivision.printFinalAllocation();
```
