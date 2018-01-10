const dnaToRnaTranscription = {
    G: "C",
    C: "G",
    T: "A",
    A: "U"
};

class DnaTranscriber {
    toRna(dnaStrand) {
        const dnaStrands = dnaStrand.split('');
        const isValid = dnaStrands.every(dna => dnaToRnaTranscription[dna]);

        if (!isValid) {
            throw new Error("Invalid input");
        }

        return dnaStrands.map(dna => dnaToRnaTranscription[dna]).join("");
    }
}

module.exports = DnaTranscriber;