import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Card, Form, Input, SubmitButton, NewsInfo, NewsTitle, NewsUrl } from './styles';
import useConnectOnchain from '@hooks/useConnectOnchain';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const HomePage = () => {
  const location = useLocation();
  const { program, provider, requestCreateComment } = useConnectOnchain();

  const [url, set_url] = useState('');
  const [title, set_title] = useState('');
  const [comment, set_comment] = useState('');

  console.log(url);
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const urlParam: string= queryParams.get('url');
    const titleParam: string = queryParams.get('title');
    if (queryParams) {
      set_url(decodeURIComponent(urlParam));
      set_title(decodeURIComponent(titleParam));
    }
  }, []);

  const handleCommentChange = (event: any) => {
    set_comment(event.target.value);
  };

  const submitComment = (event: any) => {
    event.preventDefault();
    requestCreateComment(url, comment).then((res) => {
      alert("You have successfully written a comment.");
      set_comment('');
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <Container>
      <Card>
        <NewsInfo>
          <NewsTitle>{title}</NewsTitle>
          <NewsUrl>{url}</NewsUrl>
        </NewsInfo>
        <Form onSubmit={submitComment}>
          <Input
            type="text"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Write your comment..."
          />
          <WalletMultiButton style={{ width: "100%", marginBottom: "10px", padding: "0px 20px", justifyContent: "center" }}/>
          <SubmitButton disabled={!comment} type="submit">
            Submit Comment
          </SubmitButton>
        </Form>
      </Card>
    </Container>
  );
};
export default HomePage;
