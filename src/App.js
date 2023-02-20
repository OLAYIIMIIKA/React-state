import React, { Component } from 'react';
class App extends Component {
  state = {
    person: {
      fullName: 'Akinbuwa Emmanuel Olayinika ',
      bio: "i'm the upcoming greatest developer in the universe",
      imgSrc: 'https://res.cloudinary.com/practicaldev/image/fetch/s--LNRQZ5Ya--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/462537/34d1837f-a6d2-47ef-84e7-3090e74c3f16.png',
      profession: 'full-stack Software Developer',
    },
    show: false,
    time: 0
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        time: prevState.time + 1
      }));
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const { person, show, time } = this.state;
    return (
      <div style={{ textAlign: "center" , Color: "red"}}>
        <button style={{ backgroundColor: "blue", color: "white" }} onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <h1>{person.fullName}</h1>
            <img src={person.imgSrc} alt="Profile" />
            <p>{person.bio}</p>
            <p>{person.profession}</p>
          </div>
        )}
        <p>Time since component mounted: {time} seconds</p>
      </div>
    );
  }
}


export default App;

