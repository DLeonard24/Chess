class Piece {
	constructor(position, rank, name) {
		this.position = position;
		this.rank = rank;
		this.name = name;
		this.color = this.name.substring(0,5);
		this.img = document.getElementById(this.name);
	}

	getRank(){
		return this.rank;
	}

	changePosition(position) {
		this.position = parseInt(position);
	}

	upMove() {
		const moves = [];
		for (let move = this.position + 10; move <= 88; move += 10){
			moves.push(move);
			if(document.getElementById(move).hasChildNodes()){
				break;
			}
		}
		return moves;
	}

	downMove() {
		const moves = [];
		for (let move = this.position - 10; move >= 11 ; move -= 10){
			moves.push(move);
			if(document.getElementById(move).hasChildNodes()){
				break;
			}
		}
		return moves;
	}

	rightMove() {
		const position = this.position + '';
		const moves = [];
		for (let move = this.position + 1; move <= parseInt(position[0] + '8'); move++){
			moves.push(move);
			if(document.getElementById(move).hasChildNodes()){
				break;
			}
		} 
		console.log(moves);
		return moves;
	}

	leftMove() {
		const position = this.position + '';
		const moves = [];
		for (let move = this.position - 1; move >= parseInt(position[0] + '1'); move--){ 
			moves.push(move);
			if(document.getElementById(move).hasChildNodes()){
				break;
			}
		}
		return moves;
	}

	upRightMove() {
		const moves = [];
		for (let move = this.position + 11; move <= 88; move += 11) {
			const column = ('' + move)[1];
			if (column > 8 || column < 1){
				break;
			}
			moves.push(move);
			if(document.getElementById(move).hasChildNodes()){
				break;
			}
		}
		return moves;
	}

	upLeftMove() {
		const moves = [];
		for (let move = this.position+9; move <= 88; move+=9) {
			const column = ('' + move)[1];
			if (column > 8 || column < 1){
				break;
			}
			moves.push(move);
			if(document.getElementById(move).hasChildNodes()){
				break;
			}
		}
		return moves;
	}

	downRigthMove() {
		const moves = [];
		for (let move = this.position-9; move >= 11 ; move-=9) {
			const column = ('' + move)[1];
			if (column > 8 || column < 1){
				break;
			}
			moves.push(move);
			if(document.getElementById(move).hasChildNodes()){
				break;
			}
		}
		return moves;
	}

	downLeftMove() {
		const moves = [];
		for (let move = this.position-11; move >= 11 ; move-=11) {
			const column = ('' + move)[1];
			if (column > 8 || column < 1){
				break;
			}
			moves.push(move);
			if(document.getElementById(move).hasChildNodes()){
				break;
			}
		}
		return moves;
	}
}