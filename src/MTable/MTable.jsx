import React from 'react';
import styles from './MTable.css';
import ReactDOM from 'react-dom';
import $ from 'jQuery';
const totalItems = 1000000;
const itemHeight = 100;
const itemsRendered = 10;
var scrollContainer = document.getElementById('scroll-container');
var itemContainer = document.getElementById('item-container');
var items = $('.MRow');


let lastFirstItem = 1;

class MTable extends React.Component {
    state ={
        paddingTop: 0,
        paddingBottom: 0
    }

    componentDidMount() {
        scrollContainer = $('.scroll-container');
        itemContainer = $('.item-container');
        items = $('.MRow');
        // scrollContainer.onscroll(() => {
        //     this.setScrollState(scrollContainer.scrollTop());
        // });
        
        //this.setScrollState(0);
    }

     setScrollState = (scrollTop) => {
         console.log(scrollTop.target.scrollTop, scrollContainer.scrollTop)
        //const itemContainer = document.getElementById('item-container');
        
        const itemsBefore = Math.min(Math.floor(scrollTop.target.scrollTop / itemHeight), totalItems - itemsRendered);
      const itemsAfter = totalItems - (itemsBefore + itemsRendered);
      console.log({itemsBefore, itemsAfter});
      //const items = $('.MRow')
      items = $('.MRow');
      const firstItem = itemsBefore + 1;
      const lastItem = itemsBefore + itemsRendered;
    console.log(items);
    let start = itemsBefore + 1;
    for (var i = 0 ; i < 10 ; i++) {
        console.log( i);
        ReactDOM.render( start + i, items[i]);
        //items.eq(0).append(<div>{i+1}</div>)
    }
    //     if (firstItem > lastFirstItem) {
            
    //       itemContainer.append(items.eq(0).text('' + lastItem));
    //   } else if (firstItem < lastFirstItem && firstItem > 0) {
          
    //       itemContainer.prepend(items.eq(itemsRendered - 1).text('' + firstItem));
    //   }
      
      lastFirstItem = firstItem;
      
      const paddingTop = itemsBefore * itemHeight;
      const paddingBottom = itemsAfter * itemHeight;
      console.log({paddingTop, paddingBottom});
      this.setState({paddingTop, paddingBottom});
      //itemContainer.css({ paddingTop, paddingBottom });
      //this.forceUpdate()
;    }
    render() {
        return (<div onScroll={this.setScrollState} id="scroll-container" className="MContainer">
        <div id="item-container" className="Table" style={{paddingTop: this.state.paddingTop, paddingBottom: this.state.paddingBottom}}>
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
        </div>
        </div>);
    }
}
export default MTable;