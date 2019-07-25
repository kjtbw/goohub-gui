import React from 'react';

const ObjectList = (props) => {
    var s = "";
    var a = [];
    for( let k in props.data){
        s = k + ": " + props.data[k] + "\n";
        a.push(<ul>{s}</ul>);
    };
    // console.log(a);
	return <ol>{a}</ol>;
}

export default ObjectList;
