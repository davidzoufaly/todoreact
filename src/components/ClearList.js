import React from 'react';

class ClearList extends React.Component {
 render() { 
        return (
            <button onClick={this.props.clear}>Clear List</button>
        );
    }
}
 
export default ClearList;