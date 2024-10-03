import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

/**
 * Deprecated, use new components from the "redesigned" folder.
 * @deprecated
 */

export const HStack = (props: HStackProps) => (
  <Flex direction='row' {...props} />
);
