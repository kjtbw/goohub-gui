import React from 'react';

const ArrayObjectList = (props) => {
	const list_items = props.data.map(v => {
        var s = "";
        var a = [];
        for( let k in v){
            s = k + ": " + v[k] + "\n";
            a.push(<ul>{s}</ul>);
        };
        // console.log(a);
        return <li><ol>{a}</ol></li>;
	});
	return (<ol>{list_items}</ol>);
}

export default ArrayObjectList;
