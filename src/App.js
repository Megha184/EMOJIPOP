

import React from "react"
import Heading from "./Components/Heading"
import EmojiDetail  from "./EmojiDetail"
import Details from "./Components/Details"
import "./App.css"
function createEmoji(EmojiDetails)
{
  return(<Details
    key={EmojiDetails.id}
    name={EmojiDetails.name}
    view={EmojiDetails.view}
    meaning={EmojiDetails.meaning}
    />);
}
function App() {
  return (
    <div>
   <Heading/>
   {EmojiDetail.map(createEmoji)}
   </div>
  );
}

export default App;
