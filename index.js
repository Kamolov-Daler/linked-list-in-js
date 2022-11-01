class Node {
	constructor(data, next = null) {
		this.data = data
		this.next = next
	}
}

class Linkedlist {
	constructor() {
		this.head = null
		this.tail = null
	}

	append(data) {
		const node = new Node(data)

		if (this.tail) {
			this.tail.next = node
		}

		if (!this.head) {
			this.head = node
		}

		this.tail = node
	}

	prepend(data) {
		const node = new Node(data, this.head)

		this.head = node

		if (!this.tail) {
			this.tail = node
		}
	}

	insertAfter(after, data) {
		const found = this.find(after)

		if (!found) {
			return
		}

		found.next = new Node(data, found.next)

	}

	find(data) {
		if (!this.head) {
			console.log('Your list is empty')
			return
		}

		let current = this.head

		while (current) {
			if (current.data === data) {
				return current
			}
			current = current.next
		}
	}

	toArray() {
		const output = [];
		let current = this.head

		while (current) {
			output.push(current)
			current = current.next
		}

		return output
	}

	remove(data) {
		if (!this.head) {
			return
		}

		while (this.head && this.head.data === data) {
			this.head = this.head.next
		}

		let current = this.head
		while (current.next) {
			if (current.next.data === data) {
				// remove
				current.next = current.next.next
			}
			else {
				current = current.next
			}
		}

		if (this.tail.data === data) {
			this.tail = current
		}
	}
}


const list = new Linkedlist()

list.append('My')
list.append('name')
list.append('Daler')
list.append('Kamolov')
list.prepend('Hi')
list.insertAfter('name', 'is')

// list.remove('Kamolov')
list.remove('Hi')

console.log(list.toArray())