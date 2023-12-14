import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';


export default function App(){

  return(
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.todo}>
        <Text style={styles.topic}>Jane Eyre</Text>
      </View>
      
      <View style={styles.image}>
      
      </View>
      <Text style={styles.txt1}>NAME : Jane Eyre</Text>
      <Text style={styles.txt2}>AUTHOR : Charlotte Bronte</Text>
      <Text style={styles.txt3}>PAGES : 180</Text>
      <Text style={styles.txt3}>Price : Rs.520</Text>
      <Text style={styles.txt4}>ABOUT  :   Jane Eyre is a novel written by Charlotte Brontë in 1847. The novel follows
                                           the story of Jane,
         a seemingly plain and simple girl as she battles through life's struggles. Jane has many obstacles in her
          life - her cruel and abusive Aunt Reed, the grim conditions at Lowood school, her love for Rochester 
          and Rochester's marriage to Bertha. However, Jane overcomes these obstacles through her determination, 
          sharp wit and courage. The novel ends with Jane married to Rochester with children of their own.</Text>
          <View>
            <Text style={styles.topic}>Mill on the Floss</Text>
            <View>
          
            </View>
            <View>
            <Text style={styles.txt6}>NAME : Mill on the Floss</Text>
            <Text style={styles.txt7}>AUTHOR : George Eliot</Text>
            <Text style={styles.txt8}>PAGES : 200</Text>
            <Text style={styles.txt8}>Price : Rs.460</Text>
            <Text style={styles.txt9}>ABOUT  :   The novel opens with the narrator in a dreamlike state. The speaker looks
             nostalgically at Dorlcote Mill on the River Floss, near the fictional English town of St. Ogg's. Living and 
             working on the property of the mill is the Tulliver family. Maggie is nine years old, and her brother Tom is
              a few years older. Maggie is independent and fiercely intelligent, but she follows Tom around adoringly. 
              Tom is affectionate toward his sister as well but is often harsh and dismissive of Maggie, which causes her
               great pain.</Text>
            </View>
          </View>
          <View>
          <Text style={styles.topic}>Harry Potter</Text>
          </View>
          <View>
         
          </View>
          <View>
            <Text style={styles.txt10}>Name : Harry Potter</Text>
            <Text style={styles.txt11}>Author : J.K.Rowling</Text>
            <Text style={styles.txt12}>Pages : 2500 </Text>
            <Text style={styles.txt12}>Price : Rs.1800</Text>
            <Text style={styles.txt13}>About   :   Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. 
              The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron 
              Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc 
              concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow 
              the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical
               people).</Text>
          </View>
    </View>
    </ScrollView>
      );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'pink',
      alignItems: 'center'
    },

    topic: {
      fontWeight: 'bold',
      paddingTop: 60,
      paddingHorizontal: 20,
      fontSize: 35,
      color: '#dc143c'
    },

    mypic: {
      width: 180,
      height: 220,
      marginTop:10
    },
    txt1: {
      fontSize: 15,
      padding:10,
    },
    txt2: {
      fontSize: 15,
      paddingBottom:10
    },
    txt3: {
      fontSize: 15,
      paddingBottom:10
    },
    txt4: {
      fontSize: 15,
      paddingBottom:10,
      paddingLeft:10,
      paddingRight:10,
    },
    topic: {
      fontWeight: 'bold',
      paddingTop: 60,
      paddingHorizontal: 20,
      fontSize: 35,
      color: '#dc143c',
      paddingLeft:30
    },
    txt6: {
      fontSize: 15,
      padding:10,
      marginLeft:70
    },
    txt7: {
      fontSize: 15,
      paddingBottom:10,
      marginLeft:80
    },
    txt8: {
      fontSize: 15,
      paddingBottom:10,
      marginLeft:120
    },
    txt9: {
      fontSize: 15,
      paddingBottom:10,
      paddingLeft:10,
      paddingRight:10,
    },
    txt10: {
      fontSize: 15,
      padding:10,
      marginLeft:80
    },
    txt11: {
      fontSize: 15,
      paddingBottom:10,
      marginLeft:90
    },
    txt12: {
      fontSize: 15,
      paddingBottom:10,
      marginLeft:120
    },
    txt13: {
      fontSize: 15,
      paddingBottom:10,
      paddingLeft:10,
      paddingRight:10,
    },
    image:{
      width:150,
      height:200,
      justifyContent:'center',
      paddingTop:20,
      paddingBottom:20,
      alignItems:'center',
    }
});




