import React from 'react';
import styles from './MTable.css';
import ReactDOM from 'react-dom';
import debounce from '../utils/debounce';
const itemHeight = 100;
const itemsRendered = 10;
var scrollContainer = document.getElementById('scroll-container');
var itemContainer = document.getElementById('item-container');
var items = document.getElementsByClassName('MRow');


let lastFirstItem = 1;

class MTable extends React.Component {
    state = {
        paddingTop: 0,
        paddingBottom: 0,
        asyncStatus: 'init'
    }

    componentDidMount() {
        this.debouncedCallback = debounce(this.props.onChangee, 400);
        
        scrollContainer = document.getElementById('scroll-container');
        itemContainer = document.getElementById('item-container');
        items = document.getElementsByClassName('MRow');
    }
    componentWillReceiveProps(nextProps) {
        console.log('called', nextProps)
        if (!this.props.data.length && nextProps.data.length) {
            this.setScrollState({ target: { scrollTop: 0 } }, nextProps);
        } else {
            if (this.props.data.length && !nextProps.data.length) {
                console.log('rendering', nextProps.data);
                this.setScrollState({ target: { scrollTop: 0 } }, nextProps);
                
            }
            
        }
        
    }

    setScrollState = (scrollTop, props = this.props, defaultStr) => {
        const totalItems = props.totalItems;
        const itemsBefore = Math.min(Math.floor(scrollTop.target.scrollTop / itemHeight), totalItems - itemsRendered);
        const itemsAfter = totalItems - (itemsBefore + itemsRendered);
        items = document.getElementsByClassName('MRow');
        const firstItem = itemsBefore + 1;
        const lastItem = itemsBefore + itemsRendered;
        console.log(items);
        let start = itemsBefore + 1;
        for (var i = 0; i < 10; i++) {
            if (props.data[start + i -1])
            ReactDOM.render(props.rowJSX(props.data[start + i - 1]), items[i]);
            else  ReactDOM.render('', items[i]);
        }


        lastFirstItem = firstItem;

        const paddingTop = itemsBefore * itemHeight;
        const paddingBottom = itemsAfter * itemHeight;
        console.log({paddingTop, paddingBottom});
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
            <h1> {`Results: ${this.props.data.length}`}</h1>
                <input type="text" onChange={this.debouncedCallback} /></div>
                <div>
                
                        {this.props.data.length === 0 && <div>No Results</div>}
            <div onScroll={this.setScrollState} id="scroll-container" className="MContainer">
            <div style={{display:'flex', zIndex:99, position:'sticky', top: 0}}>
               
                        {this.props.headers.map((h, i) => <div className={i === 0 ? "stickyHeader" : ''} style={this.props.headerStyle}>{h}</div>)}</div>
                <div id="item-container" className="Table" style={{ paddingTop: this.state.paddingTop, paddingBottom: this.state.paddingBottom }}>
                
                    <div className="MRow"></div>
                    <div className="MRow"></div>
                    <div className="MRow"></div>
                    <div className="MRow"></div>
                    <div className="MRow"></div>
                    <div className="MRow"></div>
                    <div className="MRow"></div>
                    <div className="MRow"></div>
                    <div className="MRow"></div>
                    <div className="MRow"></div>
                    {this.props.asyncStatus === 'loading' && <div className="loader"></div>}
                   
                </div>

            </div>
            </div>

            </div>);
    }
}
export default MTable;