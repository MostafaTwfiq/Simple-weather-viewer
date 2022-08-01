import React from 'react';
import math from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {

    function average(arr) {
        return (math.round(math.sum(arr)/arr.length));
    }

    return (
        <div>
            <Sparklines data={props.data} width={180} height={100} margin={5}>
                <SparklinesLine color= {props.color} />
                <SparklinesReferenceLine type="mean"/>
            </Sparklines>
            <div>Average line: {average(props.data)} {props.units}</div>
        </div>
    );
};