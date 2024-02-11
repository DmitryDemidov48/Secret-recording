import React from 'react';
import styled from 'styled-components';
import AffineDecrypt from "../decoder/AffineDecrypt";
import CaesarDecrypt from "../decoder/CaesarDecrypt";
import VigenereDecrypt from "../decoder/VigenereDecrypt";
import AtbashDecrypt from "../decoder/AtbashDecrypt";
import BaconDecrypt from "../decoder/BaconDecrypt";
import MorseDecrypt from "../decoder/MorseDecrypt";


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
`;

const Card = styled.div`
  width: 300px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #111;
  border-radius: 10px;
  border: 1px solid #333;
`;

const EncryptContainer = () => {
    return (
        <Container>
            <Card>
                <AffineDecrypt />
            </Card>
            <Card>
                <CaesarDecrypt />
            </Card>
            <Card>
                <VigenereDecrypt />
            </Card>
            <Card>
                <AtbashDecrypt/>
            </Card>
            <Card>
                <MorseDecrypt/>
            </Card>
            <Card>
                <BaconDecrypt/>
            </Card>
        </Container>
    );
};

export default EncryptContainer;
