const SetStatusByBackground = (status) => {
    let background;

    switch(status) {
        case "Alive":
            background = '#32f83c'
            break;
        case "Dead": 
            background = '#fe4242'
            break;
        case "unknown": 
            background = '#652af9'
            break;
        default: 
            break;
    }

    return background;
}



export default SetStatusByBackground;