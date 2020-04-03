import React, { Component } from 'react';
import Navbar from "./../../Navigation/Navbar";
import { Radio, FormControl, FormLabel, FormControlLabel, RadioGroup } from '@material-ui/core';
import { withRouter } from 'react-router';
import axios from 'axios';

class QuizTaker extends Component {

	constructor(props) {
		super(props);
		this.state = {
			quiz_id: 0,
			quiz_name: '',
			questions: [],
			userAnswers: []
		}
	}

	componentDidMount() {
		const quiz_id = this.props.match.params.quiz_id;
		axios.get("http://localhost:3000/quiz/".concat(quiz_id)).then(res => {
			var courseCode = res.data.courseCode;
			var quiz_name = res.data.name;
			var questions = res.data.questions;
			console.log(courseCode);
			this.setState({quiz_id, quiz_name, questions});
		});
	}

	handleChange = (e) => {

		e.preventDefault();
		// Need to keep track of the answers
	}

	render() {

		console.log(this.props.match.params.quiz_id)

		const questionList = this.state.questions.map(question => {

			const choices = question.choices.map(choice => {

				return (

					<div className="center">
					 <FormControlLabel value={choice} control = {<Radio id={question.qNum} onChange={this.handleChange}/>} label={choice}/>
					</div>
				)

			});
			
			
		return (

			<div className="container">
			
			        <h6 className="grey-text"> {question.content} </h6> 

				<div className="post card">	   
				
				   <FormControl component="fieldset">
				   
				    <FormLabel component="legend"> </FormLabel>

				    <RadioGroup defaultValue={null} name="customized-radios">
			              {choices}
				    </RadioGroup>			 
				   
				   </FormControl>

				</div>
			</div>
			)
		});

		return (

			<div>

			   <Navbar isLogged={true} />

			   <div className="container">
			    
			     <h3 className="post card"> {this.state.quiz_name} </h3>

			     {questionList}
	
			   </div>

			   <div className="center container">
			     <button className="btn-large"> Submit </button>
			   </div>

			</div>

		);
	}


}

export default withRouter(QuizTaker);
