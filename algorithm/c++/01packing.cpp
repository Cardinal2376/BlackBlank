#include "jsoncppheader.h"
#include <string>
int val[110] = {4,4,5,7}; 
int wt[110] = {1,3,4,5};  
int W = 8;        
int N = 4;
int DP[110][110];
Array2DTracer tracer = Array2DTracer("Knapsack Table").setData(DP[0], 110, N, W);
Array1DTracer dataViewer1 = Array1DTracer("Values").setData(val, N);
Array1DTracer dataViewer2 = Array1DTracer("Weights").setData(wt, N);
LogTracer logger = LogTracer();
int main()
{
    
    for ( int i = 0; i <= N; i++ ) {
    	for( int j = W; j >= 0; j-- ) {
    		if( i == 0 || j == 0 ) { 
    			DP[i][0] = 0;
    			tracer.notify( i, j, DP[i][j]).wait();
    			tracer.denotify( i, j);
    		} else if ( wt[i-1] <= j ) { 
    			dataViewer1.select(i-1).wait();
    			dataViewer2.select(i-1).wait();
    			tracer.select( i-1, j).wait();
    			int A = val[i - 1] + DP[i - 1][j - wt[i - 1]];
    			int B = DP[i - 1][j];
    			if (A > B) {
    				DP[i][j] = A;
    				tracer.notify( i, j, DP[i][j]).wait();
    			} else {
    				DP[i][j] = B;
    				tracer.notify( i, j, DP[i][j]).wait();
    			}
    			tracer.deselect( i-1, j);
    			tracer.denotify( i, j);
    			dataViewer2.deselect(i-1);
    			dataViewer1.deselect(i-1);
    		} else { 
    			DP[i][j] = DP[i - 1][j];
    			tracer.notify( i, j, DP[i][j]).wait();
    			tracer.denotify( i, j);
    		}
    	}
    }
    logger.print(" Best value we can achieve is " + to_string(DP[N][W]));
}
