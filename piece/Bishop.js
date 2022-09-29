class Bishop extends Piece {
	constructor(position, name) {
		super(position, 'bishop', name);
	}

	Moves() {
		return [this.upRightMove(), 
				this.upLeftMove(), 
				this.downRigthMove(), 
				this.downLeftMove()];
	}
}

exports = Bishop;