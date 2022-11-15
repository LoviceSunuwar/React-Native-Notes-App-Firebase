import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, StyleSheet, ScrollView, ActivityIndicator, View, TextInput, Image, TouchableOpacity, Platform } from 'react-native';
import firebase from '../config';
import BookImagePicker from '../comp/imagepicker';

//import {ref} from "firebase/storage";
// import ImagePicker from 'react-native-image-picker';
// import * as Progress from 'react-native-progress';
//import {Dropdown } from 'react-native-dropdown';


class CreateComponent extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection('books');
    this.state = {
      book_name: '',
      author_name: '',
      publi_name:'',
      description: '',
      book_price:'',
      book_year:'',
      book_genre:'',
      book_hot:'',
      book_image:'',
      isLoading: false
    };
  }

  onValUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }


  // onImgUpdate = (imgval, prop) => {
  //   const state = this.state;
  //   state[prop] = imgval;
  //   this.setState(setImage, 'book_image');
  // }
  // handleImageChange = (e) => {
  //   if (e.target.files[0]) {
  //     setImage(e.target.files[0]);
  //   }
  // };
  // uploadImage = async(uri) => {
  //   const response = await fetch(uri);
  //   const blob = await response.blob();
  //   var ref = firebase.storage().ref().child("my-image");
  //   return ref.put(blob);
  // }

  addBook() {
    if(this.state.book_name === '',
    this.state.author_name === '',
    this.state.description === '',
    this.state.book_genre === '',
    this.state.book_price === '',
    this.state.book_hot === '',
    this.state.book_year === '',
    this.state.publi_name == '',
    this.state.book_image == ''
    ){
     alert('Fields are empty.')
    } else {
      this.setState({
        isLoading: true,
      });      
      this.ref.add({
        book_name: this.state.book_name,
        author_name: this.state.author_name,
        publi_name:this.state.publi_name,
        description: this.state.description,
        book_price:this.state.book_price,
        book_year:this.state.book_year,
        book_genre:this.state.book_genre,
        book_hot:this.state.book_hot,
        book_image:this.state.book_image
      }).then((res) => {
        this.setState({
          book_name: '',
          author_name: '',
          publi_name:'',
          description: '',
          book_price:'',
          book_year:'',
          book_genre:'',
          book_hot:'',
          book_image:'',
          isLoading: false,
        });
        this.props.navigation.navigate('CartComponent')
      })
      .catch((err) => {
        console.error("Error occured: ", err);
        this.setState({
          isLoading: false,
        });
      });
    }
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="green"/>
        </View>
      )
    }
    return (
      <ScrollView style={styles.container}>

        <BookImagePicker
        value={this.state.book_image} 
        onChangeText={(val) => this.onValUpdate(val, setImage, 'book_image')}
        
        ></BookImagePicker>

        
        <View style={styles.formEle}>
          <TextInput
              placeholder={'Book Title'}
              value={this.state.book_name}
              onChangeText={(val) => this.onValUpdate(val, 'book_name')}
          />
        </View>
         <View style={styles.formEle}>
          <TextInput
              placeholder={'Author Name'}
              value={this.state.author_name}
              onChangeText={(val) => this.onValUpdate(val, 'author_name')}
          />
        </View>
        <View style={styles.formEle}>
          <TextInput
              placeholder={'Publisher'}
              value={this.state.coauthor_name}
              onChangeText={(val) => this.onValUpdate(val, 'publi_name')}
          />
        </View>
        <View style={styles.formEle}>
          <TextInput
              placeholder={'Price'}
              value={this.state.book_price}
              onChangeText={(val) => this.onValUpdate(val, 'book_price')}
          />
        </View>
        <View style={styles.formEle}>
          <TextInput
              placeholder={'Year'}
              value={this.state.book_year}
              onChangeText={(val) => this.onValUpdate(val, 'book_year')}
          />
        </View>
        <View style={styles.formEle}>
          <TextInput
              placeholder={'Genre'}
              value={this.state.book_genre}
              onChangeText={(val) => this.onValUpdate(val, 'book_genre')}
          />
        </View>
        <View style={styles.formEle}>
          <TextInput
              placeholder={'Is It Hot?'}
              value={this.state.book_hot}
              onChangeText={(val) => this.onValUpdate(val, 'book_hot')}
          />
        </View>
        <View style={styles.formEle}>
          <TextInput
              multiline={true}
              numberOfLines={5}
              placeholder={'Description'}
              value={this.state.description}
              onChangeText={(val) => this.onValUpdate(val, 'description')}
          />
        </View>
        {/* <View style = {styles.formEle}>
          <StatusBar style='auto'></StatusBar>
          <input type = "file" onChange={this.handleImageChange}/>
        </View>  */}
        <View style={styles.button}>
          <Button
            title='Create'
            onPress={() => this.addBook()} 
            color="black"
          />
        </View>
        <View style={styles.button}>
          <Button
            title='view'
            onPress={() => {
              this.setState({
                book_name: '',
                author_name: '',
                coauthor_name:'',
                description: '',
                book_price:'',
                book_year:'',
                book_genre:'',
                book_hot:'',
            //   book_image:'',
                isLoading: false,
              });
              this.props.navigation.navigate('ReadComponent');
              //this.uploadImage;
           //   console.log.setBookImage();
            }}
            color="black"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  formEle: {
    flex: 1,
    padding: 5,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#4e4e4e',
  },
  loading: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',    
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }
})

export default CreateComponent;