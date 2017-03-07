/**
 * Created by linyuhua on 2017/3/6.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {selectReddit,fetchPosts} from '../actions/index';
import Picker from '../components/Picker';
import Posts from '../components/Posts';
class App extends Component {

    componentDidMount() {
        const {dispatch,selectedReddit} = this.props;
        console.log(selectedReddit);
        dispatch(fetchPosts(selectedReddit))
    }
    handleChange (reddit) {
        this.props.dispatch(selectReddit(reddit));
        this.props.dispatch(fetchPosts(reddit));
    }
    render() {
        const {selectedReddit,items} = this.props;
        return(
            <div>
                <Picker value={selectedReddit}
                        onChange={this.handleChange.bind(this)}
                        options={["reactjs","frontend"]}
                />
                <p>
                    <span>Last updated at</span>
                </p>
                <a href="#">
                    Refresh
                </a>
                <div>
                    <Posts posts={items}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {selectedReddit,receivePosts} = state;
    return {
        selectedReddit,
        items:receivePosts.items
    }
}
export default connect(mapStateToProps)(App);