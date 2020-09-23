import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import faceActions from './faceActions'

class FacePage extends React.Component {
  constructor(props) {
    super()
    this.state  = {
      key: 2
    }
  }
  componentWillMount(){
    console.log(this.props)
    this.props.actions.getFace()
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }
  render() {
    return (
      <div>
        This is face page <span>{this.props.name}</span>
    <div>{this.state.key}</div>
      </div>
    )
  }
}

// export default FacePage
function mapStateToProps(state) {
  return {
      appState: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(faceActions, dispatch)
  };
}

export default connect(
 
      mapStateToProps,
   
 
      mapDispatchToProps
  
  )(FacePage);
  
  
  
  