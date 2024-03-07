var posts=["register-claude3-account/","register-use-wildcard/","register-chatgpt-account/","upgrade-chatgpt-account/","wildcard-questions/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };