fetch('https://candygetshandy.com/ghost/api/content/posts/?key=a5c8b6ba5396f239ec8addff79&fields=title,url,feature_image&limit=2&filter=tag:crafts&filter=tag:illustration&filter=tag:comics&filter=tag:ux-coding')
.then(response => response.json())
.then(result => {
  let posts = result['posts'];
  let postHTML = '';
  for (let i = 0; i < posts.length; i++) {
    postHTML += `<li><a href="${posts[i].url}" target="_blank" rel="noopener noreferrer"><img src="${posts[i].feature_image}" alt="${posts[i].title}" class="category__img"><span class="short-title">${posts[i].title}</span></a></li>`
  }
  document.getElementById('blog-post').innerHTML = postHTML;
})
