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
    //tracer.visit(s, s).wait(22);
    while (!Q.empty()) {
        int node = Q.front(); 
        for (int i = 0; i < 11; i++) {
            if (G[node][i]) { 
                Q.push(i); 
                tracer.visit(i, node).wait(28);
            }
        }
        Q.pop();
    }
}
int main()
{
	tracer.setTreeData(G[0], 11, 11, 0);
	tracer.attach(logger.id);
	BFS(0);
}