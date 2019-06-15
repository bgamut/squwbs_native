import React,{Component,Context,useContext} from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Posts from './components/Posts'
import AddPost from './components/AddPost'
import Swiper from './components/Swiper'
import ScrollableHeader from './components/ScrollableHeader'
 
import DefaultFlatList from './components/DefaultFlatList'
//import {FlatList} from 'react'
import {ContextController} from './context'
import {View,Text,ScrollView,Dimensions,Platform,SafeAreaView,StyleSheet} from 'react-native'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

class App extends Component {
  componentDidMount() {
   // window.scrollTo(0, 0)
  }
  click(string){
    alert(string)
  }
  render(){
    return(
     
      <ContextController>
        <SafeAreaView>
          
          <View style={{backgroundColor:'transparent',flexDirection:'column',margin:0,padding:0}}>
            <View style={{height:22,backgroundColor:'transparent',flexDirection:'column',margin:5}}>
              <AddPost/>
            </View>
            <ScrollView>
              
                
                  <View style={{backgroundColor:'transparent',flex:1,flexDirection:'column',margin:5,paddingRight:5,paddingLeft:5}}>
                  
                    {/* <View style={{paddingTop:2}}>
                      <AddPost style={{padding:1,margin:1,zIndex:0}}/> 
                    </View>  */}
                    
                  

                    <View style={{height:Dimensions.get('screen').height/6,backgroundColor:'transparent'}}>
                      {/* <Text>section 1</Text> */}
                        <Swiper loop={true} autoplayTimeout={5}>
                          <View style={{
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "rgba(20,20,20,0.3)"
                            }}>
                              <Text>Slide 1</Text>
                          </View>
                          <View style={{
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "rgba(110,110,110,0.3)"
                          }}>
                              <Text>Slide 2</Text>
                          </View>
                          <View style={{
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "rgba(200,200,200,0.3)"
                          }}>
                              <Text>Slide 3</Text>
                          </View>
                      </Swiper>
                    </View>

                    <View style={{height:Dimensions.get('screen').height/2,backgroundColor:'transparent',margin:5}}>
                        {/* <Text>section 2</Text> */}
                        <DefaultFlatList/>
                    </View>

                    <View style={{height:Dimensions.get('screen').height,backgroundColor:'transparent',marginTop:13}}>
                      {/* <Text>section 3</Text> */}
                    </View>

                    
                  </View> 
                
              
            </ScrollView> 
          </View>
           
        </SafeAreaView>
      </ContextController>
    )
  }
}
3
const appStyle = {
  flex:1,
  margin:0,
  borderColor:'#000000',
  //borderWidth:5,
  // shadowColor: 'rgba(1, 1, 1, 1)',
  // shadowOffset: {width: 0, height: 0},
  // shadowRadius: 20,
  backgroundColor:'#ffffff',
  alignItems:'center',
  justifyContent:'space-evenly',
  height:22,
};
export default App;




// import React, { Component } from "react";
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   AsyncStorage,
//   Button,
//   TextInput,
//   Keyboard,
//   Platform
// } from "react-native";

// const isAndroid = Platform.OS == "android";
// const viewPadding = 10;

// export default class TodoList extends Component {
//   state = {
//     tasks: [],
//     text: ""
//   };

//   changeTextHandler = text => {
//     setState({ text: text });
//   };

//   addTask = () => {
//     let notEmpty = state.text.trim().length > 0;

//     if (notEmpty) {
//       this.setState(
//         prevState => {
//           let { tasks, text } = prevState;
//           return {
//             tasks: tasks.concat({ key: tasks.length, text: text }),
//             text: ""
//           };
//         },
//         () => Tasks.save(state.tasks)
//       );
//     }
//   };

//   deleteTask = i => {
//     this.setState(
//       prevState => {
//         let tasks = prevState.tasks.slice();

//         tasks.splice(i, 1);

//         return { tasks: tasks };
//       },
//       () => Tasks.save(state.tasks)
//     );
//   };

//   componentDidMount() {
//     Keyboard.addListener(
//       isAndroid ? "keyboardDidShow" : "keyboardWillShow",
//       e => this.setState({ viewPadding: e.endCoordinates.height + viewPadding })
//     );

//     Keyboard.addListener(
//       isAndroid ? "keyboardDidHide" : "keyboardWillHide",
//       () => this.setState({ viewPadding: viewPadding })
//     );

//     Tasks.all(tasks => this.setState({ tasks: tasks || [] }));
//   }

//   render() {
//     return (
//       <View
//         style={[styles.container, { paddingBottom: state.viewPadding }]}
//       >
//         <FlatList
//           style={styles.list}
//           data={this.state.tasks}
//           renderItem={({ item, index }) =>
//             <View>
//               <View style={styles.listItemCont}>
//                 <Text style={styles.listItem}>
//                   {item.text}
//                 </Text>
//                 <Button title="X" onPress={() => this.deleteTask(index)} />
//               </View>
//               <View style={styles.hr} />
//             </View>}
//         />
//         <TextInput
//           style={styles.textInput}
//           onChangeText={this.changeTextHandler}
//           onSubmitEditing={this.addTask}
//           value={this.state.text}
//           placeholder="Add Tasks"
//           returnKeyType="done"
//           returnKeyLabel="done"
//         />
//       </View>
//     );
//   }
// }

// let Tasks = {
//   convertToArrayOfObject(tasks, callback) {
//     return callback(
//       tasks ? tasks.split("||").map((task, i) => ({ key: i, text: task })) : []
//     );
//   },
//   convertToStringWithSeparators(tasks) {
//     return tasks.map(task => task.text).join("||");
//   },
//   all(callback) {
//     return AsyncStorage.getItem("TASKS", (err, tasks) =>
//       this.convertToArrayOfObject(tasks, callback)
//     );
//   },
//   save(tasks) {
//     AsyncStorage.setItem("TASKS", this.convertToStringWithSeparators(tasks));
//   }
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF",
//     padding: viewPadding,
//     paddingTop: 20
//   },
//   list: {
//     width: "100%"
//   },
//   listItem: {
//     paddingTop: 2,
//     paddingBottom: 2,
//     fontSize: 18
//   },
//   hr: {
//     height: 1,
//     backgroundColor: "gray"
//   },
//   listItemCont: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between"
//   },
//   textInput: {
//     height: 40,
//     paddingRight: 10,
//     paddingLeft: 10,
//     borderColor: "gray",
//     borderWidth: isAndroid ? 0 : 1,
//     width: "100%"
//   }
// });