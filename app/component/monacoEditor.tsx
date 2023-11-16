'use client'
import React from 'react';
import MonacoEditor from 'react-monaco-editor';

const CodeEditor = () => {
  const code = "// Write Your code here";

  return (
    <MonacoEditor
      width="602"
      height="360"
      language="javascript"
      theme="vs-dark"
      value={code}
    />
  );
};

export default CodeEditor;