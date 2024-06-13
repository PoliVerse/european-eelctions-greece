const system24 = (percentages, threshold) => {
    if (percentages.map(percentage => typeof percentage !== 'number').includes(true)) throw new Error('Percentages must be numbers!');
    else {
        try {
            let seats = 21;
            let seatDistribution = new Array(percentages.length).fill(0);
            let eligiblePercentages = percentages.map((percentage, index) => ({ percentage, index })).filter(p => p.percentage >= threshold);        
            let totalPercentage = eligiblePercentages.reduce((a, b) => a + b.percentage, 0).toFixed(2);
            let firstDistribution = (totalPercentage / seats).toFixed(2);
            let remainingSeats = 21; 
            let unusedPercentages = new Array(eligiblePercentages.length).fill(0);

            for (let i = 0; i < eligiblePercentages.length; i++) {
                let quotient = Math.floor(eligiblePercentages[i].percentage / firstDistribution);
                seatDistribution[eligiblePercentages[i].index] = quotient;
                remainingSeats -= quotient;
                unusedPercentages[i] = (eligiblePercentages[i].percentage - (firstDistribution * quotient)).toFixed(2);
            }

            while (remainingSeats > 0) {
                let maxUnusedIndex = unusedPercentages.reduce((maxIndex, currentValue, currentIndex, array) => currentValue > array[maxIndex] ? currentIndex : maxIndex, 0);
                seatDistribution[eligiblePercentages[maxUnusedIndex].index]++;
                unusedPercentages[maxUnusedIndex] = 0;
                remainingSeats--;
            }

            return seatDistribution;
        } catch(error) {
            console.error(error);
        }
    }
}

module.exports = { system24 }