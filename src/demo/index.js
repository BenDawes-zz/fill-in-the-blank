import React from 'react'
import QuestionBlank from '../containers/QuestionBlank'

// NOTE: These would normally be served by a backend
// 			but we care more about the front end here

export const sampleQuestions = [
	{
		key: 0,
		headerText: 'Vul het ontbrekende woord in',
		headerLabel: 'Instructie',
		theme: 'Familie',
		image: './img/question_myself.png',
		image_mobile: './img/question_myself_mobile.png',
		pointers: ['first_person_pronoun'],
		text: (selection, options) => (<div className="question-text"><QuestionBlank pointer={'first_person_pronoun'}/> ben Stefan.</div>),
		options: [
			{
				key: 'ik',
				text: 'Ik',
			},
			{
				key: 'jijje',
				text: 'Jij/Je',
			},
			{
				key: 'u',
				text: 'U',
			},
			{
				key: 'hij',
				text: 'Hij',
			},
			{
				key: 'zijze',
				text: 'Zij/Ze',
			},
			{
				key: 'wijwe',
				text: 'Wij/We',
			},
			{
				key: 'jullie',
				text:'Jullie',
			}
		],
		checkAnswer: (selection) => {
			let correctSelection = {
					'first_person_pronoun': 'ik'
				}
			let correctText = (
				<div className="response-text">
					<div className="response-line">
						<span className="blank">Ik</span><p> is een <span className="keyword">persoonlijke voornaamwoord</span></p>
					</div>
					<div className="response-line">
						<span className="blank">Stefan</span><p>wijst naar <span className="keyword">zichzelf</span></p>
					</div>
				</div>
			)
			let correct = true;
			for(let idx in correctSelection) {
				if(!(idx in selection) || selection[idx].key !== correctSelection[idx]) {
					correct = false;
				}
			}
			if(correct) {
				return {
					headerLabel: 'Instructie',
					headerText: 'Je antwoord is good!',
					responseText: correctText,
					responseType: true,
				}
			} else {
				let incorrectText =  (

							<div className="response-text incorrect">
								{Object.keys(selection).map( (k) => {

									if(selection[k].key !== correctSelection[k]) {
										return (
												<div className="response-line" key={k}>
													<span className="blank">{selection[k].text}</span><p> is fout</p>
												</div>
										)
									} else {
										return false
									}
								})}
							</div>
						)
				return {
					headerLabel: 'Instructie',
					headerText: 'Je antwoord is fout',
					responseText: incorrectText,
					responseType: false,
				}
			}
		}
	},
	{
		key: 1,
		headerText: 'Vul het ontbrekende woord in',
		headerLabel: 'Instructie',
		theme: 'Familie',
		image: './img/question_you.png',
		image_mobile: './img/question_you_mobile.png',
		pointers: ['second_person_pronoun'],
		text: (selection) => (<div className="question-text"><QuestionBlank pointer={'second_person_pronoun'}/> bent Hugo.</div>),
		options: [
			{
				key: 'ik',
				text: 'Ik',
			},
			{
				key: 'jijje',
				text: 'Jij/Je',
			},
			{
				key: 'u',
				text: 'U',
			},
			{
				key: 'hij',
				text: 'Hij',
			},
			{
				key: 'zijze',
				text: 'Zij/Ze',
			},
			{
				key: 'wijwe',
				text: 'Wij/We',
			},
			{
				key: 'jullie',
				text:'Jullie',
			}
		],
		checkAnswer: (selection) => {
			let correctText = (
				<div className="response-text correct">
					<div className="response-line">
						<span className="blank">Jij/Je</span><p> bent Hugo is het goede antwoord</p>
					</div>
				</div>
			)
			let correctSelection = {
				0: 'jijje'
			}
			let correct = true;
			for(let idx in correctSelection) {
				if(!(idx in selection) || selection[idx] !== correctSelection[idx]) {
					correct = false;
				}
			}
			if(correct) {
				return {
					headerLabel: 'Instructie',
					headerText: 'Je antwoord is good!',
					responseText: correctText,
					responseType: true,
				}
			} else {
				let incorrectText =  (

							<div className="response-text incorrect">
								{Object.keys(selection).map( (k) => {

									if(selection[k].key !== correctSelection[k]) {
										return (
												<div className="response-line" key={k}>
													<span className="blank">{selection[k].text}</span><p> is fout</p>
												</div>
										)
									} else {
										return false
									}
								})}
							</div>
						)
				return {
					headerLabel: 'Instructie',
					headerText: 'Je antwoord is fout',
					responseText: incorrectText,
					responseType: false,
				}
			}
		},
	},
	{
		key: 0,
		headerText: 'Vul het ontbrekende woord in',
		headerLabel: 'Instructie',
		theme: 'Familie',
		image: './img/question_myself.png',
		image_mobile: './img/question_myself_mobile.png',
		pointers: ['supports','blanks'],
		text: (selection, options) => (<div className="question-text"> It even <QuestionBlank pointer={'supports'}/> multiple <QuestionBlank pointer={'blanks'}/> .</div>),
		options: [
			{
				key: 'supports',
				text: 'supports',
			},
			{
				key: 'blanks',
				text: 'blanks',
			},
		],
		checkAnswer: (selection) => {
			let correctSelection = {
					'supports': 'supports',
					'blanks': 'blanks'
				}
			let correctText = (
				<div className="response-text">
					<div className="response-line">
						<span className="blank">Multiplicity</span><p> is a useful feature.</p>
					</div>
				</div>
			)
			let correct = true;
			for(let idx in correctSelection) {
				if(!(idx in selection) || selection[idx].key !== correctSelection[idx]) {
					correct = false;
				}
			}
			if(correct) {
				return {
					headerLabel: 'Instructie',
					headerText: 'Je antwoord is good!',
					responseText: correctText,
					responseType: true,
				}
			} else {
				let incorrectText =  (

							<div className="response-text incorrect">
								{Object.keys(selection).map( (k) => {

									if(selection[k].key !== correctSelection[k]) {
										return (
												<div className="response-line" key={k}>
													<span className="blank">{selection[k].text}</span><p>is fout</p>
												</div>
										)
									} else {
										return false
									}
								})}
							</div>
						)
				return {
					headerLabel: 'Instructie',
					headerText: 'Je antwoord is fout',
					responseText: incorrectText,
					responseType: false,
				}
			}
		}
	},
]