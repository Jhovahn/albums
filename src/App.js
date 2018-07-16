import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, albums, text } from './actions';
import AlbumList from './AlbumList';

const mapStateToProps = state => {
  console.log('state', state);
  return {
    count: state.reducer.count,
    albums: state.albumReducer.albums,
    text: state.textReducer.text
  };
};

const mapDispatchToProps = dispatch => ({
  inc: () => dispatch(increment()),
  dec: () => dispatch(decrement()),
  alb: () => dispatch(albums()),
  txt: e => dispatch(text(e))
});

class App extends Component {
  componentDidMount() {
    console.log('props', this.props);
  }

  nameEventHandler(event) {
    console.log('event', event.target);
    this.props.txt(event.target.value);
  }

  render() {
    return (
      <div>
        {/*
        <form>
          <input onChange={e => this.nameEventHandler(e)} />
          <input type="submit" value="submit" />
        </form>
        <h4>{this.props.text}</h4>
        <button onClick={this.props.dec}>-</button>
        <span>{this.props.count}</span>
        <button onClick={this.props.inc}>+</button>
        */}
        <button onClick={this.props.alb}>Albums</button>
        <AlbumList list={this.props.albums} />
        {console.log('props', this.props)}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
