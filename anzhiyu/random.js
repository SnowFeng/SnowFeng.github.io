var posts=["register-chatgpt-account/","register-use-wildcard/","upgrade-chatgpt-account/","register-claude3-account/","wildcard-questions/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };