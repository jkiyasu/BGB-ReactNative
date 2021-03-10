import React from "react";
import { View } from "react-native";
import HeaderComponent from "../shared/header/header_component";
import ToolbarComponent from "../shared/toolbar/toolbar_component";
import { mapStyles } from "./_map";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import DropDownMenuProps from '@material-ui/core/MenuItem';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MapComponent = ({navigation}) => {
  return (
    <View >
      <HeaderComponent style={mapStyles.main}
        navigation={navigation} 
        title='Map'
      >
      </HeaderComponent>
      <Card>
        <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
      <DropDownMenuProps>
        <InputLabel>Topic</InputLabel>
        <Select
            labelId="topics"
            id="topics"
            >
            <MenuItem >Topic 1</MenuItem>
            <MenuItem >Topic 2</MenuItem>
            <MenuItem >Topic 3</MenuItem>
        </Select>
      </DropDownMenuProps>
      <ToolbarComponent style={mapStyles.navigation} navigation={navigation}></ToolbarComponent>
    </View>
  )
}

export default MapComponent