import React, { useEffect } from 'react';
import { useState } from 'react';

const Webmentions = ({ postUrl }) => {
  const [countsStatus, setCountsStatus] = useState('wait');
  const [countData, setCountData] = useState({
    mention: 0,
    like: 0,
    repost: 0,
    reply: 0,
  });

  useEffect(() => {
    const fetchCountData = async () => {
      setCountsStatus('loading');

      const counts = await fetch(
        `https://webmention.io/api/count.json?target=${postUrl}`
      );
      if (!counts.ok) {
        setCountsStatus('error');
        throw new Error(`HTTP error! status: ${counts.status}`);
      } else {
        const data = await counts.json();
        setCountsStatus('success');
        setCountData({ ...countData, ...data.type });
      }
    };
    fetchCountData();
  }, []);

  return (
    <>
      {countsStatus === 'loading' && <div>Loading webmentions</div>}
      {countsStatus === 'error' && (
        <div>There was an error loading webmentions</div>
      )}
      {countsStatus === 'success' && (
        <div>
          ❤️ {countData.like + countData.repost} 💬{' '}
          {countData.mention + countData.reply}
        </div>
      )}
    </>
  );
};

export default Webmentions;

// {#await counts}
//   <p>loading counts</p>
// {:then data}
//   {#if data === undefined}
//     Failed to load...
//   {:else}
//     ❤️ {data.like + data.repost || 0} 💬 {data.mention + data.reply || 0}
//   {/if}
// {/await}
