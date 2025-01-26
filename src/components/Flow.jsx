import React from 'react';
import { ReactFlow , MiniMap,
    Controls,
    Background} from '@xyflow/react';
 
import '@xyflow/react/dist/style.css';
 
export default function App() {
  const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '22' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '222' } },
  ];
  const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
   
  return (
    <div style={{ width: '100%', height: '500px',backgroundColor: "white" }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} >
      <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}