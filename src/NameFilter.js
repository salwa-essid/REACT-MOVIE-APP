import React,{Component} from "react";




class NameFilter extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        keyword:''
                  }
        }


        handlechange=(e)=>{ 
                this.setState({keyword:e.target.value},
                        ()=>this.props.searchname(this.state.keyword))
                          }
        render() { 
                return ( <div className="name-filter">
                <input className="name-filter-text" type="text" onChange={this.handlechange}/>
                <input className="name-filter-button" type="button" value="Search" />
        </div> );
        }
}
 



export default NameFilter



