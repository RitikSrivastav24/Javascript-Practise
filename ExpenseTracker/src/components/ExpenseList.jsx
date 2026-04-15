import React from 'react'

function ExpenseList({ transactions }) {
    return (
        <ul>
            {
                transactions.map((item, index) => (
                    <li key={index}>
                        {item.text} - {item.amount}
                    </li>
                ))
            }
        </ul>
    )
}

export default ExpenseList