import { handler, comment } from "./index.mjs";

(async () => {
  const response1 = await handler({
    newPost: "New title for this post",
    newDesc: "This description is for this post",
  });

  console.log('response => ', response1);

  const response2 = await comment({
    newComment: "This is my first comment"
  });

  console.log('response => ', response2);
})();


  












