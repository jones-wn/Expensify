import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';


const ExpenseListItem = ({id, description, amount, createdAt}) => {

    return(
        <div>
            <Link to={`/edit/${id}`}>Edit</Link>
             <ol>
                <li>
                    
                    <span>Description:</span>
                    <span>{description}</span>
                </li>
                <li>
                    <span>Amount:</span>
                    <span>{numeral(amount / 100).format('$0,0.00')}</span>
                </li>
                <li>
                    <span>CreatedAt:</span>
                    <span>{moment(createdAt).format('MMMM Do, YYYY')}</span>
                </li>
            </ol>
        </div>
    );
}



export default ExpenseListItem;