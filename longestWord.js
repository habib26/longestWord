function longestWord(pString){
	var str = pString.split(" ");
	 var longest = 0; 
	 var word = null;
	 str.forEach(function(str) {
	  if (longest < str.length) {
		   longest = str.length; 
		   word = str;
	    } 
	});
	 return word;

}
console.log(longestWord('Hello world javascript'));
console.log(longestWord('un deux trois quatre cinq six'));
console.log(longestWord('pierre feuille ciseaux'));
console.log(longestWord('Hello world javascript'));