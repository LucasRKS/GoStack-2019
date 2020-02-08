import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';

class StarredRepository extends Component {
  state = {
    repository: [],
  };

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  componentDidMount() {
    const { navigation } = this.props;

    const repository = navigation.getParam('repository');

    this.setState({ repository });
  }

  render() {
    const { repository } = this.state;

    return (
      <WebView source={{ uri: repository.html_url }} style={{ flex: 1 }} />
    );
  }
}

export default StarredRepository;
