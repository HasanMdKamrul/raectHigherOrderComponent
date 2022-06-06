

const BoilingPointVerdict = ({temparature = 0}) => {
    if (temparature >= 100) {
        return "The water would boil";
    }

    return "The water would not boiled";
}

export default BoilingPointVerdict;