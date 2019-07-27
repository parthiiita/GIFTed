import React from 'react';

class NestedViewer extends React.Component {

    getDash = () => {
        let dashes = '';
        for (let i = 0; i < this.props.index; i++) {
            dashes += ' -';
        }
        return dashes;

    }
    renderRow = (k) => {
        console.log(typeof(this.props.data[k]));
        return <div style={{display: 'flex', fontSize: '40px',  }}>
            <div>{this.getDash()}</div>
            <div>{typeof(this.props.data[k]) === 'object' ? <div ><div>{k + ' : '}</div><NestedViewer data={this.props.data[k]} index={this.props.index + 1} /></div> : 
            <div>{k + ' : ' + this.props.data[k]}</div>}</div>
            </div>
    }


    render () {
        return (<div style={{padding: '20px', border: '1px solid orange', width: 'fit-content', overflow: 'scroll'}}>
            {Object.keys(this.props.data).map(k => this.renderRow(k))}
        </div>);
    }
}

export default NestedViewer;