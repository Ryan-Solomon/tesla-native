import React from 'react';

import { FC } from 'react';
import styled from 'styled-components/native';

type TSButtonProps = {
  padding: string;
  width: string;
  buttonColor: string;
};

const SButton = styled.TouchableOpacity<TSButtonProps>`
  background: ${({ buttonColor }) => buttonColor};
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
`;

type TSButtonText = {
  textAlign: string;
  textColor: string;
  fontSize: string;
};

const SButtonText = styled.Text<TSButtonText>`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ textColor }) => textColor};
  text-align: ${({ textAlign }) => textAlign};
`;

type TButtonProps = {
  text: string;
  padding: string;
  width: string;
  textAlign: string;
  buttonColor: string;
  textColor: string;
  fontSize: string;
  onPress: () => void;
};

export const StyledButton: FC<Partial<TButtonProps>> = ({
  text = 'Button Text',
  padding = '10px',
  width = '100%',
  textAlign = 'center',
  buttonColor = '#333',
  textColor = '#fff',
  fontSize = '16px',
  onPress,
}) => {
  return (
    <SButton
      onPress={onPress}
      padding={padding}
      width={width}
      buttonColor={buttonColor}
    >
      <SButtonText
        textAlign={textAlign}
        textColor={textColor}
        fontSize={fontSize}
      >
        {text}
      </SButtonText>
    </SButton>
  );
};
