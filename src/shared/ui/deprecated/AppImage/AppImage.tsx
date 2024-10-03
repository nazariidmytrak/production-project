import {
  ImgHTMLAttributes,
  memo,
  ReactElement,
  useLayoutEffect,
  useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  fallback?: ReactElement;
  errorFallback?: ReactElement;
}

/**
 * Deprecated, use new components from the "redesigned" folder.
 * @deprecated
 */

export const AppImage = memo(
  ({
    className,
    src,
    alt = 'image',
    fallback,
    errorFallback,
    ...otherProps
  }: AppImageProps) => {
    const [isLoading, setisLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
      const img = new Image();
      img.src = src ?? '';
      img.onload = () => {
        setisLoading(false);
      };
      img.onerror = () => {
        setisLoading(false);
        setHasError(true);
      };
    }, [src]);

    if (isLoading && fallback) {
      return fallback;
    }

    if (hasError && errorFallback) {
      return errorFallback;
    }

    return <img className={className} src={src} alt={alt} {...otherProps} />;
  },
);
