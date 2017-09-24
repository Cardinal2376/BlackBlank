#include "jsoncppheader.h"
#include <string>
#include <stdlib.h>
int N = 4;
int board[4][4] = {
    {0,0,0,0},
    {0,0,0,0},
    {0,0,0,0},
    {0,0,0,0}
};
int queens[4][4] = {
    {0,0,0,0},
    {0,0,0,0},
    {0,0,0,0},
    {0,0,0,0}
};
Array2DTracer boardTracer = Array2DTracer ("Board");
Array2DTracer queenTracer = Array2DTracer ("Queen Positions");
LogTracer logger = LogTracer();
bool validState (int row,int col,int currentQueen) {
	for (int q = 0; q < currentQueen; q++) {
		if ( row == queens [q][0] || col == queens [q][1] || ( abs(queens [q][0] - row) == abs(queens[q][1] - col)) ) {
			return false;
		}
	}
	return true;
}
bool nQ (int currentQueen,int currentCol) {
	logger._print ("Starting new iteration of nQueens () with currentQueen = " + to_string(currentQueen) +  " & currentCol = " + to_string(currentCol));
	logger._print ("------------------------------------------------------------------");
	if (currentQueen >= N) {
		logger._print ("The recursion has BOTTOMED OUT. All queens have been placed successfully");
		return true;
	}
    bool found = false;
    int row = 0;
	while ( (row < N) && (!found) ) {
		boardTracer._select (row, currentCol)._wait ();
		logger._print ("Trying queen " + to_string(currentQueen) + " at row " + to_string(row) + " & col " + to_string(currentCol));
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
			logger._print ("row " + to_string(row) + " & col " + to_string(currentCol) + " didn\'t work out. Going down");
		}
		row++;
	}

	return found;
}
int main()
{
    boardTracer._setData (board[0],4,4);
    queenTracer._setData (queens[0],4,4);
    logger._print ("N Queens: " + to_string(N) + "X" + to_string(N) + "matrix, " + to_string(N) + " queens");
    logger._print ("Starting execution");
    nQ (0, 0);
    logger._print ("DONE");
}