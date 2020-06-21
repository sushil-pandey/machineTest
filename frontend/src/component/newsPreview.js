import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


export default function NewsPreviewCard({ title, createdBy, createdAt, id }) {

  const date = new Date(createdAt).toLocaleDateString();
  const name = (createdBy[0].name).toUpperCase();

  return (
    <Card style={{ marginTop: 20, width: '50%', backgroundColor: '#E9F7C9', marginBottom: 40 }}>
      <CardHeader
        title={`News Title: ${title}`}
        subheader={`Publisher Name: ${name}`}
      />
      <CardContent style={{ marginTop: 20 }}>
        {`Date Published: ${date}`}
      </CardContent>

      <Button size="small" color="primary" href={`newsDetail/${id}`}>
        Click to see News Detail
        </Button>

    </Card>
  );
}
