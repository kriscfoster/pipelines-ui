import React from "react";
import { withRouter } from "react-router-dom";
import FormModalFromButton from "./FormModalFromButton";
import NewStoryForm from "./NewStoryForm";
import StoryBoard from "./StoryBoard";

class Pipeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      states: [],
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await fetch(`http://localhost:8080/projects/${id}`);
    const project = await response.json();
    this.setState({ stories: project.stories, states: project.states });
  }

  render() {
    const { stories } = this.state;

    return (
      <div>
        <FormModalFromButton formComponent={NewStoryForm} title={"Create new story"} />
        <StoryBoard stories={stories}/>
      </div>
    );
  }
}

export default withRouter(Pipeline);
