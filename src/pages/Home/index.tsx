import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Card, Form, Input, SubmitButton, NewsInfo, NewsTitle, NewsDescription } from './styles';
import useConnectOnchain from '@hooks/useConnectOnchain';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const HomePage = () => {
  const location = useLocation();
  const { program, provider, requestCreateComment } = useConnectOnchain();

  const [url, set_url] = useState('');
  const [comment, set_comment] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const urlParam = queryParams.get('params')
    if (urlParam) {
      set_url(decodeURIComponent(urlParam))
    }
  }, [])

  const handleCommentChange = (event: any) => {
    set_comment(event.target.value);
  };

  const submitComment = (event: any) => {
    event.preventDefault();
    requestCreateComment(url, comment).then((res) => {
      alert("You have successfully written a comment.")
      set_comment('');
    }).catch((err) => {
      console.log(err);
    })
  };

  return (
    <Container>
      <Card>
        <NewsInfo>
          <NewsTitle>
            북한 'GPS 교란 공격' 누적 1482건…"일상 피해 가능성 적어"
          </NewsTitle>
          <NewsDescription>
            북한의 위성항법장치(GPS) 전파 교란 공격 누적 건수가 1500건에 달하는 것으로 파악된 가운데, 일상생활에 영향을 미칠 가능성은 적은 것으로 나타났다. 3일 과학기술정보통신부에 따르면 지난달 29일 오전 5시 50분부터 발신지가 북한의 강령과 옹진으로 추정되는 전파 교란 신호가 이날까지 누적 1482건으로 집계됐다.
          </NewsDescription>
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
