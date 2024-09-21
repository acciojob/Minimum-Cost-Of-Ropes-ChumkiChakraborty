function calculateMinCost() {
      // Get the input and split it into an array of numbers
      const input = document.getElementById('rope-lengths').value;
      const ropeLengths = input.split(',').map(Number); // Convert to array of numbers

      // Check if input is valid (all numbers)
      if (ropeLengths.some(isNaN)) {
        document.getElementById('result').innerText = 'Please enter valid numbers!';
        return;
      }

      // Call the function to calculate the minimum cost
      const minCost = minimumCost(ropeLengths);
      
      // Display the result
      document.getElementById('result').innerText = `Minimum Cost: ${minCost}`;
    }

    // Function to calculate the minimum cost of connecting ropes
    function minimumCost(arr) {
      if (arr.length === 1) return 0; // Edge case: Only one rope, no cost required

      // Sort array to simulate a min-heap (smallest values first)
      let minHeap = [...arr].sort((a, b) => a - b);
      let totalCost = 0;

      // Combine ropes until we are left with one rope
      while (minHeap.length > 1) {
        // Remove the two smallest elements
        const first = minHeap.shift();
        const second = minHeap.shift();

        // Calculate the cost of combining them
        const cost = first + second;
        totalCost += cost;

        // Insert the new combined rope back into the sorted array (re-sort)
        minHeap.push(cost);
        minHeap.sort((a, b) => a - b);
      }

      return totalCost;
    }