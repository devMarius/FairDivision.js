/*
  Class FairDivision is responsible for fair allocation of items among players based on bids made by each player.
  It includes two methods for the fair division of goods: the Adjusted Winner method and the Proportional Allocation method.

  @param {Array} items - an array of items to be distributed among players.
  @param {Array} players - an array of player objects. Each player object has a name property and  
  a bids property which is an array representing the bid of each item.
*/
class FairDivision {
  // Creates a new instance of FairDivision.
  constructor(items, players) {
    this.items = items;
    this.players = players;
  }

  /*
    The Adjusted Winner method (AW) for the fair division of goods. 
    It operates by giving each player a fair share of items based on the value of bids placed by each player.

    This function modifies each player object adding adjustedFairShare and finalAllocation properties.
    The adjustedFairShare property represents the player's fair share of the total points.
    The finalAllocation property is an array of items allocated to the player.
  */
  adjustedWinner() {
    const itemValues = {}; // Object to store the total value of each item
    const itemAllocations = {}; // Object to store the allocation of each item

    // Populate itemValues and itemAllocations objects
    this.items.forEach((item) => {
      itemValues[item] = 0;
      itemAllocations[item] = [];
    });

    // Calculate the total value of each item based on players' bids
    this.players.forEach((player) => {
      player.bids.forEach((bid, index) => {
        itemValues[this.items[index]] += bid;
      });
    });

    // Sort items in descending order based on their total value
    const sortedItems = Object.keys(itemValues).sort(
      (a, b) => itemValues[b] - itemValues[a]
    );

    // Allocate items to players based on a round-robin algorithm
    sortedItems.forEach((item, i) => {
      const player = this.players[i % this.players.length];
      itemAllocations[item].push(player);
    });

    // Compute the adjusted fair share for each player
    this.players.forEach((player) => {
      player.adjustedFairShare = player.totalPoints / this.players.length;

      // Find the final allocation for each player
      player.finalAllocation = [];
      player.bids.forEach((bid, index) => {
        if (itemAllocations[this.items[index]].includes(player)) {
          player.finalAllocation.push(this.items[index]);
        }
      });
    });
  }

  /*
    The Proportional Allocation method (PA) for the fair division of goods. In this method, the items are
    divided among players proportionally in accordance to the proportion of total bids by a player.

    This function modifies each player object adding a finalAllocation property.
    The finalAllocation property is an array of items allocated to the player.
  */  
  proportionalAllocation() {
    this.players.forEach((player) => {
      player.finalAllocation = [];

      // Calculate the sum of player's bids
      const total = player.bids.reduce((a, b) => a + b, 0);

      // Assign items to players proportionally to their bids
      player.bids.forEach((bid, index) => {
        const allocation = (bid / total) * this.items[index];
        for (let i = 0; i < allocation; i++) {
          player.finalAllocation.push(this.items[index]);
        }
      });
    });
  }

  // Prints the final allocation of items to each player
  printFinalAllocation() {
    this.players.forEach((player) => {
      console.log(`${player.name}: ${player.finalAllocation.join(', ')}`);
    });
  }
}
