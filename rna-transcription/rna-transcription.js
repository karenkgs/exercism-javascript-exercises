var DnaTranscriber = function () {};

const dnaToRnaTranscription = {
	G:"C",
	C:"G",
	T:"A",
	A:"U"
};

DnaTranscriber.prototype.toRna = function (dnaStrand) {
	
	return dnaStrand.split('').map(
		dna => {
			if(dnaToRnaTranscription[dna]){
				return dnaToRnaTranscription[dna];
			} else {
				throw new Error("Invalid input");
			}
		}
	).join("");

};

module.exports = DnaTranscriber;
