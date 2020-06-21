import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { getUserID } from "../utility/authTokenHandler";
import { deleteNews } from "../services/news";
import { useHistory } from "react-router-dom";
import * as notification from "../utility/notification";





export default function NewsDetailCard(props) {


    const history = useHistory();


    try {
        const { title, createdBy, createdAt, image, description, id } = props;
        const date = new Date(createdAt).toLocaleDateString();
        const name = (createdBy[0].name).toUpperCase();


        const handleDelete = async () => {

            const { status } = await deleteNews(id);

            notification.Success('News deleted succesfully');

            if (status) {
                history.push("/newsListing");
            }
        }

        return (
            <div style={{ marginLeft: '30%', marginTop: '5%', marginRight: '20%', }}>
                <Card style={{ backgroundColor: '#E9F7C9', width: '50%', height: '80%' }}>
                    <CardHeader

                        title={`NewsTitle: ${title}`}
                        subheader={`Publisher: ${name} on ${date}`}
                    />
                    <div style={{ width: '80%', margin: '0 auto', height: '25%' }}>

                    </div>

                    <CardContent>
                        {`News Description: ${description}`}
                    </CardContent>
                    <CardActions style={{marginLeft: '10%'}}>
                        {getUserID() == createdBy[0].id ?
                            <Button variant="outlined" color="secondary" href={`/update/${id}`}>
                                Edit
                     </Button>
                            : null}

                        {getUserID() == createdBy[0].id ?
                            <Button variant="outlined" color="secondary" onClick={handleDelete}>
                                Delete
                     </Button>
                            : null}
                    </CardActions>
                </Card>
            </div>
        );
    } catch (e) {
        return (<div>Loading ...</div>)
    }
}
