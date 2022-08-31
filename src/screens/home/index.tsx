import { ContainerDark, ContainerGray, ContainerTitle, Rocket, Text } from "./styles";

const Home = () => {

    return(
        <>
            <ContainerDark> 

                <Rocket source={require('../../images/rocket.png')}/>

                <ContainerTitle>
                    <Text primary>to</Text>
                    <Text>do</Text>
                </ContainerTitle>

            </ContainerDark>

            <ContainerGray>



            </ContainerGray>
        </>
    )

}

export default Home;