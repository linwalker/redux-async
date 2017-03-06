/**
 * Created by linyuhua on 2017/3/6.
 */
import React,{Component} from 'react';
import Picker from '../components/Picker';
import Posts from '../components/Posts';
class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            value:"reactjs",
            options:["reactjs","frontend"],
            posts:[
                "title1","title2"
            ]
        }
    }
    render() {
        const options = this.state.options;
        const value = this.state.value;
        const posts = this.state.posts;
        return(
            <div>
                <Picker options={options}
                        value={value}
                        onChange={this.handleChange}
                />
                <p>
                    <span>Last updated at</span>
                </p>
                <a href="#">
                    Refresh
                </a>
                <div>
                    <Posts posts={posts}/>
                </div>
            </div>
        )
    }
}

export default App;