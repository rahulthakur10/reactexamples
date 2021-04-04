import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";
import './index.css';


ReactDOM.render(
<>
<h1 className="heading_style">Netflix Series List</h1>

<Card imgsrc ="https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_UY1200_CR90,0,630,1200_AL_.jpg"
title = "A Netflix Original Series"
sname ="DARK"
link="https://www.netflix.com/in/title/80100172"
/>
<Card imgsrc ="https://m.media-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_.jpg"
title = "A Netflix Original Series"
sname ="STRANGER THINGS"
link="https://www.netflix.com/in/title/80057281"
/>
<Card imgsrc ="https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_UY1200_CR90,0,630,1200_AL_.jpg"
title = "A Netflix Original Series"
sname ="DARK"
link="https://www.netflix.com/in/title/80100172"
/>
</> 
  
  ,document.getElementById('root'));