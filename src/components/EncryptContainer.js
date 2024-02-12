import React from 'react';
import styled from 'styled-components';
import AffineEncrypt from "../encoder/AffineEncrypt";
import CaesarEncrypt from "../encoder/CaesarEncrypt";
import VigenereEncrypt from "../encoder/VigenereEncrypt";
import AtbashEncrypt from "../encoder/AtbashEncrypt";
import MorseCipherEncrypt from "../encoder/MorseCipherEncrypt";
import BaconEncrypt from "../encoder/BaconEncrypt";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;

  @media (max-width: 768px) {
    justify-content: center;
    padding: 0 10px;
  }

  @media (min-width: 769px) {
    margin-left: -10px;
    margin-right: -10px;
  }
`;

const Card = styled.div`
  width: 300px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #111;
  border-radius: 10px;
  border: 1px solid #333;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 769px) {
    flex-basis: calc(50% - 20px);
    margin-left: 10px; 
    margin-right: 10px;
  }
`;

const EncryptContainer = () => {
    return (
        <Container>
            <Card>
                <AffineEncrypt />
            </Card>
            <Card>
                <CaesarEncrypt />
            </Card>
           {/* <Card>
                <VigenereEncrypt />
            </Card>*/}
            <Card>
                <AtbashEncrypt/>
            </Card>
            <Card>
                <MorseCipherEncrypt/>
            </Card>
           {/* <Card>
                <BaconEncrypt/>
            </Card>*/}
        </Container>
    );
};

export default EncryptContainer;
