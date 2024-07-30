import React from 'react';
import styles from './ToolsPage.module.css'; // CSS modüllerini içe aktarın


const tools = [
  {
    title: 'Instagram Engagement Calculator',
    description: 'Find out the engagement rate of any Instagram influencer',
  },
  {
    title: 'Instagram Audit',
    description: 'Check any Instagram account for fake followers and engagement',
  },
  {
    title: 'Free AI Content Ideas Generator',
    description: 'Say goodbye to endless brainstorming and generate content ideas for social media posts, blogs, and more',
  },
  {
    title: 'Free AI-powered Instagram Post Advisor',
    description: 'Get tailored recommendations on how to increase followers on Instagram and Instagram engagement',
  },
  {
    title: 'TikTok Engagement Rate Calculator',
    description: 'Find out the engagement rate of any TikTok influencer',
  },
  {
    title: 'YouTube Channel Quality Checker',
    description: 'Find the best performing YouTube channel',
  },
  {
    title: 'YouTube Engagement Rate Calculator',
    description: 'Find out the engagement rate of any YouTube channel',
  },
  {
    title: 'TikTok Account Quality Checker',
    description: 'Identify high-quality TikTokers for influencer marketing',
  },
  {
    title: 'TikTok Fake Follower Checker',
    description: 'Ensure authentic influencer collaborations by revealing the real engagement and follower quality of TikTok accounts',
  },
  {
    title: 'YouTube Influencer Pricing Calculator',
    description: 'Discover the true value of any YouTuber with our YouTube influencer price calculator.',
  },
  {
    title: 'Analyze Instagram Post Engagement Rate',
    description: 'Check out the engagement rate of any Instagram post or reels. For reels, discover if it got viral!',
  },
  {
    title: 'Instagram Fake Follower Checker',
    description: 'Spot fake influencers in no time! Use our free fake follower tool to check any Instagram account and analyze its audience quality and engagement authenticity.',
  },
  {
    title: 'Search Instagram influencers by location',
    description: 'Find social media influencers by location for your marketing campaigns',
  },
  {
    title: 'Find Instagram influencers in your niche',
    description: 'Search for influencers by keywords either in their content, bio, or anywhere.',
  },
  {
    title: 'Trending Instagram Hashtags by Country Tool',
    description: 'Discover which popular hashtags to include in your Instagram posts with our easy-to-use free tool',
  },
  {
    title: 'Generate hashtags for your Instagram posts & reels',
    description: 'Instantly generate tailored hashtags for your Instagram posts & reels based on type & category of content!',
  },
];

const ToolsPage = () => {
  return (
    <div className={styles.toolsPage}>
      <h2>Tools & Resources</h2>
      <div className={styles.toolsGrid}>
        {tools.map((tool, index) => (
          <div key={index} className={styles.toolBox}>
            <h3>{tool.title}</h3>
            <p>{tool.description}</p>
            <button>Start now &#x279C;</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsPage;
