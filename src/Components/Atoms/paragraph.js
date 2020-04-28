import React from 'react';

const Paragraph = ({ color, fontSize, fontWeight, text, align,  padding, margin }) => {
    return (
        <p style={{
            fontSize: fontSize, 
            fontWeight: fontWeight, 
            color: color,
            alignSelf: align,
            padding: padding,
            margin: margin}}>
            {text}
        </p>
    )
}

export default Paragraph;