import React from 'react';
import Typing from 'react-typing-animation';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Typing>
        {`const fs = require('fs') const path = require('path') if (process.argv[1] === 'init') { let filePath = path.join( process.cwd(), 'require', 'config.json ') fs.writeFileSync (filePath, JSON. parse({ podcast: 'require podcast', author: 'Adam Siekierski & Artur Dudek' })) } else { fetch('https://require.podcast.gq ').then (res => res.json()).then(json => { for (episode of json.episodes){  console.log (\`Name: \${episode.name}, Date:episode.date`}
      </Typing>
    </div>
  );
}

export default App;
