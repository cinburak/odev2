// blog.js

let posts = [
  { title: "Node.js Nedir?", content: "Node.js, sunucu taraflı JavaScript çalışma ortamıdır." },
  { title: "JavaScript'e Giriş", content: "JavaScript, web geliştirme için yaygın olarak kullanılır." }
];

function listPosts() {
  console.log("\n📚 Mevcut Postlar:");
  posts.forEach((post, index) => {
    console.log(`${index + 1}. ${post.title} - ${post.content}`);
  });
}

function addPost(title, content) {
  posts.push({ title, content });
  console.log(`\n✅ Yeni post eklendi: ${title}`);
}

// Postları sıralama (ilk listeleme)
listPosts();

// Yeni post ekleme
addPost("Express.js Nedir?", "Express.js, Node.js için minimal ve esnek bir web uygulama çatısıdır.");

// Postları tekrar sıralama (ekledikten sonra)
listPosts();
