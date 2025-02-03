import "./Page.css";
import { Head } from "./header.jsx";
import { Post } from "./post.jsx";
import { Btn } from "./btn.jsx";

function App() {
  return (
    <>
      <div>
        <Head />
        {/* div center */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          {/* div center */}
          <div style={{ display: "flex", width: "80%" }}>
            {/* div Post */}
            <div style={{ width: "70%" }}>
              <Post />
              <Post />
              <Post />
            </div>
            {/* div Post */}

            {/* div Btn */}
            <div style={{ width: "57%" }}>
              <Btn />
              <Btn />
              <Btn />
            </div>
            {/* div Btn */}
          </div>
          {/* div center */}
        </div>
        {/* div center */}
      </div>
    </>
  );
}

export default App;
