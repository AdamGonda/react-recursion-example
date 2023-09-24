function loop(n) {
  for (let i = n; i <= 5; i++) {
    console.log(i);
  }
}

function recursion(n) {
  console.log(n)

	if (n == 5 ) {
		return n
	}

	recursion(n + 1)
}

loop(1)