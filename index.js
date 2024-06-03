const system24 = (percentages, threshold) => {
    if (percentages.map(percentage => typeof percentage !== 'number').includes(true)) throw new Error('Percentages must be numbers!');
    else {
        try {
            let seats = 21;
            let seatDistribution = new Array(percentages.length).fill(0);
            let eligiblePercentages = percentages.map((percentage, index) => ({ percentage, index })).filter(p => p.percentage >= threshold);        

            for (let i = 0; i < seats; i++) {
                let maxQuotient = 0;
                let maxIndex = -1;
                let remainingSeats = seats - i;

                eligiblePercentages.forEach(party => {
                    let quotient = (party.percentage / (seatDistribution[party.index] + 1));
                    if (quotient > maxQuotient) { 
                        maxQuotient = quotient;
                        maxIndex = party.index;
                    }
                });

                seatDistribution[maxIndex]++;
                remainingSeats--;
            }

            return seatDistribution;
        } catch(error) {
            console.error(error);
        }
    }
}

module.exports = { system24 }