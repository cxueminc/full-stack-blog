import { IKImage } from "imagekitio-react";

const Image = ({src, className, w, h, alt}) => {
    return (
        <IKImage 
        urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT} 
        path={src}
        className={className}
        loading="lazy"
        lqip={{active: true, quality: 20}} // Low quality image placeholder
        alt={alt} 
        width={w}
        height={h}
        transformation={[ // resize images
            {
                width: w,
                height: h,
            },
        ]}
        />
    );
};

export default Image;