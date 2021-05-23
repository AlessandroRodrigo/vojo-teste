import React from 'react';
import useFeedController from './FeedController';
import FeedArticleCard from 'src/components/ui/organisms/feed/article/card';
import { Box, Button, HStack, Stack, Wrap, WrapItem } from '@chakra-ui/react';

function Feed(): JSX.Element {
  const controller = useFeedController();

  return (
    <Box bg={'gray.50'} flex={1}>
      <HStack spacing={'4'} padding={4} maxW={1200} mx={'auto'} alignItems={'flex-start'} marginTop={'6'}>
        <Stack spacing={'4'} w={'70%'}>
          {controller.state.articles &&
            controller.state.articles.map((item) => <FeedArticleCard article={item} key={item.slug} />)}
        </Stack>
        <Box p={'5'} w={'30%'} bg={'white'} borderWidth={'1px'} borderRadius={'md'}>
          <Wrap spacing={2}>
            {controller.state.tags &&
              controller.state.tags.map((item) => (
                <WrapItem key={item}>
                  <Button
                    size={'xs'}
                    cursor={'pointer'}
                    textTransform={'uppercase'}
                    fontWeight={'bold'}
                    borderRadius={'xl'}
                  >
                    {item}
                  </Button>
                </WrapItem>
              ))}
          </Wrap>
        </Box>
      </HStack>
    </Box>
  );
}

export default Feed;
