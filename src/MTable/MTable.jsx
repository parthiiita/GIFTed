import React from 'react';
import styles from './MTable.css';
import ReactDOM from 'react-dom';
import $ from 'jQuery';
const itemHeight = 100;
const itemsRendered = 10;
var scrollContainer = document.getElementById('scroll-container');
var itemContainer = document.getElementById('item-container');
var items = $('.MRow');


let lastFirstItem = 1;

class MTable extends React.Component {
    state = {
        paddingTop: 0,
        paddingBottom: 0,
        asyncStatus: 'init'
    }

    componentDidMount() {
        scrollContainer = $('.scroll-container');
        itemContainer = $('.item-container');
        items = $('.MRow');
    }
    componentWillReceiveProps(nextProps) {

        if (!this.props.data.length && nextProps.data.length) {
            this.setScrollState({ target: { scrollTop: 0 } }, nextProps);
        }
    }

    setScrollState = (scrollTop, props = this.props) => {
        const totalItems = props.totalItems;
        const itemsBefore = Math.min(Math.floor(scrollTop.target.scrollTop / itemHeight), totalItems - itemsRendered);
        const itemsAfter = totalItems - (itemsBefore + itemsRendered);
        items = $('.MRow');
        const firstItem = itemsBefore + 1;
        const lastItem = itemsBefore + itemsRendered;
        console.log(items);
        let start = itemsBefore + 1;
        for (var i = 0; i < 10; i++) {
            ReactDOM.render(props.rowJSX(props.data[start + i - 1]), items[i]);
        }


        lastFirstItem = firstItem;

        const paddingTop = itemsBefore * itemHeight;
        const paddingBottom = itemsAfter * itemHeight;
        this.setState({ paddingTop, paddingBottom }, () => {
            if (!this.state.paddingBottom) {
                this.setState({ asyncStatus: 'loading' })
                props.fetchData().then(() => this.setState({ asyncStatus: 'success' }));


            }
        });
        ;
    }
    render() {
        console.log('render', this.state.asyncStatus, this.props.data)
        return (<div>
            <div><h1> GIFTed !</h1>
                <input type="text" onChange={this.props.onChangee} /></div>
            <table>
                <thead>
                    <tr>
                        {this.props.headers.map(h => <th style={this.props.headerStyle}>{h}</th>)}
                    </tr>
                </thead>
            </table>
            <div onScroll={this.setScrollState} id="scroll-container" className="MContainer">
                <div id="item-container" className="Table" style={{ paddingTop: this.state.paddingTop, paddingBottom: this.state.paddingBottom }}>

                    <div className="MRow">1</div>
                    <div className="MRow">2</div>
                    <div className="MRow">3</div>
                    <div className="MRow">4</div>
                    <div className="MRow">5</div>
                    <div className="MRow">6</div>
                    <div className="MRow">7</div>
                    <div className="MRow">8</div>
                    <div className="MRow">9</div>
                    <div className="MRow">10</div>
                    {this.props.asyncStatus === 'loading' && <div className="loader"></div>}

                </div>

            </div>

        </div>);
    }
}
export default MTable;