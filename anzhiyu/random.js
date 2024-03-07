var posts=["register-chatgpt-account/","upgrade-chatgpt-account/","register-claude3-account/","register-use-wildcard/","wildcard-questions/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };