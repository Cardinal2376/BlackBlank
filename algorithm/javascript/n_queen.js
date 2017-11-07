var N = 4;	//just change the value of N and the visuals will reflect the configuration!
var board = (function createArray (N) {
	var result = [];
	for (var i = 0; i < N; i++) {
		result [i] = Array.apply(null, Array(N)).map(Number.prototype.valueOf,0);
	}
	return result;
}) (N);
var queens = (function qSetup (N) {
	var result = [];
	for (var i = 0; i < N; i++) {
		result [i] = [-1,-1];
	}
	return result;
}) (N);

var boardTracer = new Array2DTracer ('Board'),
	queenTracer = new Array2DTracer ('Queen Positions'),
	logger = new LogTracer ('Progress');

boardTracer._setData (board);
queenTracer._setData (queens);
logger._print ('N Queens: ' + N + 'X' + N + 'matrix, ' + N + ' queens');


function validState (row, col, currentQueen) {
	for (var q = 0; q < currentQueen; q++) {
		var currentQ = queens [q];
		if ( row === currentQ [0] || col === currentQ [1] || ( Math.abs(currentQ [0] - row) === Math.abs(currentQ [1] - col)) ) {
			return false;
		}
	}
	return true;
}

function nQ (currentQueen, currentCol) {
	logger._print ('Starting new iteration of nQueens () with currentQueen = ' + currentQueen +  ' & currentCol = ' + currentCol);
	logger._print ('------------------------------------------------------------------');
	if (currentQueen >= N) {
		logger._print ('The recursion has BOTTOMED OUT. All queens have been placed successfully');
		return true;
	}

	var found = false, row = 0;
	while ( (row < N) && (!found) ) {
		boardTracer._select (row, currentCol)._wait ();
		logger._print ('Trying queen ' + currentQueen + ' at row ' + row + ' & col ' + currentCol);
		
		if (validState (row, currentCol, currentQueen)) {
			queens [currentQueen] [0] = row;
			queens [currentQueen] [1] = currentCol;

			queenTracer._notify (currentQueen, 0, row)._wait ();
			queenTracer._notify (currentQueen, 1, currentCol)._wait ();
			queenTracer._denotify (currentQueen, 0)._wait ();
			queenTracer._denotify (currentQueen, 1)._wait ();

			found = nQ (currentQueen + 1, currentCol + 1);
		}

		if (!found) {
			boardTracer._deselect (row, currentCol)._wait ();
			logger._print ('row ' + row + ' & col ' + currentCol + ' didn\'t work out. Going down');
		}
		row++;
	}

	return found;
}

logger._print ('Starting execution');
nQ (0, 0);
logger._print ('DONE');