import React from 'react';
import styled from 'styled-components';

function Card(props) {
  return (
    <CardStyle {...props} />
  )
}

export default Card

const CardStyle = styled.div`
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0,0,0,0.25);
`
