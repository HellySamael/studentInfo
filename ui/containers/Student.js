import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Icon} from 'semantic-ui-react';

export default class Student extends React.Component {
 render () {
   
   return (
     <div>
      
       <Link to='/'>
        <Button icon>
        <Icon name="home"/></Button>
       </Link><div>
 
       </div>
    </div>
   )
 }
}