var posts=["chatgpt-free-and-more/","day-news-2024-3-12-1/","day-news-2024-3-12-2/","gpt-4o/","gpt4o-use/","gpt-full-opening/","gpt5-news-2024-3-22/","how-to-use-chatgpt-prompt/","how-to-use-heygen/","how-to-use-suno/","how-to-use-overleaf/","midjourney-web-opened/","openai-begins-training-new-frontier-model-but-gpt-5-wont-come-for-at-least-90-days/","openai-gpt-4o-2024/","register-claude3-account/","register-chatgpt-account/","register-midjourney-account/","register-the-gpt-manually/","register-use-wildcard/","sora_news/","search-onlyfans/","subscribe-midjourney/","subscribe-onlyfans/","subscribe-poe/","upgrade-chatgpt-account/","why-use-gpt/","wildcard-questions/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };