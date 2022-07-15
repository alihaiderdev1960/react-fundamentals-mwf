import React, { Fragment } from "react";
import "./App.css";
import { Header as Ali } from "./components/Header";
import { Header } from "./components/Footer";
// import Ali  from "./components/Header";
import Video from "./assets/video.mp4";
import Card from "./components/Card";

// const input = prompt("Enter some input:::: ");
const input = <input type={"number"} placeholder={"Enter your name"} />;
// function App() {
//   // const input = prompt("Enter some input: ");

//   // const input = <input type={} placeholder="Enter your name"/>;
//   // const input = <input type={} placeholder={true}/>;
//   // const input = <input type={} placeholder=100/>;

//   // if (input) {
//   //   console.log("user enter some input", input);
//   // } else {
//   //   console.log("user does not enter any input", input);
//   // }
//   // input
//   //   ? console.log("user enter some input", input)
//   //   : console.log("user does not enter any input", input);
//   return (
//     <>
//       {/* <span style={}>span</span> */}
//       <div
//         style={
//           {
//             // backgroundColor: "yellow",
//             // padding: `${true ? "20px 2rem" : "5rem"}`,
//           }
//         }
//         className="App"
//       >
//         {input}
//         {false ? (
//           <h1>user enter some input </h1>
//         ) : (
//           <h6>user does not enter any input </h6>
//         )}
//         <header style={{ backgroundColor: "red" }} className="App-header">
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     </>
//   );
// }

const App = () => {
  return (
    <div>
      {/* <figure>
        <figcaption>Listen to the T-Rex:</figcaption>
        <audio controls src="/media/cc0-audio/t-rex-roar.mp3">
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </figure> */}

      {/* <video width="320" height="240" controls>
        <source src={Video} type="video/mp4" />
        <source src={Video} type="video/ogg" />
        Your browser does not support the video tag.
      </video> */}

      <Ali />
      <Header />
      <Card
        name="Ali"
        title={"Title 1"}
        description={"Description 1"}
        address={{ city: "karachi", country: "Pakistan", pinCode: 1234 }}
      />
      <Card
        name="Haider"
        title={"Title 2"}
        description={"Description 2"}
        address={{ city: "Quetta", country: "Pakistan", pinCode: 12345 }}
      />
      {/* <Card name="Maaz"/>
      <Card name="Saqib"/>
      <Card name="Osama"/>
      <Card name="Ansa"/> */}
    </div>
  );
};

export default App;
