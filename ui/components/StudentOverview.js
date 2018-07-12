import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react'
export default class StudentOverview extends React.Component {
    render() {
        return (
            <div>


                <Card.Group>
                    {[...Array(10)].map((x, i) =>
                        <Link to='/student/'>
                            <Card>
                                <Card.Content>
                                    <Image floated='right' size='mini' src='https://dummyimage.com/200x200/000/fff' />
                                    <Card.Header>John Doe {i}</Card.Header>
                                </Card.Content>
                            </Card>
                            <br></br>
                        </Link>
                        
                    )}
                </Card.Group>



            </div>
        )
    }
}