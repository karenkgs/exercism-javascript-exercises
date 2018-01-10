const getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const generateRandomKey = function(keyLength){
	var randomKey = "";
	for(var cont=0; cont < keyLength; cont++){
		randomKey += String.fromCharCode(getRandomInt(97, 123));
	}
	return randomKey;
}

var Cipher = function (key = generateRandomKey(100), acceptedKeyCharacters = new RegExp(/^[a-z]+$/)) {
	if(!acceptedKeyCharacters.test(key)){
		throw new Error("Bad key");
	}

	this.key = key;
};

Cipher.prototype.encode = function (decodedString) {
	return this.key.substr(0, decodedString.length);
}

Cipher.prototype.decode = function (codedString) {
	return codedString;
	// return this.key.substr(0, 10);
}

module.exports = Cipher;
