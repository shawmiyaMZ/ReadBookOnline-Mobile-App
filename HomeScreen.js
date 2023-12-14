import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput,Image} from 'react-native';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native';



const App = ({navigation}) => {
    const Header = () => {
      return(
        <View style={styles.head}>
          <Text style={styles.txt}>Book Catergories</Text>
        </View>
      )
    }

    const Boxes = () => {
      
      return(
        <ScrollView>
        <View style={styles.boxContain}>
          <View style={styles.boxinside}>
          <View style={styles.boxing}>
            <TouchableOpacity onPress={() => navigation.navigate('Detail')} >
              <Text style={styles.cater}>Novels</Text>
            </TouchableOpacity>
          </View>
          </View>

          <View style={styles.boxinside}>
          <View style={styles.boxing}>
            <TouchableOpacity>
              <Text style={styles.cater}>Poems</Text>
              </TouchableOpacity>
          </View>
          </View>
          <View style={styles.boxinside}>
          <View style={styles.boxing}>
            <TouchableOpacity>
              <Text style={styles.cater}>Politics</Text>
            </TouchableOpacity>
          </View>
          </View>
          <View style={styles.boxinside}>
          <View style={styles.boxing}>
            <TouchableOpacity>
              <Text style={styles.cater}>Religons</Text>
            </TouchableOpacity>
          </View>
          </View>
          <View style={styles.boxinside}>
          <View style={styles.boxing}>
            <TouchableOpacity>
              <Text style={styles.cater}>Philosophy</Text>
            </TouchableOpacity>
          </View>
          </View>
          <View style={styles.boxinside}>
          <View style={styles.boxing}>
            <TouchableOpacity>
              <Text style={styles.cater}>Literature</Text>
            </TouchableOpacity>
          </View>
          </View>
          <View style={styles.boxinside}>
          <View style={styles.boxing}>
            <TouchableOpacity>
              <Text style={styles.cater}>Zoology</Text>
            </TouchableOpacity>
          </View>
          </View>
        </View>
        </ScrollView>
      )
    }

    return(
      <SafeAreaView style={styles.container}>
        <Header/>
        <Boxes/>
      </SafeAreaView>
    );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    width: '100%',
    height: '15%',
    backgroundColor: '#722f37',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  txt: {
    paddingTop: 20,
    fontWeight: 'bold',
    fontSize: 25,
    color: '#fff',
  },
  boxContain: {
    width: '100%',
    height: '85%',
    backgroundColor: '#fff',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  boxinside: {
    height: '20%',
    width: '100%',
    padding: 5,
    backgroundColor: '#ffff'
  },
  boxing: {
    flex: 1,
    backgroundColor: '#fadfad',
    alignItems: 'center',
    
  },
  cater: {
    fontSize: 35,
    fontWeight: 'bold',
    paddingTop: 25,
    color: '#ff0090',
    
  },
  inputcontainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#fddde6',
    alignItems: 'center',
    paddingHorizontal: 20
},
srtbtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: '#ff1493',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
},

});

export default App;





/*import React, { useState } from "react";
import { SafeAreaView, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, FlatList, Dimensions, Card } from "react-native";
import { Icon } from "react-native-elements";
import catergories from "../../consts/catergories";
import books from "../../consts/books";
const {width} = Dimensions.get('screen') ;
const cardWidth = width/2 - 20;


const HomeScreen = () => {
    const [selectedCatergoryIndex, setSelectedCotergoryIndex] = React.useState(0);
    const ListCatergories = () => {
        return(
            <ScrollView horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={style.catergoriesListContainer}>
            {catergories.map((catergory, index)=>(
                <TouchableOpacity key={index} activeOpacity={0.8} onPress={()=>setSelectedCotergoryIndex(index)}>
                    <View style={{backgroundColor:selectedCatergoryIndex==index?'#ff1493':'#fddde6',
                        ...style.catergorybtn}}>
                            <View style={style.catergoryImg}>
                                <Image source={catergory.image} style={{height:25, width:25, resizeMode:'cover'}}/>
                            </View>
                            <Text style={{fontSize:15, fontWeight:'bold', marginLeft:8, color:selectedCatergoryIndex==index?'#fff':'#ff1493'}}>{catergory.name}</Text>
                        </View>
                </TouchableOpacity>
            ) )}
            </ScrollView>
        );
    };

    const Card = () => {
        return(
            <View style={style.card}></View>
        )
    }

    return (
        <SafeAreaView style={{flex : 1, backgroundColor: '#fff'}}>
            <View style={style.hearder}>
                <View>
                    <View style={{flexDirection:'row'}}><Text style={{fontSize:28, fontWeight:'bold'}}>Choose Your Books</Text></View>
                    <Text style={{marginTop:5, color:'gray', fontSize:15}}>Read the Books and get maximum Knowledge</Text>
                </View>
                    <Image source={require("../../assets/3.png")} style={{height: 70, width: 60, marginTop: 20 }}/>
            </View>
            <View style={{marginTop:40, flexDirection:'row', paddingHorizontal: 20}}>
                <View style={style.inputcontainer}>
                    <Icon name="search"/>
                    <TextInput  style={{flex:1, fontSize:18}} placeholder="Search Books Here"/>
                </View>
                <View style={style.srtbtn}>
                    <TouchableOpacity>
                    <Icon name="tune" size={28} color={'#fff'}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
            <ListCatergories />
            </View>
            <FlatList 
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={books}
            renderItem={({item}) => <Card food={item}/> }/>
        </SafeAreaView>
    );
};


const style = StyleSheet.create({
    hearder: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    inputcontainer: {
        flex: 1,
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: '#fddde6',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    srtbtn: {
        width: 50,
        height: 50,
        marginLeft: 10,
        backgroundColor: '#ff1493',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    catergoriesListContainer: {
         paddingHorizontal: 20,
         paddingVertical: 30,
         alignItems: 'center',    
    },
    catergorybtn: {
        height: 45,
        width: 120,
        marginRight: 7,
        borderRadius: 30,
        alignItems: 'center',
        paddingHorizontal: 5,
        flexDirection: 'row'
    },
    catergoryImg: {
        height: 35,
        width: 35,
        backgroundColor: '#fff',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        height: 220,
        width: cardWidth,
        marginHorizontal: 10,
        marginBottom:20,
        marginTop: 50,
        borderRadius: 15,
        elevation: 13,
        backgroundColor: 'yellow'
    }
    
});

export default HomeScreen;*/