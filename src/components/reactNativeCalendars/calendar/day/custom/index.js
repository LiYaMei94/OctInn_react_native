import React, {Component} from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

import styleConstructor from './style';
import {shouldUpdate} from '../../../component-updater';
//新增
import {getLunarDate} from '../../../dateutils';
class Day extends Component {
  static displayName = 'IGNORE';
  
  static propTypes = {
    // TODO: disabled props should be removed
    state: PropTypes.oneOf(['selected', 'disabled', 'today', '']),

    // Specify theme properties to override specific styles for calendar parts. Default = {}
    theme: PropTypes.object,
    marking: PropTypes.any,
    onPress: PropTypes.func,
    date: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.style = styleConstructor(props.theme);
    this.onDayPress = this.onDayPress.bind(this);
    this.onDayLongPress = this.onDayLongPress.bind(this);
  }

  onDayPress() {
    this.props.onPress(this.props.date);
  }
  onDayLongPress() {
    this.props.onLongPress(this.props.date);
  }

  shouldComponentUpdate(nextProps) {
    return shouldUpdate(this.props, nextProps, ['state', 'children', 'marking', 'onPress', 'onLongPress']);
  }
  //判断是不是NaN
  judgeNaN (value) {
    return (typeof value) === 'number' && window.isNaN(value);
  }
  render() {
    let containerStyle = [this.style.base];
    let textStyle = [this.style.text];
    //新增
    let dateString=this.props.date.dateString;
    let lunarCalendarDate=getLunarDate(dateString);
    this.props.date.lunarCalendarDate=lunarCalendarDate;
    let dateDescribe='';
    
    if(JSON.stringify(lunarCalendarDate.dateDescribe!='{}')){
      //这里要把节气啥的放上去
      dateDescribe=lunarCalendarDate.dateDescribe.solarTerms+
      lunarCalendarDate.dateDescribe.solarFestival+
      lunarCalendarDate.dateDescribe.lunarFestival
    }
    //console.log(this.judgeNaN(dateDescribe))
    //console.log(dateDescribe)



    let marking = this.props.marking || {};
    if (marking && marking.constructor === Array && marking.length) {
      marking = {
        marking: true
      };
    }
    const isDisabled = typeof marking.disabled !== 'undefined' ? marking.disabled : this.props.state === 'disabled';

    if (marking.selected) {
      containerStyle.push(this.style.selected);
    } else if (isDisabled) {
      textStyle.push(this.style.disabledText);
    } else if (this.props.state === 'today') {
      containerStyle.push(this.style.today);
      textStyle.push(this.style.todayText);
    }

    if (marking.customStyles && typeof marking.customStyles === 'object') {
      const styles = marking.customStyles;
      if (styles.container) {
        if (styles.container.borderRadius === undefined) {
          styles.container.borderRadius = 12;
        }
        containerStyle.push(styles.container);
      }
      if (styles.text) {
        textStyle.push(styles.text);
      }
    }
    //console.log(dateString)
    //console.log(this.props.dayWidth)
    return (
      <TouchableOpacity
        testID={this.props.testID}
        style={[containerStyle,{width:this.props.dayWidth,height:this.props.dayHeigth}]}
        onPress={this.onDayPress}
        onLongPress={this.onDayLongPress}
        activeOpacity={marking.activeOpacity}
        disabled={marking.disableTouchEvent}
      >
        <Text allowFontScaling={false} style={textStyle}>{String(this.props.children)}</Text>
        {/**新增*/}
        <Text allowFontScaling={false} style={this.style.lunarCalendarDateStyle}>{!this.judgeNaN(dateDescribe)?dateDescribe:lunarCalendarDate.day}</Text>
      </TouchableOpacity>
    );
  }
}

export default Day;
