import React, { Component } from 'react';

import firebase from '../config';
import { StyleSheet, ScrollView, ActivityIndicator, View, Button } from 'react-native';
import { ListItem } from 'react-native-elements'


class ReadComponent extends Component {
  constructor() {
    super();
    this.docs = firebase.firestore().collection('books');
    this.state = {
      isLoading: true,
      books: []
    };
  }

  componentDidMount() {
    this.unsubscribe = this.docs.onSnapshot(this.fetchCollection);
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  fetchCollection = (querySnapshot) => {
    const books = [];
    querySnapshot.forEach((res) => {
      const { book_name,
        author_name,
        coauthor_name,
        description,
        book_price,
        book_year,
        book_genre,
        book_hot } = res.data();
      books.push({
        key: res.id,
        book_name,
        author_name,
        coauthor_name,
        description,
        book_price,
        book_year,
        book_genre,
        book_hot
      });
    });
    this.setState({
      books,
      isLoading: false
   });
  }


  // sortCollection = (querySnapshot) => {
  //   const students = [];
  //   // querySnapshot.orderBy("lname");
  //   querySnapshot.forEach((res) => {
  //     const { name,lname, designation } = res.data().orderBy("lname");
  //     students.push({
  //       key: res.id,
  //       name,
  //       lname,
  //       designation
  //     });
  //   });
  //   this.setState({
  //     students,
  //     isLoading: false
  //  });
  // }

  



  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="red"/>
        </View>
      )
    }    
    return (
      <ScrollView style={styles.wrapper}>
          {
            this.state.books.map((res, i) => {
            
              return (
                
                
                <ListItem 
                   key={i} 
                   onPress={() => {
                      this.props.navigation.navigate('UpdateComponent', {
                        userkey: res.key
                      });
                    }}                   
                   bottomDivider>
                    
                  <ListItem.Content>
                    <ListItem.Title>{'Title:- ' + res.book_name}</ListItem.Title>
                    <ListItem.Title>{'Year:- ' +res.book_year}</ListItem.Title>
                    <ListItem.Title>{'Price:- ' +res.book_price}</ListItem.Title>
                    <ListItem.Title>{'Status:- ' +res.book_hot}</ListItem.Title>
                    <ListItem.Title>{'Genre:- ' +res.book_genre}</ListItem.Title>
                    <ListItem.Subtitle>{'Author:- ' +res.author_name}</ListItem.Subtitle>
                    <ListItem.Subtitle>{'Co Author:- ' +res.coauthor_name}</ListItem.Subtitle>
                    <ListItem.Subtitle>{'Description:- ' +res.description}</ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.Chevron 
                     color="black" 
                  />
                  
                </ListItem>
              );
            })
          }
            <Button
            title='Sort'
            onPress={()=> this.sortCollection}
            color="black"
          />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
   flex: 1,
   paddingBottom: 20
  },
  loader: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',    
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }
})

export default ReadComponent;