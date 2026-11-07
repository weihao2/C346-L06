import React, {useState} from 'react';
import {ScrollView, Text, Button, Alert, TouchableOpacity, ToastAndroid, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const MyQuiz = () => {
    const [answer, setAnswer] = useState('');
    const [result, setResult] = useState('');

    const [q1, setQ1] = useState('');
    const [q2, setQ2] = useState('');
    const [q3, setQ3] = useState('');

    return (
        <ScrollView>
            <Image
                source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXpoQ5aGp9vb7Tjqtc4pHnVG-f-DQbDfEIaptYfTl9LQ&s=10"}}
                style={{width: '400', height: '500'}}
            />

            <Text>What game is this</Text>
            <Picker onValueChange={(value) => setQ1(value)} selectedValue={q1}>
                <Picker.Item label="-- Select Answer --" value=""/>
                <Picker.Item label="Titanfall" value="Titanfall"/>
                <Picker.Item label="Apex Legends" value="Apex Legends"/>
                <Picker.Item label="Valorant" value="Valorant"/>
                <Picker.Item label="Overwatch" value="Overwatch"/>
            </Picker>

            <Image
                source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZP88BYOlnAxiF38gETp_qe0dy0d1cBHZsdB9QIpRkxw&s=10"}}
                style={{width: '400', height: '500'}}
            />

            <Text>What game is this</Text>
            <Picker onValueChange={(value) => setQ2(value)} selectedValue={q2}>
                <Picker.Item label="-- Select Answer --" value=""/>
                <Picker.Item label="Titanfall" value="Titanfall"/>
                <Picker.Item label="Apex Legends" value="Apex Legends"/>
                <Picker.Item label="Valorant" value="Valorant"/>
                <Picker.Item label="Overwatch" value="Overwatch"/>
            </Picker>

            <Image
                source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc9gZDJ2f8sz4okuSHlLSgTjfkyswijU3naGhx6AKfSg&s=10"}}
                style={{width: '400', height: '500'}}
            />

            <Text>What game is this</Text>
            <Picker onValueChange={(value) => setQ3(value)} selectedValue={q3}>
                <Picker.Item label="-- Select Answer --" value=""/>
                <Picker.Item label="Titanfall" value="Titanfall"/>
                <Picker.Item label="Apex Legends" value="Apex Legends"/>
                <Picker.Item label="Valorant" value="Valorant"/>
                <Picker.Item label="Overwatch" value="Overwatch"/>
            </Picker>

            <Button
                title="Submit Answer"
                color="blue"
                onPress={()=>{
                    let score = 0

                    if (q1 === 'Apex Legends') {
                        score += 1
                    }
                    if (q2 === 'Valorant') {
                        score += 1
                    }
                    if (q3 === 'Overwatch') {
                        score += 1
                    }

                    if (score === 0) {
                        Alert.alert('','You got ' + score + '/3\nTry again')
                    }

                    if (score === 1) {
                        Alert.alert('','You got ' + score + '/3\nNice')
                    }

                    if (score === 2) {
                        Alert.alert('','You got ' + score + '/3\nAlmost there')
                    }

                    if (score === 3) {
                        Alert.alert('','You got ' + score + '/3\nWell done')
                    }
                }}
            />
        </ScrollView>
    )
}
export default MyQuiz;
