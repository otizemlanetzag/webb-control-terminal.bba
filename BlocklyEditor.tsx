'use client';
import React, { useEffect, useRef } from 'react';
import Blockly from 'blockly';
import './customBlocks'; 

export default function BlocklyEditor() {
  const blocklyRef = useRef<HTMLDivElement>(null);
  const workspaceRef = useRef<any>(null);

  useEffect(() => {
    if (!blocklyRef.current || workspaceRef.current) return;

    const toolbox = {
      kind: 'categoryToolbox',
      contents: [
        {
          kind: 'category',
          name: '🔌 טריגרים',
          colour: '120',
          contents: [{ kind: 'block', type: 'trigger_usb_connect' }]
        },
        {
          kind: 'category',
          name: '🎵 פעולות',
          colour: '230',
          contents: [
            { kind: 'block', type: 'action_play_sound' },
            { kind: 'block', type: 'action_run_html' }
          ]
        }
      ]
    };

    workspaceRef.current = Blockly.inject(blocklyRef.current, {
      toolbox: toolbox,
      grid: { spacing: 20, length: 3, colour: '#ccc', snap: true },
      trashcan: true
    });

    return () => {
      if (workspaceRef.current) {
        workspaceRef.current.dispose();
        workspaceRef.current = null;
      }
    };
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'right' }} dir="rtl">
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>מחולל האוטומציה שלי 🚀</h1>
      <div ref={blocklyRef} style={{ width: '100%', height: '550px', border: '1px solid #ccc', borderRadius: '8px' }} />
    </div>
  );
}
