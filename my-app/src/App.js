import React, {Component} from "react";
import axios from "axios";

export class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.name[0]}:{this.props.username[0]} <br />
        {this.props.name[1]}:{this.props.username[1]} <br />
        {this.props.name[2]}:{this.props.username[2]} <br />
        {this.props.name[3]}:{this.props.username[3]} <br />
        {this.props.name[4]}:{this.props.username[4]} <br />
        {this.props.name[5]}:{this.props.username[5]} <br />
        {this.props.name[6]}:{this.props.username[6]} <br />
        {this.props.name[7]}:{this.props.username[7]} <br />
        {this.props.name[8]}:{this.props.username[8]} <br />
        {this.props.name[9]}:{this.props.username[9]} <br />
      </div>
    );
  }
}


export class Loader extends React.Component {
  render() {
    return(
      <div>
        Loading...
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.nameslist = [];
    this.usernameslist = [];

    this.state = {
      names:[],
      usernames:[],
      state1:false,
    }
  }

  componentDidMount () {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            for (let i = 0; i < 10;i++) {

              this.nameslist.push(response.data[i].name);
              this.usernameslist.push(response.data[i].username);

            }
            
          

            this.setState({
              state1:true,
            });
            
            this.setState({
              name:this.nameslist.slice(10),
              username:this.usernameslist.slice(10),
            });
        })
        .catch(error => {
            console.log(error);
        });
  }

  render() {
    return (
      <div className="App">
        {this.state.state1 ? <List name={this.state.name} username={this.state.username}/> : <Loader />}
      </div>
    );
  }
}

export default App;

