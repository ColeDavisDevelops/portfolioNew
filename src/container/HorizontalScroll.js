import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import FlipCard from '../components/FlipCard';
 
// list of items
const list = [
  { name: 'item1' },
  { name: 'item2' },
  { name: 'item3' },
  { name: 'item4' },
  { name: 'item5' },
  { name: 'item6' },
  { name: 'item7' },
  { name: 'item8' },
  { name: 'item9' }
];
 
// One item component
const MenuItem = ({text}) => {
  return (
    <FlipCard />
  ) 
};
 
// All items component
// Important! add unique key
const Menu = (list) =>
  list.map(el => {
    const {name} = el;
    return <MenuItem text={name} key={name}  />;
  });
 
 
const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};
 
 
const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
 
 
class HorizontalScroll extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list);
  }
 
  render() {
    // Create menu from items
    const menu = this.menuItems;
 
    return (
      <div >
        <ScrollMenu
          alignCenter={true}
          wheel={false}
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
        />
      </div>
    );
  }
}

export default HorizontalScroll;