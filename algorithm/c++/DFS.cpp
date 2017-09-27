#include "jsoncppheader.h"
#include <string>
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
void DFS(int node,int parent) { 
	if(parent != -1) tracer.visit(node, parent).wait();
	for (int i = 0; i < 11; i++) {
		if (G[node][i]) { 
			DFS(i, node); 
		}
	}
}
int main()
{
	tracer.setTreeData(G[0], 11, 11, 0);
	tracer.attach(logger.id);
	DFS(0, -1);
}