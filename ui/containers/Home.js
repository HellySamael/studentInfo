import React, {Component} from 'react';
import InputPreview from '../components/InputPreview';
import {connect} from 'react-redux';
import { setMessage } from '../actions/message';
import { Link } from 'react-router-dom';
import StudentOverview from '../components/StudentOverview';
import { Tab ,Card, Icon, Image ,Button, Grid} from 'semantic-ui-react';
class Home extends Component {
    render () {
        const panes = [
            { menuItem: 'CP', render: () => <Tab.Pane>  <StudentOverview/> </Tab.Pane> },
            { menuItem: 'CE1', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
            { menuItem: 'CE2', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
          ]
          const TabExampleBasic = () => <Tab  attached={false} panes={panes} />
        return (
         <div>   
                   <Grid centered columns={2}>
        <Grid.Column>
        <TabExampleBasic/>
      </Grid.Column>
        </Grid>
       
        </div>
        
    )
    }
}

export default connect(state => state)(Home);