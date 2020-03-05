import React from "react";
import { withRouter } from "react-router-dom";

import FormModalFromButton from "./FormModalFromButton";
import NewStoryForm from "./NewStoryForm";
import StoryBoard from "./StoryBoard";

class Stories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await fetch(`http://localhost:8080/projects/${id}/stories`);
    const stories = await response.json();
    console.log(stories)
    this.setState({ stories });
  }

  render() {
    const { stories } = this.state;

    return (
      <div>
        <FormModalFromButton formComponent={NewStoryForm} title={"Create new story"} />
        <StoryBoard stories/>
      </div>
    );
  }
}

export default withRouter(Stories);
