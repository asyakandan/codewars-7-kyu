function getMiddle(s) {
	let middle = s.length / 2;
	
	return (s.length % 2) ? s[Math.floor(middle)] : s.slice(middle - 1, middle + 1);
}