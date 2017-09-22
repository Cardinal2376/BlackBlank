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
	if(parent != -1) tracer._visit(node, parent)._wait(19);
	for (int i = 0; i < 11; i++) {
		if (G[node][i]) { 
			DFS(i, node); 
		}
	}
}
int main()
{
	tracer._setTreeData(G[0], 11, 11, 0);
	tracer._attach(logger.id);
	DFS(0, -1);
}