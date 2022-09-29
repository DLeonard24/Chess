class Queen extends Piece {
	constructor(position, name) {
		super(position, 'queen', name);
	}

	Moves(){
		return [
			this.upMove(),
			this.downMove(),
			this.rightMove(),
			this.leftMove(),
			this.upRightMove(),
			this.upLeftMove(),
			this.downRigthMove(),
			this.downLeftMove()
		];
	}
}