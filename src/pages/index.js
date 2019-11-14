import React from 'react';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import Hero from '../components/hero';
import PostPreview from '../components/post-preview';
import Insta from '../components/insta';

export default () => {
  const posts = usePosts();
  return (
    <>
      <Hero />
      <Layout>
        <h2>About</h2>
        Data-driven Web Developer that leverages background in communications to effectively convey ideas to target audiences. Looking to shake things up within the world of technology. Recipient of Grow with Google Udacity Scholarship for Front-end Web Development in 2018. Winner of Exosite Hackathon &amp; Halloween Costume Contest in 2017. Works well collaborating with others or independently, as well as managing teams.

Guaranteed meet goals and break boundaries.


        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
        <Insta />
      </Layout>
    </>
  );
};