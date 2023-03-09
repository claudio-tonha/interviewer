import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const InterviewInstructions = () => {
    return (<Card sx={{ width: '100%' }}>
        <CardMedia
            component="img"
            height="140"
            image="https://d3kqdc25i4tl0t.cloudfront.net/articles/content/817_463103_hero.jpg"
            alt="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Instructions
            </Typography>
            <Typography variant="body2" color="text.secondary">
                <p>1. Enable feedback level per question if necessary (Beginner, Intermediate, Expert)</p>
                <p>2. Add each question in a line</p>
                <p>3. Click on 'START' after adding all questions (this action clears the feedbacks)</p>
            </Typography>
        </CardContent>
    </Card>)
}

export default InterviewInstructions;