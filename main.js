function sellCrop(crop) {
  if (harvestInventory[crop] > 0) {
    const baseReward = seeds[crop].reward;
    const variation = Math.floor(baseReward * 0.1); // 10% variation
    const randomReward = baseReward + Math.floor(Math.random() * (variation * 2 + 1)) - variation;

    coins += randomReward;
    harvestInventory[crop]--;
    if (harvestInventory[crop] === 0) delete harvestInventory[crop];
    drawGarden();
  }
}
