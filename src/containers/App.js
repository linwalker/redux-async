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
        dispatch(fetchPosts(selectedReddit))
    }

    handleChange (reddit) {
        this.props.dispatch(selectReddit(reddit));
        this.props.dispatch(fetchPosts(reddit));
    }

    handleRefresh (e) {
        e.preventDefault();
        const {dispatch,selectedReddit} = this.props;
        dispatch(fetchPosts(selectedReddit));
    }
    render() {
        const {selectedReddit,items,lastUpdated,isFetching} = this.props;
        const isEmpty = items.length === 0;
        return(
            <div>
                <Picker value={selectedReddit}
                        onChange={this.handleChange.bind(this)}
                        options={["reactjs","frontend"]}
                />
                <p>
                    {lastUpdated &&
                        <span>
                            Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                            {' '}
                        </span>
                    }
                </p>
                {!isFetching &&
                    <a href="#"
                        onClick={this.handleRefresh.bind(this)}>
                        Refresh
                    </a>
                }

                {isEmpty ?
                    (isFetching ? <h2>Loading</h2> : <h2>Empty</h2>)
                    : <div style={{opacity:isFetching ? 0.5 : 1}}>
                        <Posts posts={items} />
                      </div>
                }

            </div>
        )
    }
}

const mapStateToProps = state => {
    const {selectedReddit,receivePosts} = state;
    return {
        selectedReddit,
        items:receivePosts.items,
        isFetching:receivePosts.isFetching,
        lastUpdated:receivePosts.lastUpdated
    }
}
export default connect(mapStateToProps)(App);