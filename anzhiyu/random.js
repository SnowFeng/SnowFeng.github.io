var posts=["register-use-wildcard/","register-chatgpt-account/","register-claude3-account/","wildcard-questions/","upgrade-chatgpt-account/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };