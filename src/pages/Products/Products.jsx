import { useSelector, useDispatch } from "react-redux"
import React, { useEffect, useState } from "react"
import { productreduce } from "../../Store/slices/products"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

export default function Products() {
    const dispatch = useDispatch()
    const product = useSelector((state) => state.products.products)
    useEffect(() => {
        dispatch(productreduce())
    }, [])
    return <>
        {product.map((prd) => (
            <Card style={{ float: "left", margin: "10px" ,padding:"20px"}}  sx={{ maxWidth: 345 }} >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={prd.image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {prd.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {prd.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="medium" color="success">
                        Details
                    </Button>
                </CardActions>
            </Card>
        ))}

    </>
}