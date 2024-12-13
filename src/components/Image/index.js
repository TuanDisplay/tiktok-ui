import React, { forwardRef, useState } from "react";
import classNames from "classnames";
import styles from "./Image.module.scss";
import { images } from "~/assets/images";

const Image = forwardRef(
  (
    {
      className,
      src,
      alt,
      fallback: customFallback = images.noImage,
      ...props
    },
    ref
  ) => {
    const [fallback, setFallback] = useState("");

    const handleError = () => {
      setFallback(customFallback);
    };

    return (
      <img
        ref={ref}
        className={classNames(styles.wrapper, className)}
        src={fallback || src}
        alt={alt}
        onError={handleError}
        {...props}
      />
    );
  }
);

export default Image;
