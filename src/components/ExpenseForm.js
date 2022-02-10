import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: this.expense ? moment(this.props.createdAt) : moment(),
            calendarFocused: false,
            error:''
        }
    }
    

    onDescriptionChange = (e) => {
        this.setState(() => ({description : e.target.value}));
    }

    onNoteChange = (e) =>{
        this.setState(() => ({note: e.target.value}));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;

        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({ amount }));
        }
    }

    onDateChangeHandler = (createdAt) =>{
        if(createdAt){
            this.setState(() => ({createdAt}));
        }
        
    }

    onFocusChangeHandler = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}));
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.note){
            this.setState(() => ({error: 'Please Provide Description and Amount'}));

        }
        else{
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                note:this.state.note,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf()
            });
        }
    }
    render(){
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.onSubmit}>
                <input 
                type="text"
                placeholder="Description"
                value={this.state.description}
                onChange={this.onDescriptionChange}
                />

                <input 
                type="text"
                placeholder="Number"
                value={this.state.amount}
                onChange={this.onAmountChange}
                />

                <SingleDatePicker 
                date={this.state.createdAt}
                onDateChange={this.onDateChangeHandler}
                focused={this.state.calendarFocused}
                onFocusChange={this.onFocusChangeHandler}
                numberOfMonths={1}
                isOutsideRange={() => false}
                />

                <textarea 
                placeholder="Add notes"
                value={this.state.note}
                onChange={this.onNoteChange}
                >
                </textarea>
                <button>Add Expense</button>
            </form>
            </div>
        )
    }
}