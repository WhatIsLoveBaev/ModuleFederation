import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import { useConditionalStyles } from './styles';


const NewsPage = () => {
    const [color, setColor] = useState<keyof typeof useConditionalStyles>('green');
    const classes = useConditionalStyles[color]();
    return (
        <div>Страница новостей
            <Button
                onClick={() => setColor(prevState => prevState === 'green' ? 'red' : 'green')}
            >
                Test
            </Button>
            <div className={classes.root}>Block</div>
        </div>
    );
};

export default NewsPage;