import React from 'react';

import Panel from '../../Panel';

import {
  Container,
  Row,
  PostImage,
  Separator,
  Avatar,
  Column,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  SendIcon,
} from './styles';

const FeedPost: React.FC = () => {
  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar src="https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png" alt="Google" />
          <Column>
            <h3>Google</h3>
            <h4>Empresa de Tecnologia</h4>
            <time>1 sem</time>
          </Column>
        </Row>

        <PostImage
          src="https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.2968625:1595353307/Google-Brasil.jpg?f=16x9&$p$f=c2ea591"
          alt="Google"
        />

        <Row className="likes">
          <span className="circle blue" />
          <span className="circle green" />
          <span className="circle red" />
          <span className="number">49</span>
        </Row>

        <Row>
          <Separator />
        </Row>

        <Row className="actions">
          <button>
            <LikeIcon />
            <span>Gostei</span>
          </button>
          <button>
            <CommentIcon />
            <span>Comentar</span>
          </button>
          <button>
            <ShareIcon />
            <span>Compartilhar</span>
          </button>
          <button>
            <SendIcon />
            <span>Enviar</span>
          </button>
        </Row>
      </Container>
    </Panel>
  );
};

export default FeedPost;
