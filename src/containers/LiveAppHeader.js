import { connect } from 'react-redux'
import AppHeader from '../components/AppHeader'

const mapStateToProps = (state, ownProps) => {
  return {
    theme: state.questions[state.currentQuestionKey].theme,
    title: `Afbeelding ${state.currentQuestionKey + 1} van de ${state.questions.length}`,
    progress: state.progress
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const LiveAppHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHeader)

export default LiveAppHeader