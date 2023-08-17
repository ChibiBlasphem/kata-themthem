import { Chip } from '../Chip/Chip';

interface CardProps {
  className?: string;
}

export const Card = ({ className }: CardProps) => {
  return (
    <div className={className}>
      <Chip>My chip content</Chip>
    </div>
  );
};
