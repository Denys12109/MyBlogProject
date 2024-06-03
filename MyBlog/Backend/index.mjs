import { MongoClient } from "mongodb";

export const handler = async (event) => {
  console.log('event => ', event);

  if (!event?.newPost || !event?.newDesc) {
    return {
      statusCode: 400,
      event,
      error: 'Ти не передав дані заголовка та опису',
      name: 'createPost'
    };
  }

  const client = new MongoClient('mongodb+srv://denissioa:p25tsetk6GYSSBF@cluster0.6eud1el.mongodb.net/');
  try {
    await client.connect();
    const db = client.db('task1');
    const collectionPost = db.collection('toDo');

    await collectionPost.insertOne({
      title: event.newPost,
      content: event.newDesc,
    });

    const response = {

      statusCode: 200,
      event,
      name: 'createPost'
    };

    return response;
  } finally {
    client.close();
  }
};

export const comment = async (event) => {
  console.log('event => ', event);

  if (!event?.newComment) {
    return {
      statusCode: 400,
      event,
      error: 'Ти не передав дані коментаря',
      name: 'addComment'
    };
  }

  const client = new MongoClient('mongodb+srv://denissioa:p25tsetk6GYSSBF@cluster0.6eud1el.mongodb.net/');
  try {
    await client.connect();
    const db = client.db('task1');
    const collectionComment = db.collection('comments');

    await collectionComment.insertOne({
      comment: event.newComment
    });

    const response = {
      statusCode: 200,
      event,
      name: 'addComment'
    };

    return response;
  } finally {
    client.close();
  }
};

