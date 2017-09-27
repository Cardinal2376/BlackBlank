#include "jsoncppheader.h"
#include <string>
#include <string.h>
char string1[110] = "AGGTAB";
char string2[110] = "GXTXAYB";
int m = strlen(string1);
int n = strlen(string2);
int A[110][110];
Array1DTracer tracer1 = Array1DTracer ( "String 1").setData ( string1, 6);
Array1DTracer tracer2 = Array1DTracer ( "String 2").setData ( string2, 7);
Array2DTracer tracer3 = Array2DTracer ( "Memo Table").setData ( A[0], 110, m, n);
LogTracer logger = LogTracer ();
int i,j;
int main()
{
     for( i = 0; i <= m; i++ ) {
     	for( j = 0; j <= n; j++ ) {
     		if ( i == 0 || j == 0 ) {
     			A[i][j] = 0;
     		} 
     		else if ( string1[i-1] == string2[j-1] ) {
     			tracer1.select ( i-1 ).wait ();
     			tracer2.select ( j-1 ).wait ();
     			tracer3.select ( i-1, j-1 ).wait ();
     			A[i][j] = A[i-1][j-1] + 1;
     			tracer1.deselect ( i-1 );
     			tracer2.deselect ( j-1 );
     			tracer3.deselect ( i-1, j-1 );
     		} else {
     			tracer3.select ( i-1, j ).wait ();
     			tracer3.select ( i, j-1 ).wait ();
     			if( A[i-1][j] > A[i][j-1] ) {
     				A[i][j] = A[i-1][j];
     			} else {
     				A[i][j] = A[i][j-1];
     			}
     			tracer3.deselect ( i-1, j );
     			tracer3.deselect ( i, j-1 );
     		}
     		tracer3.notify ( i, j , A[i][j] ).wait ();
     		tracer3.denotify( i, j );
     	}
     }
    string finalString = "";
    i=m;
    j=n;
    while( i>=1 && j>=1 ) {
    	tracer3.select ( i, j ).wait ();
    	if( string1[i-1] == string2[j-1] ) {
    		tracer1.select ( i-1 ).wait ();
     		tracer2.select ( j-1 ).wait ();
    		finalString = string1[i-1] + finalString;
    		i--;
    		j--;
    	} else if( A[i-1][j] > A[i][j-1] ) {
    		i--;
    	} else {
    		j--;
    	}
    }

    logger.print ( "Longest Common Subsequence Length is " + to_string(A[m][n]) );
    logger.print ( "Longest Common Subsequence is " + finalString );
    return 0;
}