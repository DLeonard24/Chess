class Knight extends Piece {
	constructor(position, name) {
		super(position, 'knight', name);
	}

	Moves() {
		return [
			[parseInt(this.position) + 21],
			[parseInt(this.position) - 21],
			[parseInt(this.position) + 19],
			[parseInt(this.position) - 19],
			[parseInt(this.position) + 12],
			[parseInt(this.position) - 12],
			[parseInt(this.position) + 8],
			[parseInt(this.position) - 8]
		];
	}
}