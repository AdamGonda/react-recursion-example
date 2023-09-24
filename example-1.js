const arr = []

function fib(prev, next, limit) {
  arr.push(prev)

	if (next > limit ) {
		return next
	}

	fib(next, prev + next, limit)
}

fib(0, 1, 13)
console.log(arr)