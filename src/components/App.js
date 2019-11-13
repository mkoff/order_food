import React, {Component} from 'react';
import Restaurants from "./restaurants";

class App extends Component {
  render() {
    return (
      <section>
        <Restaurants restaurants={this.props.restaurants} />
      </section>
    )
  }
}


export default App;
