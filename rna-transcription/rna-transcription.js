var DnaTranscriber = function () {};

const dnaToRnaTranscription = {
	G:"C",
	C:"G",
	T:"A",
	A:"U"
};

DnaTranscriber.prototype.toRna = function (dna) {
	const dnaStrand = dna.split('');
	var rna = "";

	dnaStrand.forEach(
		dna => {
			if(dnaToRnaTranscription[dna]){
				rna += dnaToRnaTranscription[dna];
			} else {
				throw new Error("Invalid input");
			}
		}
	);

	return rna;

};

module.exports = DnaTranscriber;
