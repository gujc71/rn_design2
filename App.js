import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList, TouchableOpacity  } from "react-native";
import CollapsingToolbar from './src/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import Dialog, {DialogContent, SlideAnimation,} from 'react-native-popup-dialog';

const data = Array(20).fill().map((_, index) => ({key: index.toString()}))

class Demo extends Component {

  state = {
    slideAnimationDialog: false,
  }

  renderBox(item) {
    return (
      <View style={styles.box} />
    )
  }

  optionMenuClick = (index) => {
    this.setState({ slideAnimationDialog: false });
  }

  render() {
    return (
          <CollapsingToolbar 
            leftItem={<Icon name="bars" size={30}  color="#fff" font/>}
            rightItem={<Icon name="ellipsis-v" size={30}  color="#fff" font/>}
            rightItemPress={() => {this.setState({ slideAnimationDialog: true }); }}
            title='rn_design2'
            subtitle="it's design template"
            src={require('./src/nav.png')}>

            <FlatList
              data={data}
              renderItem={this.renderBox}/> 

            <Dialog
              onDismiss={() => {this.setState({ slideAnimationDialog: false }); }}
              onTouchOutside={() => { this.setState({ slideAnimationDialog: false }); }}
              visible={this.state.slideAnimationDialog}
              dialogAnimation={new SlideAnimation({ slideFrom: 'bottom' })}>
              <DialogContent>
                <TouchableOpacity onPress={() => this.optionMenuClick(1)}>
                  <View style={styles.menuItem}><Text style={styles.menuItemText}>Option 1</Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.optionMenuClick(2)}>
                  <View style={styles.menuItem}><Text style={styles.menuItemText}>Option 2</Text></View>
                </TouchableOpacity>
              </DialogContent>
            </Dialog>          
          </CollapsingToolbar>
    );
  }
}

export default Demo;

const styles = StyleSheet.create({
  nestedScroll: {
    backgroundColor: '#f5f5f5',
  },
  toolbar: {
    height: 56,
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    borderRadius: 2,
    marginVertical: 8,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    elevation: 2,
  },
  dialogContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0
  },
  menuItem: {
    height: 30,
    padding: 5,
    margin: 10
  },
  menuItemText: {
    fontSize: 20,
    color: "black"
  },
});

