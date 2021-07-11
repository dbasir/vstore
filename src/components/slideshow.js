import React from "react";
import img1 from '../assets/img/featured/justice.jpg'
import img2 from '../assets/img/featured/jurrasic.jpg'
import img3 from '../assets/img/featured/frnds.png'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
          img3,
        img1,
        img2
      ],
      selectedImage: img1
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => {
        if (prevState.selectedImage == this.state.images[0]) {
          return {
            selectedImage: this.state.images[1]
          };
        } if(prevState.selectedImage == this.state.images[1]){
          return {
            selectedImage: this.state.images[2]
          };
        }
        if(prevState.selectedImage == this.state.images[2]) {
            return {
              selectedImage: this.state.images[0]
            };
          }
      });
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        <img src={this.state.selectedImage} />
      </div>
    );
  }
}

export default App
