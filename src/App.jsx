import "./Page.css";
import { Head } from "./header.jsx";
import { Post } from "./post.jsx";
import { Btn } from "./btn.jsx";

function App() {
  const posts = [
    {
      id: 1,
      name: "Mohamed",
      age: 25,
    },

    {
      id: 2,
      name: "Ahmed",
      age: 19,
    },

    {
      id: 3,
      name: "Essam",
      age: 18,
    },
  ];
  const postsList = posts.map((post) => {
    return <Post key={post.id} name={post.name} age={post.age} />;
  });
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
              {postsList}

              {/* <Post name="Mohamed" age={25} bio="Developer" />
              <Post name="Ahmed" age={19} bio="Art" />
              <Post name="Essam" age={18} bio="Eng" /> */}
            </div>
            {/* div Post */}

            {/* div Btn */}
            <div style={{ width: "65%" }}>
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
