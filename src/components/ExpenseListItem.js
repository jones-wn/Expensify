import React from 'react';
import { Link } from 'react-router-dom';


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
                    <span>{amount}</span>
                </li>
                <li>
                    <span>CreatedAt:</span>
                    <span>{createdAt}</span>
                </li>
            </ol>
        </div>
    );
}



export default ExpenseListItem;