import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';
import 'react-dates/lib/css/_datepicker.css';


class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused : null
    }
    searchByText = (e) => {
        this.props.dispatch(setTextFilter(e.target.value));
    }

    handleSortBy = (e) => {
        if(e.target.value === 'date'){
            this.props.dispatch(sortByDate());
        }
        else if(e.target.value === 'amount'){
            this.props.dispatch(sortByAmount());
        }
    }

    onDatesChangeHandler = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChangeHandler = (focusedInput) => {
        this.setState(() => ({calendarFocused: focusedInput}));
    }

    render(){
        return(
             <div>
                <input 
                type="text" 
                value={this.props.filters.text} 
                onChange={this.searchByText} 
                />

                <select
                value={this.props.filters.sortBy}
                onChange={this.handleSortBy}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>

                <DateRangePicker
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChangeHandler}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChangeHandler}
                numberOfMonths={1}
                isOutsideRange={() => false}
                showClearDates={true}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        filters: state.filters
    }
}


export default connect(mapStateToProps)(ExpenseListFilters);