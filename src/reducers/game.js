import { combineReducers } from 'redux'
import React from 'react'
import { sampleQuestions } from '../demo'

const nextSelectionPointer = (state = 0, action) => {
	switch(action.type) {
		case 'INCREMENT_SELECTION_POINTER':
			return state + 1;
		case 'SET_SELECTION_POINTER':
			return action.selectionPointer;
		case 'SKIP_QUESTION':
		case 'NEXT_QUESTION':
			return 0;
		default:
			return state;
	}
}

const selection = (state = {}, action) => {
	switch(action.type) {
		case 'SELECT_OPTION':
			return {
				...state,
				[action.optionPointer]: action.option
			};
		case 'DESELECT_OPTION_BY_POINTER':
			let { [''+action.optionPointer]: optionValue, ...rest } = state
			return rest
		case 'DESELECT_OPTION_BY_KEY':
			let pointerToRemove = null;
			for(let pointer in state) {
				if(state[pointer].key === action.optionKey) {
					pointerToRemove = pointer
				}
			}
			if(pointerToRemove) {
				let { [pointerToRemove]: optionValue, ...rest } = state
				return rest
			}
			return state;
		case 'SKIP_QUESTION':
		case 'NEXT_QUESTION':
			return {};
		default:
			return state;
	}
}

const currentQuestionKey = (state = 0, action) => {
	switch(action.type) {
		case 'SELECT_QUESTION':
			return action.questionKey;
		case 'PREVIOUS_QUESTION':
			return state - 1;
		case 'SKIP_QUESTION':
		case 'NEXT_QUESTION':
			return state + 1;
		default:
			return state;
	}
}

const questions = (state = sampleQuestions, action) => {
	switch(action.type) {
		case 'SET_OPTIONS':
			return action.questions;
		case 'ADD_OPTION':
			return [
				...state,
				{
					key: action.optionKey,
					text: action.optionText
				}
			]
		default:
			return state;
	}
}

const progress = (state = {correctQuestionKeys: [], incorrectQuestionKeys: []}, action) => {
	let { question, selection, currentQuestionKey } = action;
	let { correctQuestionKeys, incorrectQuestionKeys } = state;
	switch(action.type) {
		case 'SUBMIT_ANSWER':
			if(question.checkAnswer(selection).responseType) {
				correctQuestionKeys.push(currentQuestionKey)
			} else {
				incorrectQuestionKeys.push(currentQuestionKey)
			}
			return {
				correctQuestionKeys: correctQuestionKeys,
				incorrectQuestionKeys: incorrectQuestionKeys
			}
		case 'SKIP_QUESTION':
			incorrectQuestionKeys.push(currentQuestionKey)
			return {
				correctQuestionKeys: correctQuestionKeys,
				incorrectQuestionKeys: incorrectQuestionKeys
			}
		default:
			return state
	}
}

const response = (state = {}, action) => {
	switch(action.type) {
		case 'SKIP_QUESTION':
		case 'NEXT_QUESTION':
			return {}
		case 'SUBMIT_ANSWER':
			let { question, selection } = action;
			return question.checkAnswer(selection);
		default:
			return state;
	}
}

const game = combineReducers({
	nextSelectionPointer,
	selection,
	questions,
	currentQuestionKey,
	progress,
	response
})

export default game


