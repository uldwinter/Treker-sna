import { useState } from 'react';
import type { ImgHTMLAttributes } from 'react';

type Props = ImgHTMLAttributes<HTMLImageElement>;

export function ImageWithFallback({ src, alt, ...props }: Props) {
  const [failed, setFailed] = useState(false);
  if (failed || !src) {
    return <div className="flex h-full w-full items-center justify-center bg-gray-100 text-xs text-gray-500">Изображение недоступно</div>;
  }
  return <img src={src} alt={alt} onError={() => setFailed(true)} {...props} />;
}
