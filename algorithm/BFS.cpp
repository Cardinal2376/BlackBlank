#include "jsoncppheader.h"
#include <string>
#include <queue>
DirectedGraphTracer tracer = DirectedGraphTracer();
LogTracer logger = LogTracer();
int G[11][11] = {
	{0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0},
    {0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0},
	{0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0},
	{0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0},
	{0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1},
	{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
	{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
	{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
	{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
	{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
	{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0}
};
void BFS(int s) { 
    queue <int> Q;
    Q.push(s); 
    //tracer._visit(s, s)._wait(22);
    while (!Q.empty()) {
        int node = Q.front(); 
        for (int i = 0; i < 11; i++) {
            if (G[node][i]) { 
                Q.push(i); 
                tracer._visit(i, node)._wait(28);
            }
        }
        Q.pop();
    }
}
int main()
{
	tracer._setTreeData(G[0], 11, 11, 0);
	tracer._attach(logger.id);
	BFS(0);
}