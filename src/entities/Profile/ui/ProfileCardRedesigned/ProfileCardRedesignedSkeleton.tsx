import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { VStack, HStack } from '@/shared/ui/redesigned/Stack';

export const ProfileCardRedesignedSkeleton = () => (
  <Card padding='24' fullWidth>
    <VStack gap='32'>
      <HStack max justify='center'>
        <Skeleton border='100%' width={128} height={128} />
      </HStack>
      <HStack gap='32' max>
        <VStack gap='16' max>
          <Skeleton width='100%' height={38} />
          <Skeleton width='100%' height={38} />
          <Skeleton width='100%' height={38} />
          <Skeleton width='100%' height={38} />
        </VStack>

        <VStack gap='16' max>
          <Skeleton width='100%' height={38} />
          <Skeleton width='100%' height={38} />
          <Skeleton width='100%' height={38} />
          <Skeleton width='100%' height={38} />
        </VStack>
      </HStack>
    </VStack>
  </Card>
);
