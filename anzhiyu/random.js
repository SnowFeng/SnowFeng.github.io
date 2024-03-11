var posts=["register-chatgpt-account/","how-to-use-chatgpt-prompt/","register-claude3-account/","register-use-wildcard/","search-onlyfans/","subscribe-midjourney/","subscribe-onlyfans/","upgrade-chatgpt-account/","wildcard-questions/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };