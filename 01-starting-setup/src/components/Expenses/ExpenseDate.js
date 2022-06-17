import React from 'react';
import styled from 'styled-components';

function ExpenseDate (props) {
  const month = props.date.toLocaleString('en-US', {month: 'long'})
  const weekday = props.date.toLocaleString('en-US', {day: '2-digit'})
  const year = props.date.toLocaleString('en-US', {year: 'numeric'})

  return (
    <Date>
      <DateMonth>{month}</DateMonth>
      <DateDay>{weekday}</DateDay>
      <DateYear>{year}</DateYear>
    </Date>
  )
}


export default ExpenseDate

const Date = styled.div`
  display: flex;
  flex-direction: column;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #ececec;
  background-color: #2a2a2a;
  color: white;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`

const DateMonth = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
`

const DateYear = styled.div`
  font-size: 0.75rem;
`

const DateDay = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`
