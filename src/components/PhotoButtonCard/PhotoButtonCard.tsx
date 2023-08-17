import { ReactNode } from 'react';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import {
  PhotoButtonCardDescription,
  PhotoButtonCardImage,
  PhotoButtonCardRoot,
} from './PhotoButtonCard.styles';

export interface PhotoButtonCardProps {
  image: string;
  buttonText: string;
  description?: ReactNode;
}

export function PhotoButtonCard({
  image,
  description,
  buttonText,
}: PhotoButtonCardProps) {
  return (
    <PhotoButtonCardRoot>
      <PhotoButtonCardImage src={image} />
      {description && (
        <PhotoButtonCardDescription>{description}</PhotoButtonCardDescription>
      )}
      <Button variant="primary">{buttonText}</Button>
    </PhotoButtonCardRoot>
  );
}
