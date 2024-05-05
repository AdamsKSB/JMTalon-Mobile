
import { Text, View, ImageBackground, Image } from 'react-native';
import * as React from 'react';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)


export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView className="bg-[#068E5E]"/>
        <ImageBackground
            source={require('./assets/loginBG.png')}
            className=' flex-1 items-center justify-center bg-cover'
        >
          <StyledView className='flex  h-[707px] w-[347px] rounded-[26.95px] bg-[#fff] border-[0.84px] border-[#23BE50] shadow-md  drop-shadow-[3.37px]'>
            <StyledView className='flex flex-row justify-between my-2 mx-3'> 
            <StyledText className='right-0'>FAQs</StyledText>
            <StyledText>Talk to Us</StyledText>
            </StyledView>
            <StyledView className='flex items-center'><Image source={require('./assets/loginLogo.png')}/></StyledView>


          </StyledView>
        </ImageBackground>
    </PaperProvider>
  );
}


