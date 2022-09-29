class Rook extends Piece {
	constructor(position, name) {
		super(position, 'rook', name);
		this.ableToCastle = true;
	}

	changePosition(position) {
		this.position = parseInt(position);
		this.ableToCastle = false;
	}

	Moves() {
		return [this.upMove(), 
				this.downMove(), 
				this.rightMove(), 
				this.leftMove() ];
	}
}