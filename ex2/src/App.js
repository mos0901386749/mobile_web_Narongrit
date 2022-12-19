import Post from "./Post.js"
import Comment from "./Comment"
import Card from "./Crad"
import Navbar from "./Navbar"

function App() {
  return (
   <div>
     < Navbar />
     <Post userId="Dek_SE" message="Yeah, I git a grade A in Mobile Programming">
          <Comment userId = "Narongrit" message ="Mos"/>
          <Comment userId = "Narongrit" message ="dadada"/>
     </Post>
      
     <Card />
   </div>
  );
}

export default App;
