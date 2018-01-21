export const selectOption = (optionPointer, option) => {
	return {
		type: 'SELECT_OPTION',
		option: option,
		optionPointer: optionPointer,
	}
}

export const deselectOptionByPointer = (optionPointer) => {
	return {
		type: 'DESELECT_OPTION_BY_POINTER',
		optionPointer: optionPointer
	}
}

export const deselectOptionByKey = (optionKey) => {
	return {
		type: 'DESELECT_OPTION_BY_KEY',
		optionKey: optionKey
	}
}

export const incrementNextSelectionPointer = () => {
	return {
		type: 'INCREMENT_SELECTION_POINTER',
	}
}

export const setOptions = (options) => {
	return {
		type: 'SET_OPTIONS',
		options: options
	}
}

export const setQuestions = (questions) => {
	return {
		type: 'SET_QUESTIONS',
		questions: questions
	}
}

export const selectQuestion = (questionKey) => {
	return {
		type: 'SELECT_QUESTION',
		questionKey: questionKey
	}
}

export const nextQuestion = () => {
	return {
		type: 'NEXT_QUESTION'
	}
}

export const submitAnswer = (question,selection) => {
	return {
		type: 'SUBMIT_ANSWER',
		question: question,
		selection: selection
	}
}

export const skipQuestion = (currentQuestionKey) => {
	return {
		type: 'SKIP_QUESTION',
		currentQuestionKey: currentQuestionKey
	}
}