import React from 'react';

const Bio = () => (
  <div>
    <p>
      Written by <strong>Matt Gregg</strong>, an engineer who lives and works in
      Minneapolis, MN
    </p>
    <p>
      Have something to say about this post? Tweet at me{' '}
      <a
        href='https://twitter.com/intent/tweet?screen_name=itwasmattgregg&ref_src=twsrc%5Etfw'
        class='twitter-mention-button'
        data-text='Yo'
        data-show-count='true'
      >
        Tweet @itwasmattgregg
      </a>
      <script
        async
        src='https://platform.twitter.com/widgets.js'
        charset='utf-8'
      />
    </p>
  </div>
);

// componentDidMount() {
//   var scriptNode = document.getElementById('twitter-wjs')
//   if (scriptNode) {
//     scriptNode.parentNode.removeChild(scriptNode)
//   }

//   !function(d,s,id){
//     var js,
//         fjs=d.getElementsByTagName(s)[0],
//         p=/^http:/.test(d.location)?'http':'https';
//     if(!d.getElementById(id)){
//       js=d.createElement(s);
//       js.id=id;
//       js.src=p+'://platform.twitter.com/widgets.js';
//       fjs.parentNode.insertBefore(js,fjs);
//     }
//   }(document, 'script', 'twitter-wjs');
// }

export default Bio;
