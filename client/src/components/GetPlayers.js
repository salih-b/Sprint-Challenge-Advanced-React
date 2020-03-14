
import React from 'react';
import axios from 'axios';

class getPlayers extends React.Component {
  // props = {
  //   players: [],
  //   playerText: ''
  // };
  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        console.log('response from first axios get call players set to this', res.data);
        // debugger;
       this.props.setPlayers(res.data);
      })
      .catch(err => console.log(err.message));
  }

  // componentDidUpdate(prevProps, prevprops) {
  //   if (prevprops.players !== this.props.players) {
  //     console.log('new player array');
  //       console.log(this.props.playerText);
  //       axios
  //         .get('http://localhost:5000/api/players')
  //         .then(res => {
  //           // res.data.message
  //           this.setprops({
  //             players: res.data.message,
  //             playerText: 'husky'
  //           });
  //         })
  //         .catch(err => console.log(err.message));
  //   }
  // }

  handleButton = e => {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(response => {
        const playerName = response.data.filter(player =>
            player.name.toLowerCase().includes(this.props.playerText.toLowerCase())
        );
     console.log("this is playerName on click", playerName);
        this.props.setPlayers(playerName);
      });
  // }, [this.props.playerText]);
  };


/*onClick={this.fetchPlayers}*/
  render() {
    return (
      <div className="App">
          {console.log('this is props being passed', this.props)}
          {console.log('this is value', this.props.playerText)}
          {console.log('this is handle on change', this.props.handleChangePlayerText)}
        <h1>Hello Players</h1>
        <input value={this.props.playerText} onChange={this.props.handleChangePlayerText} />
    <button onClick={this.handleButton}>Fetch Players</button>
        <div className="players">
          {console.log('mapping over this -->',this.props.players)}
          {this.props.players.map(player => (
            <div>
<h2>{`Player Name: ${player.name}`}</h2>
<p>{`Player Orgin: ${player.country}`}</p>
<p>{`Player Search Count: ${player.searches}`}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default getPlayers;
