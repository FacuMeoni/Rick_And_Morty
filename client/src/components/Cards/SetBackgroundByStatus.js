const SetStatusByBackground = (status) => {
    let background;

    switch(status) {
        case "Alive":
            background = '#4df855';
            break;
        case "Dead": 
            background = '#fe4242'
            break;
        case "unknown": 
            background = '#888'
            break;
        default: 
            break;
    }

    return background;
}



export default SetStatusByBackground;