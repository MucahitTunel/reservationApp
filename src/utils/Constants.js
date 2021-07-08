import { Dimensions } from 'react-native';

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

export default Constants = {
    MAX_WIDTH: WIDTH,
    MAX_HEIGHT: HEIGHT,
    RATIO: HEIGHT/WIDTH,
    RADIUS: WIDTH/7,

    TEXT_BOX_WIDTH: WIDTH * 0.8,
    TEXT_BOX_HEIGHT: 50,

    PLACEHOLDER_COLOR: "rgba(255,255,255,0.4)",
    TEXT_COLOR: "white",
}
