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
                <AffineEncrypt />
            </Card>
            <Card>
                <CaesarEncrypt />
            </Card>
            <Card>
                <VigenereEncrypt />
            </Card>
            <Card>
                <AtbashEncrypt/>
            </Card>
            <Card>
                <MorseCipherEncrypt/>
            </Card>
            <Card>
                <BaconEncrypt/>
            </Card>
        </Container>
    );
};

export default EncryptContainer;
