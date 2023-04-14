import { FC } from 'react';
import { Temperature } from './Temperature';

interface Props {}

export const PromptbarSettings: FC<Props> = () => {
  return (
    <div className="flex flex-col space-y-1 border-t border-white/20 pt-1 text-sm">
      <Temperature />
    </div>
  );
};
