import Header from "./Components/ Header";
import StateOfMatter from "./Components/StateOfMatter";

import solid from "./Solid.jpg";
import liquid from "./Liquid.jpg";
import gas from "./Gas.jpg";

function App() {
  return (
    <div className="App">
      <Header />

      <hr />

      <StateOfMatter
        name={"Solid"}
        image={solid}
        ad1={"Coldest Phase of matter"}
        ad2={"Do not move but vibrate"}
        ad3={"The particals stick together"}
      />

      <StateOfMatter
        name={"Liquid"}
        image={liquid}
        ad1={"Middle Temprature"}
        ad2={"Move in a middle speed"}
        ad3={"The particals change from partical to partical"}
      />

      <StateOfMatter
        name={"Gas"}
        image={gas}
        ad1={"Hottest Phase of matter"}
        ad2={"Move at an extremly fast speed"}
        ad3={"The particals try to avoid each other"}
      />

      <div className="Subheader center">
        <h4>
          This entire website was made by Shivansh Upadhyay including the
          images.
        </h4>
      </div>
    </div>
  );
}

export default App;
