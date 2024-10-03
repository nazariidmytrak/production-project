import { memo } from 'react';
import { ToggleFeatures } from '@/shared/lib/features';

import { SidebarDeprecated } from './deprecated/SidebarDeprecated';
import { SidebarRedesigned } from './redesigned/SidebarRedesigned';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => (
  <ToggleFeatures
    feature='isAppRedesigned'
    on={<SidebarRedesigned />}
    off={<SidebarDeprecated />}
  />
));
