import React, { useEffect, useState } from 'react';

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

      let counts;
      try {
        counts = await fetch(
          `https://webmention.io/api/count.json?target=${postUrl}`
        );
      } catch (err) {
        console.error(err);
        setCountsStatus('error');
        return;
      }
      if (counts && !counts.ok) {
        setCountsStatus('error');
        throw new Error(`HTTP error! status: ${counts.status}`);
      } else {
        const data = await counts.json();
        setCountsStatus('success');
        setCountData((c) => ({ ...c, ...data.type }));
      }
    };
    fetchCountData();
  }, [postUrl]);

  return (
    <>
      {countsStatus === 'loading' && <div>Loading webmentions</div>}
      {countsStatus === 'error' && (
        <div>There was an error loading webmentions</div>
      )}
      {countsStatus === 'success' && (
        <div>
          <span role='img' aria-label='likes'>
            ❤️
          </span>{' '}
          {countData.like + countData.repost}{' '}
          <span role='img' aria-label='mentions'>
            💬
          </span>{' '}
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
