import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Momoent from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { List } from 'antd';
import {
  CalendarOutlined,
  FolderOutlined,
  FireOutlined,
} from '@ant-design/icons';
import Author from '../components/Author';

import '../styles/pages/index.css';

export default function Home({ data }) {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);

  dispatch({
    type: 'GET_ALL_ARTICLES',
    payload: data.results,
  });

  return (
    <>
      <Head>
        <title>Home | Chenxii</title>
      </Head>
      <div className="wrapper">
        <div className="common_main">
          <div className="common_left">
            <List
              header={<div>Most New</div>}
              itemLayout="vertical"
              dataSource={articles}
              renderItem={(item) => (
                <Link href="detail/[id]" as={`/detail/${item.id}`}>
                  <a>
                    <List.Item>
                      <div className="article_title">{item.title}</div>
                      <div className="article_tags">
                        <span>
                          <CalendarOutlined />{' '}
                          {Momoent(item.pub_date).format(
                            'MMMM Do YYYY, h:mm:ss a'
                          )}
                        </span>
                        <span>
                          <FolderOutlined /> {item.category}
                        </span>
                        <span>
                          <FireOutlined /> {item.read_nums} 人
                        </span>
                      </div>
                      <div className="article_cover">
                        <img src={item.image} alt="article cover" />
                      </div>
                      <div className="article_content">{item.introduction}</div>
                    </List.Item>
                  </a>
                </Link>
              )}
            />
          </div>
          <div className="common_right">
            <Author />
          </div>
          <div className="common_new">我是广告位在这！！</div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:8000/article/');
  const data = await res.json();

  return {
    props: { data },
  };
}
