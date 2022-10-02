import "./App.css";

function App() {
  return (
    // <div className="main">
    //   <div className="content">
    //     <div className="header__content">
    //       <img
    //         className="title__image"
    //         src={require("./assets/Tittle1.png")}
    //         alt="Title img"
    //       />
    //       <h1 className="header__text">سؤال و جواب </h1>
    //     </div>
    //     <div className="card__content">
    //       <div className="background__image">
    //         <img
    //           className="card__image"
    //           src={require("./assets/UIHolder1.png")}
    //           alt="Card img"
    //         />
    //       </div>
    //       <div className="question__content">
    //         <h2>ماهو الشيء الذي يطير ولا يطير؟</h2>
    //       </div>
    //       <div className="answer1__content">
    //         <img
    //           src={require("./assets/Button_11.png")}
    //           alt="Button img"
    //           height={50}
    //           width={140}
    //         />
    //         <div className="answer1__text">
    //           <h3>جواب</h3>
    //         </div>
    //       </div>
    //       <div className="answer2__content">
    //         <div className="answer2__button">
    //           <img
    //             src={require("./assets/Button_11.png")}
    //             alt="Button img"
    //             height={50}
    //             width={140}
    //           />
    //         </div>
    //         <div className="answer2__text">
    //           <h3>جواب</h3>
    //         </div>
    //       </div>

    //       <div className="answer3__content">
    //         <img
    //           src={require("./assets/Button_11.png")}
    //           alt="Button img"
    //           height={50}
    //           width={140}
    //         />
    //         <div className="answer3__text">
    //           <h3>جواب</h3>
    //         </div>
    //       </div>
    //       <div className="answer4__content">
    //         <img
    //           src={require("./assets/Button_11.png")}
    //           alt="Button img"
    //           height={50}
    //           width={140}
    //         />
    //         <div className="answer4__text">
    //           <h3>جواب</h3>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-background-image">
      <div className="grid h-screen place-content-center relative">
        <div className="absolute top-44">
          <img
            className="title__image"
            src={require("./assets/Tittle1.png")}
            alt="Title img"
          />
        </div>
        <div className="-z-10">
          <img
            className="card__image"
            src={require("./assets/UIHolder1.png")}
            alt="Card img"
          />
        </div>
        <div className="absolute">
          <img
            src={require("./assets/Button_11.png")}
            alt="Button img"
            width={150}
          />
        </div>
      </div>
      {/* <img
        className="h-full"
        src={require("./assets/BG1.png")}
        alt="Title img"
      />
      <p className="z-10">hi</p> */}
    </div>
  );
}

export default App;
