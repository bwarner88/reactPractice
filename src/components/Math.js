import React from 'react';

const Math = (props) => {
    let value;

    if (props.operator === "+") {
        value = props.num1 + props.num2;
    }
    else if (props.operator === "-"){
        value = props.num1 - props.num2;
    }
    else if (props.operator === "*"){
        value = props.num1 * props.num2;
    }
    else if (props.operator === "/"){
        value = props.num1 / props.num2;
    }

    // return <span style ={{ fontSize: value }}
}

export default Math;