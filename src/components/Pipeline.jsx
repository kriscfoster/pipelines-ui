import React from "react";
import { withRouter } from "react-router-dom";
import StoryBoard from "./StoryBoard";

class Pipeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      stages: [],
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await fetch(`http://localhost:8080/projects/${id}`);
    const project = await response.json();
    const { stories, stages } = project;
    this.setState({ stories, stages });
  }

  render() {
    const { stories, stages } = this.state;

    return (
      <div>
        <StoryBoard stories={stories} stages={stages}/>
      </div>
    );
  }
}

export default withRouter(Pipeline);
