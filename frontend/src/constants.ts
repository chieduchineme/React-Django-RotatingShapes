// eslint-disable-next-line
export const ws = new WebSocket(`ws://localhost:8000/random-value/`);

export const textureUrlArray : Array<string> = [
    "https://res.cloudinary.com/demo/image/upload/w_800,h_400,c_pad,b_auto:predominant_gradient_contrast:4/c_pad,ar_1.0/w_200,f_auto,q_auto/multicolored_image",
    "https://res.cloudinary.com/demo/image/upload/e_sepia:50/w_200,f_auto,q_auto/coast.jpg",
    "https://res.cloudinary.com/demo/image/upload/yellow_tulip.png",
    "https://res.cloudinary.com/demo/image/upload/e_brightness:30/w_200,f_auto,q_auto/mountain.jpg",
    "https://res.cloudinary.com/demo/image/upload/e_fill_light:80/w_200,f_auto,q_auto/8jsb1xofxdqamu2rzwt9q.jpg",
    "https://res.cloudinary.com/demo/image/upload/w_300,h_100,c_fit/w_200,f_auto,q_auto/flower.jpg",
    "https://res.cloudinary.com/demo/image/upload/e_improve/gray_mountain.jpg",
    "https://res.cloudinary.com/demo/image/upload/l_text:Arial_100_bold:San%2520Fransisco/l_text:Arial_100:%257C/g_west,fl_layer_apply,x_w_add_20/l_text:Arial_100_italic:62%25C2%25B0F/g_west,fl_layer_apply,x_w_add_20/photo-1430609098125-581618d0482f_xvayby"
];

export type RotatingShapesProps = {
    position: number 
    textureUrl: string
    hoverTextureUrl: string 
    randomValue : number
  }
  