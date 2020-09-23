import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import LoginForm from "../../components/Login/LoginForm.jsx";

import "../../styles/login-page.scss";

class LoginPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showLoginForm: false,
      validateTokenResult: false,
      token: null,
      username: null,
      expiredMsgShown: false,
    };
  }
  componentWillMount() {}
  componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <div className={"login-page-container"}>
        <div className="login-page-trasnform">
          <div className="login-page">
            <LoginForm
              username={this.state.username}
            />
          </div>
        </div>
      </div>
    );
  }
}
// LoginPage.propTypes = {
//     actions: PropTypes.object.isRequired,
//     appState: PropTypes.object.isRequired
// };

// function mapStateToProps(state) {
//     return {
//         appState: state.auth
//     };
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(actions, dispatch)
//     };
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(LoginPage);

export default LoginPage;
