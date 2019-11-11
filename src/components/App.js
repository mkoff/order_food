import React, {Component} from 'react';
import Restaurants from "./restaurants";

class App extends Component {
  render() {
    return (
      <section>{console.log(this.props)}
        <Restaurants restaurants={this.props.restaurants} />
      </section>
    )
  }
}


export default App;
