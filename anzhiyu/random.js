var posts=["register-claude3-account/","register-chatgpt-account/","upgrade-chatgpt-account/","wildcard-questions/","register-use-wildcard/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };