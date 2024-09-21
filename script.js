function calculateMinCost() {
  // Get the user input and split into an array of numbers
  let input = document.getElementById("ropeInput").value;
  let ropeLengths = input.split(",").map(Number); // Convert string to array of numbers
  
  // Function to calculate the minimum cost of connecting the ropes
  const minCost = minimumCost(ropeLengths);
  
  // Display the result
  document.getElementById("result").innerText = `Minimum Cost: ${minCost}`;
}

// Function to calculate the minimum cost to connect the ropes
function minimumCost(arr) {
  // Edge case: If there is only one rope, no cost is needed
  if (arr.length === 1) return 0;

  // Use a Min-Heap (Priority Queue) to store the ropes and get the minimum values quickly
  let minHeap = [...arr].sort((a, b) => a - b); // Sort the array to simulate a min-heap
  
  let totalCost = 0;
  
  // Loop until we are left with only one rope
  while (minHeap.length > 1) {
    // Remove the two smallest ropes
    let first = minHeap.shift();
    let second = minHeap.shift();
    
    // Calculate the cost of connecting them
    let cost = first + second;
    totalCost += cost;

    // Insert the combined rope back into the heap (sorted array)
    minHeap.push(cost);
    minHeap.sort((a, b) => a - b); // Re-sort the array
  }
  
  return totalCost;
}
