let str = "abccba";
let isPalindrome = true;
let low = 0;
let high = str.length - 1;
debugger;
while(low <= high){
	if(str[low] !== str[high]){
		isPalindrome = false;
	}
	low++;
	high--;
}

if(isPalindrome){
	console.log("It is Palindrome String ");
}
else{
	console.log("Not a Palindrome String ");
}